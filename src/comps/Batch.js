import { Row, Card } from 'react-bootstrap';

const Batch = (props) => {
  return ( 
    <Row>
      <Card>
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
    </Row>
  );
}
 
export default Batch;