import useFirestore from "../../hooks/useFirestore";

import EmployeeList from "./EmployeeList";

const ManagerCont = () => {
  const { docs } = useFirestore('Batches');

  return ( 
  <div className="manager-controller">
    <EmployeeList docs={docs}/>
  </div> );
}
 
export default ManagerCont;