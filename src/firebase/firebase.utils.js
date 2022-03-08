import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAndUIwG_XvavmA-mfHDHaSTi3SriHaOu8",
    authDomain: "where-was-i-9a6c9.firebaseapp.com",
    projectId: "where-was-i-9a6c9",
    storageBucket: "where-was-i-9a6c9.appspot.com",
    messagingSenderId: "303388601319",
    appId: "1:303388601319:web:cdab6d05097e2a3ac72b42",
    measurementId: "G-490YYVNVJK"
  };

  export const createUserProfileDocument = async (userAuth, addtionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...addtionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
