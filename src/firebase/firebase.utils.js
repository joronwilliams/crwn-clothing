import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAxMRN57_FWd7aIEvpU1EkSxHPm1K4Dvfc",
  authDomain: "crwn-db-e2807.firebaseapp.com",
  databaseURL: "https://crwn-db-e2807.firebaseio.com",
  projectId: "crwn-db-e2807",
  storageBucket: "crwn-db-e2807.appspot.com",
  messagingSenderId: "566739555561",
  appId: "1:566739555561:web:ee8802a7e8631de9214c78",
  measurementId: "G-9CFVFRB76M"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
