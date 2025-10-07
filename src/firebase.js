import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAVkvokfTPON5KhZhTKI1kx1FX8QASQTFs",
    authDomain: "react-authenthication.firebaseapp.com",
    projectId: "react-authenthication",
    storageBucket: "react-authenthication.firebasestorage.app",
    messagingSenderId: "573334398748",
    appId: "1:573334398748:web:645d72b24be5f059543cd9"
})
export const auth = app.auth()
export default app