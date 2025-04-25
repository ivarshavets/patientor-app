import { useState } from "react"
import { useMutation } from "@apollo/client"

import { CREATE_PATIENT } from "../queries"
// import { Patient, PatientFormValues } from "../types"

const AddPatientForm = () => {
  const initialFormValues = {
    name: '',
    occupation: '',
    gender: ''
  }

  const [formValues, setFormValues] = useState(initialFormValues)
  const [createPatient] = useMutation(CREATE_PATIENT);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    createPatient({ variables: formValues });
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
