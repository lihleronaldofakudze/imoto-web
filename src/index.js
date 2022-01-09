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

//Material UI
import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#153E45",
    },
    secondary: {
      main: "#1BC743",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <AuthProvider sdk={auth}>
        <FirestoreProvider sdk={firestore}>
          <App />
        </FirestoreProvider>
      </AuthProvider>
    </FirebaseAppProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();

reportWebVitals();
