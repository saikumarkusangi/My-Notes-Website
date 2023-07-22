import "../styles/MyNotes.css";
import {CiStickyNote} from "react-icons/ci";
import Notes from "./Notes";
import { Colors } from "../Constants";
const MyNotes = (props) => {
    const {notes} = props;
    return(
        <div className="mynotes">
          <h1 className="heading">My Notes</h1>
          <div className="time-line">
          <p className="active">Todays</p>
          <p>This Week</p>
          <p>This Month</p>
          </div>
          <div className="allnotes">
             {notes.map(note => {
                const color = Colors[Math.floor(Math.random() * Colors.length)]
               return(
                <Notes title={note.title} color={color} date={new Date().toLocaleString()}/>
               )
             })}
          

            <div className="new-note">
            <CiStickyNote size="80px" className="note-icon" color="rgb(39, 39, 39,0.8)"/>
            <h3>New Note</h3>
            </div>
          </div>
        </div>
    )
}

export default MyNotes