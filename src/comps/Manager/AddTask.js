import { useState } from 'react';
import { db } from '../../firebase/config';
import {Row, Col} from 'react-bootstrap';

const AddTask = ({setAddForm, docs}) => {
  const [timeExist, setTimeExist] = useState(false)

  let datetime = []
  let instrument = []
  docs.forEach((doc)=>{
    datetime.push(doc.datetime);
    instrument.push(doc.instrument)
  });

  console.log(datetime)
  const handleSubmit = (e) =>{
    e.preventDefault();
    datetime.forEach((time)=>{
      if (time !==  e.target.datetime.value) {
        console.log(time)
        setTimeExist(true)
      }
      else if (time ===  e.target.datetime.value) 
      {setTimeExist(false)}
    })
    if (timeExist === true){
      db.collection('Batches').add({
        assignee: e.target.assignee.value, 
        cases: e.target.cases.value,
        datetime: e.target.datetime.value,
        instrument: e.target.instrument.value,
      });
      setAddForm(false);
    }
    else if (timeExist === false){
      alert('Time is already assigned')
      setAddForm(true)
    }
  }
  return ( 
  <div className="add-task">
    <form onSubmit={handleSubmit}>
      <Row>
        <Col sm={4}>
        <select
        name="assignee" 
        required>
          {docs.map((doc)=>(
            <option>{doc.assignee}</option>
          ))}
        </select>
        
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