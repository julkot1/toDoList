import { initializeApp } from 'firebase/app'
import '@next-auth/firebase-adapter'
import { getFirestore } from '@firebase/firestore'

export const firebaseConfig = {
  apiKey: 'AIzaSyDF96-cefquITOwBFgE6GumFrqbqeim9N0',

  authDomain: 'testing-project-b1128.firebaseapp.com',

  projectId: 'testing-project-b1128',

  storageBucket: 'testing-project-b1128.appspot.com',

  messagingSenderId: '402797193612',

  appId: '1:402797193612:web:72fc5ac9b94093700fcea9',
}

export const app = initializeApp(firebaseConfig)
export const store = getFirestore()
