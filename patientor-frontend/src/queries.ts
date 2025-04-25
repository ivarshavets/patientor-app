import { gql } from "@apollo/client";

export const ALL_PATIENTS = gql`
  query {
    allPatients {
      id,
      name,
      occupation
    }
  }
`
export const CREATE_PATIENT = gql`
  mutation createPatient($name: String!, $occupation: String!, $gender: String, $ssn: String, $dateOfBirth: String) {
  createPatient(
    name: $name,
    occupation: $occupation,
    gender: $gender,
    dateOfBirth: $dateOfBirth
  ) {
    id
    name
    occupation
    gender
    ssn
    dateOfBirth
  }
}
`
