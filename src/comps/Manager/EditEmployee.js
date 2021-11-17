import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import useFirestore from '../../hooks/useFirestore';


import Sidebar from './Sidebar';

const EditEmployee = () => {

  const {docs} = useFirestore('Batches');
  const { id } = useParams();
  const employee = docs.filter((doc)=> doc.id === id)[0];

  


  
  return ( 
  <div className="edit-employee">
    <Sidebar />
      {employee && <div className="employee-info">
      <div className="employee-fullname">
        <h1>
          {employee.firstname}
          {employee.lastname}
        </h1>
      </div>
      <Row>
        <Col>
          <div className="assinged">
            Assigned: {employee.assigned}
          </div>
        </Col>
        <Col>
          <div className="pending">
            Pending: {employee.pending}
          </div>
        </Col>
        <Col>
          <div className="completed">
            Completed: {employee.completed}
          </div>
        </Col>
      </Row>
    </div>}
  </div> 
  );
}
 
export default EditEmployee;