import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    doc,
    query,
    where,
} from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyDJE5G0m4acZtPU36QFqiFuWMG_BbTjzOA",
    authDomain: "deepesh-s-vanlife.firebaseapp.com",
    projectId: "deepesh-s-vanlife",
    storageBucket: "deepesh-s-vanlife.appspot.com",
    messagingSenderId: "294379019453",
    appId: "1:294379019453:web:c88bac2b12a47837b16bd4",
    measurementId: "G-B864XYNKSV",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const vanCollectionRef = collection(db, "vans");

export async function getVans() {
    const querySnapshot = await getDocs(vanCollectionRef);
    const dataArray = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
    return dataArray;
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id);
    const vanSnap = await getDoc(docRef);
    return {
        ...vanSnap.data(),
        id: vanSnap.id,
    };
}

export async function getHostVans() {
    const q = query(vanCollectionRef, where("hostId", "==", "123"));
    const querySnapshot = await getDocs(q);
    const dataArray = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
    return dataArray;
}

export async function loginUser(creds) {
    const res = await fetch("/api/login", {
        method: "post",
        body: JSON.stringify(creds),
    });
    const data = await res.json();

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status,
            body: true,
        };
    }

    return data;
}
