function Student(props) {
    return (
      <div className="data">
         <img src = {props.src} alt="PP"></img>
         <h2>Name : {props.name} </h2>
         <h3>Age : {props.age}</h3>
         <h3>Grade : {props.grade}</h3>
      </div>
    );
}
  
export default Student;
  