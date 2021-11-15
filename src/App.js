import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Controller from "./comps/Controller";
import ManagerCont from "./comps/Manager/ManagerCont";


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path = "/" element={<Controller />}/>
        <Route path="/manager" element={<ManagerCont/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
