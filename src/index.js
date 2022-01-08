import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

//Firebase
import {
  FirebaseAppProvider,
  AuthProvider,
  FirestoreProvider,
} from "reactfire";
import { firebaseConfig, auth, firestore } from "./services/firebase";

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>
        <App />
      </FirestoreProvider>
    </AuthProvider>
  </FirebaseAppProvider>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();

reportWebVitals();
