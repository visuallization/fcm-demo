# FCM Service

A small FCM node service which sends messages.

## Getting Started

- Run `cp .example.env .env` and set the variables.
- The `GOOGLE_APPLICATION_CREDENTIALS` should contain the local path to the private key of your service account. This file can be generated and donwloaded from your Firebase project via Firebase -> Settings -> Service Accounts -> Generate New Private Key -> Generate Key.
- The `CLIENT_REGISTRATION_TOKEN` can be received from your app via the button `Request Token!`.

- Run `yarn` to install the dependencies

- Run `yarn dev` to start the service in development mode
- Run `yarn start` to start the service in production mode
- Run `yarn build` to build the service

Visit `/sendMessage` (localhost:<PORT>/sendMessage) to send a message to the app.

## Useful Links:

- https://firebase.google.com/docs/cloud-messaging/server
- https://firebase.google.com/docs/admin/setup
- https://firebase.google.com/docs/cloud-messaging/send-message