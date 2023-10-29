# Create new Firebase web app for Kraal

## Authentication

1. Enable email sign in to Firebase and copy project config to .env file
2. Add your domain to Firebase whitelist
3. Enable Cloud Firestore API from <https://console.developers.google.com/apis/api/firestore.googleapis.com/overview?project=kraal-v2>
4. Setup up read write access of Firestore database

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

## Firestore

1. Enable Firestore on Firebase instance to store user data on sign up.
2. Create Firebase collection with name `business-user`
