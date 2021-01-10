const schema = require('./schema');
const { graphql } = require('graphql');
const { print } =require('graphql/language/printer');

const jwtSign = (payload) => jwt.sign(payload, JWT_SECRET, { algorithm: 'HS256', expiresIn: '1h' });
const contextMock = {jwtSign}


module.exports = async ({ document, variables }) => {
    const sch = await schema();
    const query = print(document);
    const operation = document.definitions[0].operation;
    console.log(query);
    let ops;

    if(operation === 'mutation' || operation === 'query'){
        const tokens = query.split('!')
        const ab = Object.values(variables);
        var zip = [];
        let max = tokens.length - 1;
        for(let i = 0; i < tokens.length; i++){
            if(max-- > 0){
                zip.push(tokens[i]+`="` +ab[i]+`"`);
            }else {
                zip.push(tokens[i]);
            }
        }
        zip=zip.join(' ');
        ops=zip;
    }
    else{
            ops=  `
                mutation ($name: String="test", $email:String="test", $password:String="test") {
                    createPerson(data: {name: $name, email: $email, password: $password}) {
                        id
                    }
                }
            `;
    }
    return (await graphql( sch, ops, contextMock))
};