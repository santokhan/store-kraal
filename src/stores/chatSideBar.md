# Documentations for Chat List and Firestore database structure

```json
[
    {
        "chats": [
            {
                "robot": "Question",
                "user": "Answers",
                "stopTypeWriter": false // by default it will be undefined or false
            },
        ],
        "id": 1,
        "nav": "Chat Message",
        "uid": "z6zXMOV4G3OkldbUR1cTqCMediE2",
    },
]
```

The `"uid": "z6zXMOV4G3OkldbUR1cTqCMediE2"` means Authentication id of user.

We will update **Pinia** store form **Open AI** API request and we will present chats to our **KraalAI** interface.

We have to `push` data in this `array` of `object`. That means one way data flow. Because we won't remove these data. It will be automatically cleared.
