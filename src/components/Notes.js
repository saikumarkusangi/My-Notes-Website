import "../styles/Notes.css"
import {BsThreeDots} from "react-icons/bs";

const Notes = (props) => {
    const {title,date,color} = props;
    return(
        <div className="notes" style={{backgroundColor:color}}>
       
        <BsThreeDots size="20px" className="menu-icon"/>
           <p className="date">{date}</p>
           <h3 className="title">{title}</h3>
           <hr color="black"></hr>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium aspernatur quasi accusamus incidunt ullam doloribus quos, neque odit similique officia impedit. Est at quasi reiciendis amet fugiat quae hic!</p>
        </div>
    )
}

export default Notes