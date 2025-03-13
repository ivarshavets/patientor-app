const patients = [
  {
    "id": "d2773336-f723-11e9-8f0b-362b9e155667",
    "name": "John McClane",
    "dateOfBirth": "1986-07-09",
    "ssn": "090786-122X",
    "gender": "male",
    "occupation": "New york city cop"
  }
]

const diagnoses = [
  {
    "code": "M24.2",
    "name": "Disorder of ligament",
    "latin": "Morbositas ligamenti"
  },
  {
    "code": "M51.2",
    "name": "Other specified intervertebral disc displacement",
    "latin": "Alia dislocatio disci intervertebralis specificata"
  }
]

const resolvers = {
  Query: {
    allPatients: () => patients,
    allDiagnoses: () => diagnoses,
  }
}

module.exports = resolvers
