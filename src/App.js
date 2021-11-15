import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Controller from "./comps/Controller";
import ManagerCont from "./comps/Manager/ManagerCont";
import EditEmployee from './comps/Manager/EditEmployee';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path = "/" element={<Controller />}/>
        <Route path="/manager" element={<ManagerCont/>}/>
        <Route path="/manager/employee/:id" element={<EditEmployee />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
