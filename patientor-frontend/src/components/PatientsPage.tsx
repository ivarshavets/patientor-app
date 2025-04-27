import { useState, useEffect } from 'react'
import { Patient} from '../types'
import patientService from "../api/patients";

const PatientsPage = () => {
  const [patients, setPatients] = useState<Patient[]>([])

  useEffect(()=> {
    const fetchPatients = async () => {
      const patients = await patientService.getAll();
      setPatients(patients);
    }
    fetchPatients()
  },[])

  if (!patients) {
    return <div>no data</div>
  }


  return (
    <ul>
      {patients.map((p: Patient) => {
        return <li key={p.id}>{p.name}</li>
      })}
    </ul>
  )
}

export default PatientsPage
