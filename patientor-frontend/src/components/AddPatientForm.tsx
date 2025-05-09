import { useState } from "react"
import { useMutation } from "@tanstack/react-query";
import { Patient, NewPatient, Gender } from "../types"
import patientService from "../services/patients";

const AddPatientForm = () => {
  const initialFormValues: NewPatient = {
    name: '',
    occupation: '',
    gender: Gender.Female,
    ssn: '',
    dateOfBirth: ''
  }
  // const queryClient = useQueryClient()

  const [formValues, setFormValues] = useState(initialFormValues)
  const {mutate} = useMutation<Patient, Error, NewPatient>({
    mutationFn: (patientData: NewPatient) => patientService.postPatient(patientData)
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    mutate(formValues)
    setFormValues(initialFormValues)
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>
          Name
          <input
            value={formValues.name}
            onChange={handleChange}
            type="text"
            name="name"
          />
        </label>
      </div>
      <div>
        <label>
          Occupation
          <input
            value={formValues.occupation}
            onChange={handleChange}
            type="text"
            name="occupation"
          />
        </label>
      </div>
      <div>
        <label>
          Gender
          <input
            value={formValues.gender}
            onChange={handleChange}
            type="text"
            name="gender"
          />
        </label>
      </div>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddPatientForm
