const mongoose = require('mongoose')

const diagnoseSchema = new mongoose.Schema({
  cose: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  latin: {
    type: String,
  }
})

diagnoseSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Diagnose', diagnoseSchema)
