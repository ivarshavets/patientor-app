import mongoose from 'mongoose'

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

const Diagnose = mongoose.model('Diagnose', diagnoseSchema)
export default Diagnose
