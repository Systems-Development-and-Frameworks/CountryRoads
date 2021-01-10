const { stitchSchemas } = require('@graphql-tools/stitch');
const { applyMiddleware } = require('graphql-middleware');
const typeDefs = require('./typeDefs');
const Resolvers = require('./resolver');
const permissions = require('./permissions');
const GraphCmsSchema = require('./graphCms/schema');
const executor = require('./graphCms/executor');

module.exports = async () => {
  const graphCmsSchema = await GraphCmsSchema();
  const resolvers = Resolvers([{ schema: graphCmsSchema, executor }]);

  let gatewaySchema = stitchSchemas({
    subschemas: [
      {schema: graphCmsSchema},
    ],
    typeDefs,
    resolvers,
  });
  gatewaySchema = applyMiddleware(gatewaySchema, permissions);
  return gatewaySchema;
};