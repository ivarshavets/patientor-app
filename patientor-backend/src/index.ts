import express from 'express';
import cors from 'cors';

import patientsRouter from './routes/patients'

const app = express();
app.use(cors())

app.use(express.json());

const PORT = 3001;

app.use('/api/patients', patientsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
