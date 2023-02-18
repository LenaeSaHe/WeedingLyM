// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

import { doc, setDoc, getDoc } from "firebase/firestore";

import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export async function sumaInvitado(id, nom, confirmacion, boletos, ninos) {
  await setDoc(doc(db, "invitados", id), {
    nombre: nom,
    confirmacion,
    boletos,
    ninos,
  });
}

export async function consInvitado(id) {
  const docRef = doc(db, "invitados", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
}

export async function submitPhoto(file, filename) {
  // Get a reference to the storage service, which is used to create references in your storage bucket
  //const storage = getStorage();

  // Create a storage reference from our storage service
  const storageRef = ref(storage, "photos/" + filename);

  // 'file' comes from the Blob or File API
  const res = await uploadBytes(storageRef, file);
  console.log("Uploaded a blob or file!");

  return res;
}

export async function getPhotos() {
  const storage = getStorage();

  // Create a reference under which you want to list
  const listRef = ref(storage, "photos/");

  try {
    // Find all the prefixes and items.
    const response = await listAll(listRef);
    const urls = [];
    response.items.forEach((itemRef) => {
      // All the items under listRef.
      console.log(itemRef);
      urls.push(getDownloadUrl(itemRef.fullPath, itemRef.name));
    });
    return await Promise.all(urls);
  } catch (error) {
    console.error(error);
  }
}

async function getDownloadUrl(fullpath, name) {
  const url = await getDownloadURL(ref(storage, fullpath));

  console.log({ url, submitedBy: name.split("/")[0] });
  return { url, submitedBy: name.split("-")[0] };
}
