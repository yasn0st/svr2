import firebase from 'firebase/app';
import 'firebase/firestore';

// Get a Firestore instance
export const db = firebase.initializeApp({ projectId: 'svora-6f3df' }).firestore();
