import axios from "axios";

import { apiBaseUrl } from "../config";
import { Patient, NewPatient } from "../types";

const getAllPatients = async ():Promise<Patient[]> => {
  const { data } = await axios.get(
    `${apiBaseUrl}/patients`
  );
  return data;
};

export const postPatient = async (patientData: NewPatient): Promise<Patient> => {
  const {data} = await axios.post<Patient>(
    `${apiBaseUrl}/patients`, patientData
  );
  console.log('Post data', data);
  return data
};

const patientService = {
  getAllPatients,
  postPatient
}

export default patientService
