import Card from 'react-bootstrap/Card'
import '../../index.css';

const Employee = (props) => {
  return ( <div className="employee">
    <Card style={{ width: '18rem'}}>
        <Card.Header>
        <div className="manager-initials">
          <h1>{props.initials}</h1>
        </div>
          {props.firstName}
          {props.lastName}
        </Card.Header>
        <Card.Body>
          <div>
            Assigned: {props.assigned}
          </div>
          <div>
            Pending: {props.pending}
          </div>
          <div>
            Completed: {props.completed}
          </div>
        </Card.Body>
      </Card>
  </div> );
}
 
export default Employee;