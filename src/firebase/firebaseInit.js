import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCq67CRc5DXYuwBsuNyZQKQX60TCRDUzzI",
  authDomain: "inovice-app-yt.firebaseapp.com",
  projectId: "inovice-app-yt",
  storageBucket: "inovice-app-yt.appspot.com",
  messagingSenderId: "919038622865",
  appId: "1:919038622865:web:164645937438076db71330"
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

export default db