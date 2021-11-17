import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';


import Employee from "./Employee";
import Sidebar from "./Sidebar";
import AddTask from './AddTask';



const EmployeeList = ({docs}) => {
const[addForm, setAddForm] = useState(false);

  const handleAddTask = () =>{
    setAddForm(true);
  }

  return ( 
    <Row>
      <div className="employee-list">
      <Row>
        <h1>Header</h1>
      </Row>
      <Row className="add-task">
        <div className="task-btn">
          <button onClick={handleAddTask}> + Add Task</button>
        </div>
      </Row>
      <Row>
        <Col className="col-header" sm={4}>
        Assignee
        </Col>
        <Col className="col-header" sm={2}>
        Batch size
        </Col >
        <Col className="col-header" sm={3}>
        Date & Time
        </Col>
        <Col className="col-header" sm={2}>
        Instrument #
        </Col>
        {addForm && <AddTask setAddForm={setAddForm}/>}
      </Row>
  



        <Sidebar />
        {docs.map((doc)=>(
        <div key={doc.id}>
          <Link to={`/manager/employee/${doc.id}`}>
          <Employee 
              firstName = {doc.firstname}
              lastName = {doc.lastname}
              assigned = {doc.assigned}
              pending = {doc.pending}
              completed = {doc.completed}
              released = {doc.released}
              comments = {doc.comments}
              initials ={doc.initials}
              id = {doc.id}
              assignee = {doc.assignee}
              cases = {doc.cases}
              datetime = {doc.datetime}
              instrument = {doc.instrument}

          />
          </Link>
        </div> 
        ))}
      </div>
    </Row>
  );
}
 
export default EmployeeList;