import { useState, useEffect } from 'react';

import { db } from '../firebase/config';

const useFirestore = (collection) => {
  const [batches, setBatches] = useState([]);

  useEffect(()=>{
    const unsub = db.collection(collection)
    .onSnapshot((snap)=>{
      let batches = [];
      snap.forEach(doc =>{
        batches.push({...doc.data(), id: doc.id})
      });
      setBatches(batches);
      // console.log(batches);
    });
    return () => unsub();
  }, [collection])
  return { batches }
}
 
export default useFirestore;