import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBN1uHyeSZBIeSb1IO6zjRKDwNecDFviUk",
    authDomain: "softbarbertcc.firebaseapp.com",
    databaseURL: "https://softbarbertcc-default-rtdb.firebaseio.com",
    projectId: "softbarbertcc",
    storageBucket: "softbarbertcc.appspot.com",
    messagingSenderId: "781836087810",
    appId: "1:781836087810:web:8c71f374cce2b404e92d1b",
    measurementId: "G-HTKXWDR4LV"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);