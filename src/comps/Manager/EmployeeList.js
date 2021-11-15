import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';

import Employee from "./Employee";
import Sidebar from "./Sidebar";

const EmployeeList = ({docs}) => {
  return ( 
    <Row xs={1} md={2} className="g-4">
      <div className="employee-list">
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
          />
          </Link>
        </div> 
        ))}
      </div>
    </Row>
  );
}
 
export default EmployeeList;