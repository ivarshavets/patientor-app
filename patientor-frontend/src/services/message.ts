import axios from 'axios';
// import { Message } from "../types";
import {apiBaseUrl} from "../config";


const postMessage = async (messageData: { recipientEmail: string, message: string }): Promise<{ recipientEmail: string, message: string }> => {
  const {data} = await axios.post<{ recipientEmail: string, message: string }>(
    `${apiBaseUrl}/send`, messageData
  );
  console.log('Post data', data);
  return data;
}

const messageService = {
  postMessage
};

export default messageService
