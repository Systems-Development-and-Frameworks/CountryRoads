
# Exercise \#5

Learn how to use graphql-middlewares and start programming with NuxtJS.

**Deadline is January 8th, 2020**

1. Optional tasks of exercise #3 are now required: Implement a permission
   layer around your app. Use [graphql-shield](https://github.com/maticzav/graphql-shield)
   and [graphql-middleware](https://github.com/prisma-labs/graphql-middleware).
   Here is some inspiration how your test cases could look like:
   ![Test cases for a permission layer](../3/permissions.png)
2. Create a NuxtJS app and write a couple of different page components. Your
   page component should have some level of nesting. Like `/nested.vue`,
   `/nested/index.vue` and `/nested/_id.vue`. 
3. Connect your frontend with your backend via [apollo-module](https://github.com/nuxt-community/apollo-module).
   So if you update a data object in your frontend, it sends a graphql mutation
   to the backend.
4. Make use of apollo-module's [authentication helpers](https://github.com/nuxt-community/apollo-module#authentication)
   and have at least one page component which requires authentication.
5. Refactor your backend and frontend to show something different than just
   todos and users. Be creative.
6. Do a remote pair-programming session. You can choose any pairing partner,
   either from our course or you can also ask our open-source community.
7. Record your pair-programming session and publish it. Choose any software you
   want. If you don't like being on the web, disable your webcam and save the
   video as "unlisted". I recommend [PeerTube](https://joinpeertube.org/) to
   host the video but there is also this commercial platform called YouTube as
   an alternative. Send a link to your recorded video to htw@roschaefer.de.
8. Write backend and frontend tests. Mock `this.$apollo` in your frontend tests
   and respond with some mocked data or simulate an error.
9. Request a review from @roschaefer.
10. Request a review from sb. else.

### Teaching goal

The point of exercise 3. and 4. is to socialize and see how easy it is to find
people from around the world who like to program with you and learn with you.
Even a recording of a pairing session can be interesting learning material. 
Think of people who don't have access to public education, e.g. studying at a
university like you do.

Also, if you get stuck, people can help out. Often, developers wait for too long
before they ask for help. It causes a lot of frustration and this particular
situation happened for a team while working on exercise \#3.  Asking for help in
our community chat is quick and usually there is always somebody around who can
help out: https://human-connection.org/discord


If you copy code from other groups, please give credit to them in your commit
messages.