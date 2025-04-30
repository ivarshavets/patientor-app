import { useQuery } from '@tanstack/react-query';

import { Patient} from '../types'
import patientService from "../api/patients";

const PatientsPage = () => {
  // const [patients, setPatients] = useState<Patient[]>([])
  // useEffect(()=> {
  //   const fetchPatients = async () => {
  //     const patients = await patientService.getAll();
  //     setPatients(patients);
  //   }
  //   fetchPatients()
  // },[])
  const {data, isLoading, isError} = useQuery<Patient[], Error>({
    queryKey: ['patients'],
    queryFn: patientService.getAll,
  });

  if (!data && isLoading) {
    return 'Loading'//<CircularProgress />
  }

  if (isError) {
    return 'Oops, something is wrong' //<Typography>Oops, something is wrong</Typography>
  }

  if (!data || !data.length) {
    return <div>no data</div>
  }

  return (
    <ul>
      {data.map((p: Patient) => {
        return <li key={p.id}>{p.name}</li>
      })}
    </ul>
  )
}

export default PatientsPage
