# FCM Demo

git remote add origin git@github.com:visuallization/fcm-demo.git

## Getting Started

- Run `cp .example.env .env` and set the variables. You can find most of the values in your firebase project if you set up a web app in firebase. 
- The `VAPID_KEY` needs to be generated in firebase -> Project Settings -> Cloud Messaging -> Web Push Certificates -> Generate Key Pair.
> :warning: Make sure to also uncomment the code in `firebase-messaging-sw.js` and insert the env values direclty in `firebase.initializeApp`. If you don't do this the app won't be able to actually receive messages.

- Run `yarn` to install the dependencies

- Run `yarn dev` to start up the development server and start coding
- Run `yarn build` to build the project
- Run `yarn preview` to serve the local build

## Sending Messages

You have the possibility to choose between 2 different FCM APIs:

### Firebase Cloud Messaging API (V1)
In your terminal run
```
curl --location --request POST 'https://fcm.googleapis.com/v1/projects/<PROJECT_ID>/messages:send' \
--header 'Authorization: Bearer <ACCESS_TOKEN>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "message": {
    "token": "<TOKEN>",
    "data": {
    "body": "Body of Your Notification in data",
    "title": "Title of Your Notification in data",
    "key_1": "Value for key_1",
    "key_2": "Value for key_2"
    }
  }
}'
```

- `PROJECT_ID` the name of your project in firebase. Can be found in the project settings or in the URL of the firebase project.
- `TOKEN` get the token from the console of the react app. It should display something like: "Current Token: ....."
- `ACCESS_TOKEN` create a success token. Check out this post on how to do this: https://apoorv487.medium.com/testing-fcm-push-notification-http-v1-through-oauth-2-0-playground-postman-terminal-part-2-7d7a6a0e2fa0

### Cloud Messaging API (Legacy)
In your terminal run:
```
curl -X POST -H "Authorization: key=<SERVER_KEY>" -H "Content-Type: application/json" -d '{
  "notification": {
    "title": "Portugal vs. Denmark",
    "body": "5 to 1",
    "icon": "firebase-logo.png",
    "click_action": "http://127.0.0.1:5173/"
  },
  "to": "<TOKEN>"
}' "https://fcm.googleapis.com/fcm/send"
```

- `SERVER_KEY` get the server key from firebase -> Project Settings -> Cloud Messaging -> Cloud Messaging API (Legacy). If Cloud Messaging API (Legacy) does not exist you first need to enable it via google cloud console.
- `TOKEN` get the token from the console of the react app. It should display something like: "Current Token: ....."

## Useful Links:
- https://firebase.google.com/docs/web/setup
- https://firebase.google.com/docs/cloud-messaging/js/client
- https://firebase.google.com/docs/cloud-messaging/js/receive
- https://console.firebase.google.com/
- https://developers.google.com/oauthplayground
- https://apoorv487.medium.com/testing-fcm-push-notification-http-v1-through-oauth-2-0-playground-postman-terminal-part-2-7d7a6a0e2fa0
- https://github.com/firebase/quickstart-js/tree/master/messaging
