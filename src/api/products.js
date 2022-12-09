import { db } from './config';
import {
  collection,
  getDocs,
  where,
  getDoc,
  doc,
  query,
  addDoc,
  updateDoc,
  writeBatch,
  increment,
} from 'firebase/firestore';

const productsRef = collection(db, 'items');

export const getProducts = async (category) => {
  const products = [];

  const q = category
    ? query(productsRef, where('category', '==', category))
    : productsRef;
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });
  return products;
};

export const getProduct = async (id) => {
  const document = doc(db, 'items', id);

  const docSnap = await getDoc(document);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }
  return null;
};

export const updateProduct = async (id, item) => {
  const productDoc = await updateDoc(doc(db, 'items', id), item);
  return;
};

export const updateManyProducts = async (items) => {
  const batch = writeBatch(db);

  items.forEach(({ id, quantity }) => {
    const docRef = doc(db, 'items', id);
    batch.update(docRef, { stock: increment(-quantity) });
  });

  batch.commit();
};

// export const cargarData = () => {
//   products.forEach(async (prod) => {
//     await addDoc(productsRef, prod);
//   });
// };
