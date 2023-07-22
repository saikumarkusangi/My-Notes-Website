import MyNotes from "../MyNotes";
import RecentFolders from "../RecentFolders";
import "./styles/Home.css";

const HomePage = (props) => {
    const {notes,loading} = props;
    return(
        <div className="HomePage">
           <RecentFolders/>
          {loading ? (<h1>Loading..</h1>) : ( <MyNotes notes={notes}/>)}
        </div>
    )
}

export default HomePage