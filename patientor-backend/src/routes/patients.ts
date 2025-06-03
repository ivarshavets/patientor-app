import express from 'express'
//import patients from '../../data/patients'
import patientsService from '../services/patients'

const router = express.Router()

router.get('/', async (_req, res) => {
  const result = await patientsService.getAll()
  res.send(result)
})

router.post('/', async (req, res) => {
  try {
    // // assuring that the object in a POST request has the correct type
    // const newPatient = parsePatientEntry(req.body)
    const result = await patientsService.addEntry(req.body)
    res.json(result)
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
      res.status(404).send(errorMessage)
    }
  }
})

router.delete(':id', (req, res) => {
  const id = req.params.id
  //patients.filter((patient) => patient.id === id)

  res.status(204).end()
})

export default router
