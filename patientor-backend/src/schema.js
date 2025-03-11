const typeDefs = `
  type Patient {
    name: String!,
    dateOfBirth: String,
    ssn: String,
    gender: String,
    occupation: String
    id: ID!
  }

  type Diagnose {
    code: String!,
    name: String!,
    latin: String
  }

  type Query {
    allPatients: [Patient],
    allDiagnoses: [Diagnose]
  }
`

module.exports = typeDefs
