import useFirestore from "../hooks/useFirestore";

import BatchList from './BatchList';

const Controller = () => {

  const { docs } = useFirestore('Batches');

  return (
  <div className="controller">
    <BatchList docs={docs}/>
  </div> );
}
 
export default Controller;