import express from 'express'
//import patients from '../../data/patients'
import patientsService from '../services/patients'

const router = express.Router()

router.get('/', (_req, res) => {
  console.log('GET')
  res.send(patientsService.getAll())
})

router.post('/',  (req, res) => {
  try {
    console.log('Post body', req.body)
    // // assuring that the object in a POST request has the correct type
    // const newPatient = parsePatientEntry(req.body)
    const result =  patientsService.addEntry(req.body)
    console.log('result', result)
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
