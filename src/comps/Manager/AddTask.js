import { db } from '../../firebase/config';
import {Row, Col} from 'react-bootstrap';

const AddTask = ({setAddForm}) => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    db.collection('Batches').add({
      assignee: e.target.assignee.value, 
      cases: e.target.cases.value,
      datetime: e.target.datetime.value,
      instrument: e.target.instrument.value,
    });
    setAddForm(false);
  }
  return ( 
  <div className="add-task">
    <form onSubmit={handleSubmit}>
      <Row>
        <Col sm={4}>
          <input 
          type="text"
          name="assignee"
          required
          />
        </Col>
        <Col sm={2}>
        <select
        name="cases" 
        required>
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>50</option>
        </select>
      </Col>
      <Col sm={3}>
        <input 
        type="datetime-local"
        name="datetime"
        required
        />
      </Col>
      <Col sm={2}>
        <select
        name="instrument"  
        required>
          <option>148</option>
          <option>179</option>
          <option>70</option>
          <option>83</option>
        </select>
      </Col>
      </Row>
      <input type="submit"/>
    </form>
  </div> );
}
 
export default AddTask;