import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Controller from "./comps/Controller";
import ManagerCont from "./comps/Manager/ManagerCont";
import EditEmployee from './comps/Manager/EditEmployee';
import EmployeeList from './comps/Manager/EmployeeList';
import useFirestore from "./hooks/useFirestore";


function App() {
  const { docs } = useFirestore('Batches');
  const { managerDocs } = useFirestore('Manager');
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path = "/" element={<Controller />}/>
        <Route path="/manager" element={<ManagerCont docs={docs} managerDocs={managerDocs}/>}/>
        <Route path="/employees" element={<EmployeeList managerDocs={managerDocs}/>}/>
        <Route path="/manager/employee/:id" element={<EditEmployee />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
