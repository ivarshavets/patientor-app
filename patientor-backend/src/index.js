const mongoose = require('mongoose');
mongoose.set('strictQuery',false)
require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })


const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const PORT = process.env.PORT || 4000
startStandaloneServer(server, {
  listen: PORT,
}).then(() => {
  console.log(`Server ready`)
})
