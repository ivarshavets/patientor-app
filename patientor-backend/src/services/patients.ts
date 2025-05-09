import patients from '../../data/patients';
import {v1 as uuid} from 'uuid';
import { NewPatient } from '../types';

const getAll = () => {
  return patients
  // return PatientModel.find({});
};

const addEntry = (entry:NewPatient) => {
  const newPatient = {
    ...entry,
    id: uuid()
  }
  patients.push(newPatient)
  console.log('new list', patients)
  return newPatient
};

const patientsService = {
  getAll,
  addEntry
  };

  export default patientsService;
