// import React from 'react';
import { useState, SyntheticEvent, ChangeEvent } from "react";
import messageService from "../services/message";

const SendPage: React.FC = () => {
  const [formData, setFormData] = useState({
    recipientEmail: '',
    message: ''
  });
  const [status, setStatus] = useState<string | ''>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget as HTMLFormElement);
    // const recipientEmail = formData.get('recipientEmail') as string;
    // const subject = formData.get('subject') as string;
    // const message = formData.get('message') as string;

    try {
      // await sendEmail(formData.recipientEmail, formData.message);
      messageService.postMessage(formData);
      setStatus('Email sent successfully!');
      setFormData({
        recipientEmail: '',
        message: ''
      });
    } catch (error) {
      setStatus('Failed to send email. Please try again.');
      console.error('Error sending email:', error);
    }
  };

  return (
    <div>
      <h2>Send a Message</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            Recipient Email
            <input
              value={formData.recipientEmail}
              onChange={handleChange}
              type="email"
              name="recipientEmail"
              required
              placeholder="Enter recipient's email"
            />
          </label>
        </div>
        <div>
          <label>
            Message
            <textarea
              value={formData.message}
              onChange={handleChange}
              name="message"
              required
              placeholder="Enter your message"
            ></textarea>
          </label>
        </div>
        <button type="submit">Send</button>
        <button type="reset">Reset</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default SendPage;
