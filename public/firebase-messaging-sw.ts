import firebase from "firebase";

importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: "245604290247",
    apiKey: "AIzaSyDL0w9x15JXTzcadQS4JhBWeWJOIbSkjIs",
    appId: "1:245604290247:web:2e93ff72fd52a70204b8e2",
    projectId: "fir-messaging-fc5df"
});

const initMessaging = firebase.messaging();