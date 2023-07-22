import "../styles/RecentFolders.css";
import Folder from "./Folder";
import {FaFolderOpen} from "react-icons/fa";
const RecentFolders = () => {
    return(
        <div className="recent-folders">
          <h1 className="heading">Recent Folders</h1>
          <div className="time-line">
          <p className="active">Todays</p>
          <p>This Week</p>
          <p>This Month</p>
          </div>
          <div className="folders">
            <Folder title="Movie Review" date={new Date().toLocaleString()}/>
            <Folder title="Class Notes" date={new Date().toLocaleString()}/>
            <div className="new-folder">
            <FaFolderOpen size="40px" color="rgb(39, 39, 39,0.8)"/>
            <h3>New Folder</h3>
            </div>
          </div>
        </div>
    )
}

export default RecentFolders