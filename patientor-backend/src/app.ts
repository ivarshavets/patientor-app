import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { MONGODB_URI } from './config';

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined');
}

mongoose.connect(MONGODB_URI)
.then(() => {
  console.log('connected to MongoDB')
})
.catch((error: unknown) => {
  if (error instanceof Error) {
    console.log('error connecting to MongoDB:', error.message)
  } else {
    console.log('unknown error connecting to MongoDB:', error)
  }
})

const app = express();
app.use(cors())
app.use(express.json());

export default app
