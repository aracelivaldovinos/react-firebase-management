import Card from 'react-bootstrap/Card'

const Employee = (props) => {
  return ( <div className="employee">
    <Card style={{ width: '18rem'}}>
        <Card.Header>
          {props.firstName}
          {props.lastName}
        </Card.Header>
        <Card.Body>
          Assigned: {props.assigned}
          Pending: {props.pending}
          Completed: {props.completed}
        </Card.Body>
      </Card>
  </div> );
}
 
export default Employee;