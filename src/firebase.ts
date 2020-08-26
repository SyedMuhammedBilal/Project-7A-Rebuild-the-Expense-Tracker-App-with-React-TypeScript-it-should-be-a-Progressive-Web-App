import firebase from "firebase"

const config = {
    apiKey: "AIzaSyDL0w9x15JXTzcadQS4JhBWeWJOIbSkjIs",
    authDomain: "fir-messaging-fc5df.firebaseapp.com",
    databaseURL: "https://fir-messaging-fc5df.firebaseio.com",
    projectId: "fir-messaging-fc5df",
    storageBucket: "fir-messaging-fc5df.appspot.com",
    messagingSenderId: "245604290247",
    appId: "1:245604290247:web:2e93ff72fd52a70204b8e2"
};

firebase.initializeApp(config);

export default firebase; 