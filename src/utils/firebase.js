// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAxC0MPkHhHys6ZGv1SqA3V1Vl6CFsTurg',
  authDomain: 'netflixgpt-57bd3.firebaseapp.com',
  projectId: 'netflixgpt-57bd3',
  storageBucket: 'netflixgpt-57bd3.appspot.com',
  messagingSenderId: '16455824282',
  appId: '1:16455824282:web:a2de4fa21884aee92b8023',
  measurementId: 'G-NTL0YRZMYQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
