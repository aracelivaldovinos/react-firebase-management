import Employee from "./Employee";

const EmployeeList = ({docs}) => {
  return ( 
    <div className="employee-list">
      {docs.map((doc)=>(
       <div key={doc.id}>
         <Employee 
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
    </div>
   );
}
 
export default EmployeeList;