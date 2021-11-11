import { Row, Col } from 'react-bootstrap';

import Batch from './Batch';

const BatchList = ({docs}) => {
  return ( 
    <Row>
      <Col>
        <div className="col-one">
          <h2>Testing</h2>
        </div>
        {docs.map((doc)=>(
          <div key={doc.id}>
            <Batch 
              firstName = {doc.firstname}
              lastName = {doc.lastname}
              assigned = {doc.assigned}
              pending = {doc.pending}
              completed = {doc.completed}
              released = {doc.released}
              comments = {doc.comments}
              id = {doc.id}
            />
          </div>
        ))}
      </Col>
      <Col>
        <div className="colTwo">
          <h2>Review</h2>
        </div>
      </Col>
      <Col>
        <div className="colThree">
          <h2>Tech\Admin Review</h2>
        </div>
      </Col>
      <Col>
        <div className="colFour">
          <h2>Released</h2>
        </div>
      </Col>
    </Row>
  );
}
 
export default BatchList;