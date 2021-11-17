import {Row, Col} from 'react-bootstrap';
import '../../index.css';

const Employee = (props) => {
  return ( <div className="employee">
       <Row>
        <Col className="col-header" sm={4}>
          <Row>
          <Col>
            <div className="manager-initials">
              <h1>{props.initials}</h1>
            </div>
          </Col>
          <Col>
            {props.firstName}
            {props.lastName}
            {props.assignee}
          </Col>
          </Row>
        </Col>
        <Col className="col-header" sm={2}>
          {props.cases}
        </Col >
        <Col className="col-header" sm={3}>
          {props.datetime}
        </Col>
        <Col className="col-header" sm={2}>
         {props.instrument}
        </Col>
      </Row>
  </div> );
}
 
export default Employee;