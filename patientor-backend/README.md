# Backend

## Setup
1. Init the project `npm init` and install needed dependancies
<!-- - Install TS: `npm install typescript --save-dev` -->
2. Instal a server:
- GraphQL and Apollo: `npm install @apollo/server graphql`
- For non-graphQl project it could be Express server
- GraphQL server accepts parameters that we need to specify: `typeDefs` with schemas and `resolvers`.
- init the server
```
const server = new ApolloServer({
  typeDefs,
  resolvers,
})


startStandaloneServer(server, {
  listen: PORT,
}).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
```
- If everything is correct, the server can be run and the GraphOS Studio Explorer will be opened at localhost:4000
3. Add a database for storing data
- We use MongoDB and Mongoose library that offers a higher-level API.
  - install Mangoose and dotenv: `npm install mongoose dotenv`
  - dotenv for working with env variables
- Our MongoDB provider - MongoDB Atlas. Set up a cluster and establish the connection to the database: Get a connection `MongoDB URI` and add it to `.env`.
- Connect to DB:
```
mongoose.connect(MONGODB_URI)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })
```
4. Define the schema and the matching model in the `models` folder
- connect the backend to a database

5. Define resolvers which define how GraphQL queries are responded to.

4. Install Apollo client: `npm install @apollo/client` to handle the communication between the React app and GraphQL
`npm install @apollo/client graphql`
- Initialize ApolloClient. The app can communicate with a GraphQL server using the client object.
```
 const client = new ApolloClient({
   uri: 'http://localhost:5173',
   cache: new InMemoryCache(),
 })
```
The client can be made accessible for all components of the application by wrapping the App component with ApolloProvider.
```
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
```
5. Add queries to `queries` file
