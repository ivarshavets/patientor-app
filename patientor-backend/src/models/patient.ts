import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: String,
    required: true
  },
  ssn: {
    type: String,
  },
  gender: String,
  occupation: String,
  diagnose: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Diagnose'
  }
})

// Even though the _id property of Mongoose objects looks like a string, it is in fact an object. The toJSON method we defined transforms it into a string just to be safe.
patientSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Patient = mongoose.model('Patient', patientSchema)
export default Patient
