import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9_UVwn3DN5-zFQjJJ48Ri0skIiA9WsjI",
  authDomain: "ekabu-calculator.firebaseapp.com",
  databaseURL: "https://ekabu-calculator.firebaseio.com",
  projectId: "ekabu-calculator",
  storageBucket: "ekabu-calculator.appspot.com",
  messagingSenderId: "547146244069",
  appId: "1:547146244069:web:9f4744ec5bb2e94118190c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics()

export default firebase;
