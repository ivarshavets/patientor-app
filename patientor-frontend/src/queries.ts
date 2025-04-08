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
