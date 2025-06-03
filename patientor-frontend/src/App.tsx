import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom';
import SendPage from './pages/SendPage';
import PatientsPage from './pages/PatientsPage';
import AddPatientForm from './components/AddPatientForm'
import Navigation from './components/Navigation';

function App() {

  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Navigation />
      <div className='container'>
        <Routes>
          <Route path="/" index element={<PatientsPage />} />
          <Route path="/send" element={<SendPage />} />
        </Routes>
        <AddPatientForm />
      </div>
    </div>
  )
}

export default App
