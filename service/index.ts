import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import admin from 'firebase-admin';
import { getMessaging } from "firebase-admin/messaging";


dotenv.config();

const app: Express = express();
const port = process.env.PORT;

var serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS as string);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server!');
});

app.get('/sendMessage', (req: Request, res: Response) => {
  const registrationToken = 'dI-UiGI-3G50WbvPWcRZ7n:APA91bHoQOF-zKWhjCtfIWgbpOfiPvFwGXAe0PLNDADKXQ5KLGXfas95W5C6XKEnoQhHyydcwDK39pfXchD8puD6lKopvySLz8IkqRSYUCE0vr60HpVuHF7FW16Lx77dYr1_gJnQWMYb';

  const message = {
    data: {
      score: '850',
      time: '2:45'
    },
    token: registrationToken
  };

  // Send a message to the device corresponding to the provided
  // registration token.
  getMessaging().send(message)
    .then((response) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', response);
      res.send('Successfully sent message!');
    })
    .catch((error) => {
      console.log('Error sending message:', error);
      res.send('Error sending message!');
    });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});



