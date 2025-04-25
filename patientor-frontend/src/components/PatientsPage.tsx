import { useQuery } from '@apollo/client'
import { ALL_PATIENTS } from './../queries'
import { Patient} from '../types'

const PatientsPage = () => {
  const result = useQuery(ALL_PATIENTS)

  if (result.loading) {
    return <div>loading...</div>
  }

  if (result && !result.data.allPatients) {
    return <div>no data</div>
  }


  return (
    <ul>
      {result.data.allPatients.map((p: Patient) => {
        return <li key={p.id}>{p.name}</li>
      })}
    </ul>
  )
}

export default PatientsPage
