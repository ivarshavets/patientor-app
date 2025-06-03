import Patient from '../models/patient';
import { NewPatient } from '../types';

const getAll = async () => {
  const patients = await Patient.find({});
  return patients
};

const addEntry = async (entry:NewPatient) => {
  const newPatient = new Patient(entry)
  const savedPatient = await newPatient.save()
  return savedPatient
};

const patientsService = {
  getAll,
  addEntry
  };

export default patientsService;
