import { useState, useEffect } from 'react';

import { db } from '../firebase/config';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  const [managerDocs, setManagerDocs] = useState([])

  useEffect(()=>{
    const unsub = db.collection(collection)
    .onSnapshot((snap)=>{
      let documents = [];
      let managerDocs =[]
      snap.forEach(doc =>{
        if (doc.data().hasOwnProperty('Manager')){
          managerDocs.push({...doc.data(), id: doc.id})
        }
        else{
          documents.push({...doc.data(), id: doc.id})
        }
      });
      setDocs(documents);
      setManagerDocs(managerDocs)
      // console.log(docs);
    });
    return () => unsub();
  }, [collection])
  return { docs, managerDocs }
}
 
export default useFirestore;