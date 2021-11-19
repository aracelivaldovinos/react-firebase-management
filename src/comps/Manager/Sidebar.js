import { Link } from 'react-router-dom';
import '../../index.css';
import { BsPeople } from 'react-icons/bs';
import { MdOutlineCases, MdOutlineTaskAlt } from 'react-icons/md'
import { BiEdit } from 'react-icons/bi'

const Sidebar = ({managerDocs}) => {
  
  

  return ( 
  <div className="sidebar">
    <div className="manager-initials">
      <h1>MM</h1>
    </div>
    <div className="sidebar-links">
      <Link to='/employees'>
        <p> 
          <BsPeople /> Employees
        </p>
      </Link>
      <p><MdOutlineCases/> Cases</p>
      <p><MdOutlineTaskAlt/> Tasks</p>
      <p><BiEdit/> Edit</p>
    </div>
  </div> );
}
 
export default Sidebar;