import express from 'express';
import Message from '../models/message';

const router = express.Router();

router.post('/', async (req, res) => {
  const { recipientEmail, message } = req.body;

  // if (recipientEmail && subject && message) {
  //   res.status(200).send({ status: 'success', message: 'Email sent successfully!' });
  // } else {
  //   res.status(400).send({ status: 'error', message: 'Invalid request data' });
  // }
  try {
    const newMessage = new Message({recipientEmail, message});
    await newMessage.save();
    res.status(201).send({ status: 'success', message: 'Email sent successfully!' });
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
      res.status(500).send(errorMessage);
    } else {
      res.status(500).send('Unknown error occurred');
    }
  }
});

export default router;
