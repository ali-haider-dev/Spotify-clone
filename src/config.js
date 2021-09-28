import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyCe5CzzrmtRjRSCrFVSEMxSCyoewsKWIlI",
    authDomain: "spotify-clone-1a82e.firebaseapp.com",
    projectId: "spotify-clone-1a82e",
    storageBucket: "spotify-clone-1a82e.appspot.com",
    messagingSenderId: "820845659556",
    appId: "1:820845659556:web:2a3cc3e324491883482d31",
    measurementId: "G-SJ85XZZHJ4"
};
const firebaseApp = firebase.innitializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export default auth


fetch("https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f", {
    method: "GET",
    headers: {
        Authorization: `Bearer ${userAccessToken}`
    }
})
    .then(response => response.json())
    .then(({ beats }) => {
        beats.forEach((beat, index) => {
            console.log(`Beat ${index} starts at ${beat.start}`);
        })
    })