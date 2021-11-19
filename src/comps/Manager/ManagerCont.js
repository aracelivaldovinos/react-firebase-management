import { useState } from 'react';
import useFirestore from "../../hooks/useFirestore";

import EmployeeList from "./EmployeeList";



const ManagerCont = () => {
  const { docs } = useFirestore('Batches');

  const [employee, setEmployee] = useState(null);

  const onClickingEdit = (id) =>{
    let filterDoc = docs.filter((doc)=>doc.id === id);
    setEmployee(filterDoc);
    console.log(employee);
  }

  return ( 
      <div className="manager-controller">
        <EmployeeList docs={docs} handleEdit = {onClickingEdit}/>
      </div>
   );
}
 
export default ManagerCont;