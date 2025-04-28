# Backend

## Setup
1. Init the project and install dependancies
```
npm init
npm install typescript --save-dev
```
- add TypeScript's Native Compiler `tsc` to scripts, which can help us initialize the project by generating our tsconfig.json
```
"scripts": {
    "tsc": "tsc"
  },
```
- Initialize tsconfig.json
```
npm run tsc -- --init
```
2. Set up a server:
Express server for non-graphQL endpoints.
(GraphQL and Apollo for graphQL endpoints.)

- Add Cors to allow requests from other origins to backend.
```
npm install express cors
npm install --save-dev @types/express
```
- Set up the development and add the scripts to run the app
```
npm install --save-dev ts-node-dev
```
```
"scripts": {
  "start": "ts-node index.ts",
  "dev": "ts-node-dev index.ts"
}
```
3. Set up eslint with rules
```
npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser

"scripts": {
  "lint": "eslint --ext .ts ."
}
```
4. Add a database for storing data
- MongoDB and Mongoose library that offers a higher-level API.
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
5. Define the schema and the matching model in the `models` folder
- connect the backend to a database
6. Create data types.
7. Create routes with REST endpoints
8. Create services that take care of the data manipulations.
