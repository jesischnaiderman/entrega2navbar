  import firebase from 'firebase/app';
  import '@firebase/firestore'
  // Your web app's Firebase configuration
  const app = firebase.initializeApp( {
    apiKey: "AIzaSyD_pgWKF-bQ5hrozsT3Y5u83mxemNRU61M",
    authDomain: "gyrotinicgabriel.firebaseapp.com",
    projectId: "gyrotinicgabriel",
    storageBucket: "gyrotinicgabriel.appspot.com",
    messagingSenderId: "996344356809",
    appId: "1:996344356809:web:27af9a591aed5c9f259218"
  });
  export const getFirebase = ()=> {
        return app;
  }

  export const getFirestore = () =>{
      return firebase.firestore(app);

}
