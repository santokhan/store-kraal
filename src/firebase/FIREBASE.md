# Create new Firebase web app for Kraal

## Step-1

Enable email sign in to Firebase and copy project config to .env file.

## Step-2

Enable Firestore on Firebase instance to store user data on sign up.

## Step-3 if Email Verification is require

Enable Cloud Firestore API from <https://console.developers.google.com/apis/api/firestore.googleapis.com/overview?project=kraal-v2>

## Step-4

Create Firebase collection with name `business-user`

## Step-5

Setup up read write access of Firestore database

```bash
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```
