import "../styles/Folder.css"
import {FaFolderOpen} from "react-icons/fa";
import {BsThreeDots} from "react-icons/bs";

const Folder = (props) => {
    const {title,date} = props;
    return(
        <div className="folder">
        <FaFolderOpen size="40px" className="folder-icon"/>
        <BsThreeDots size="20px" className="menu-icon"/>
           <h3 className="title">{title}</h3>
           <p className="date">{date}</p>
        </div>
    )
}

export default Folder