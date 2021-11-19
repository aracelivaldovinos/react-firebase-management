import { useState } from 'react';

import TaskList from "./TaskList";



const ManagerCont = ({docs, managerDocs}) => {

  const [employee, setEmployee] = useState(null);

  const onClickingEdit = (id) =>{
    let filterDoc = docs.filter((doc)=>doc.id === id);
    setEmployee(filterDoc);
    console.log(employee);
  }

  return ( 
      <div className="manager-controller">
        <TaskList docs={docs} managerDocs={managerDocs} handleEdit = {onClickingEdit}/>
      </div>
   );
}
 
export default ManagerCont;