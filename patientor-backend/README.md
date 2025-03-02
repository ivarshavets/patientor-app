# Backend

## Setup
1. Init the project `npm init` and install needed dependancies
2. Instal a server:
- GraphQL and Apollo: `npm install @apollo/server graphql`
- for non-graphQl project it could be Express server:
3. Add a database for storing data
- We use MongoDB and we install the Mongoose library that offers a higher-level API.
  - install Mangoose and dotenv: `npm install mongoose dotenv`

- Our MongoDB provider - MongoDB Atlas. Set up a cluster and establish the connection to the database: Get a connection `MongoDB URI` and add it to `.env`.
- mongo.js
  - we can run it with the command `node mongo.js yourPassword`
- define the schema and the matching model
- connecte the backend to a database

4. Install Apollo client: `npm install @apollo/client`
- Initialize ApolloClient
