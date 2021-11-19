import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col} from 'react-bootstrap';


import Employee from "./Employee";
import Sidebar from "./Sidebar";
import AddTask from './AddTask';



const TaskList = ({docs, managerDocs}) => {
const[addForm, setAddForm] = useState(false);

  const handleAddTask = () =>{
    setAddForm(true);
  }

  return ( 
    <Row>
      <div className="task-list">
      <Row>
        <div className="task-header">
         <h1>New Case Assignment Flow </h1>
        </div>
        <div className="list-links">
          <p>Task List</p>
          <p>Calender</p>
        </div>
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
        {addForm && <AddTask setAddForm={setAddForm} managerDocs={managerDocs} docs={docs}/>}
      </Row>
  



        <Sidebar managerDocs={managerDocs}/>
        {docs.map((doc)=>(
        <div key={doc.id}>
          <Link to={`/manager/employee/${doc.id}`}>
          <Employee 
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
 
export default TaskList;