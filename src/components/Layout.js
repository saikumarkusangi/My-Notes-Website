import Header from "./Header";
import "../styles/Layout.css";
import {PiStarLight} from "react-icons/pi";
import {GoTrash} from "react-icons/go";
import {PiArchiveBoxLight} from 'react-icons/pi';

const Layout = ({children}) =>{
    return(
        <div>
        <header>
        <Header/>
      </header>
        <div className="Layout">
        <div className="side-bar">
            <span>
            <PiStarLight color="grey" size="25px"/>
            <p>Favourite</p>
            </span>
            <span>
            <PiArchiveBoxLight color="grey" size="25px"/>
            <p>Archive</p>
            </span>
            <span>
            <GoTrash color="grey" size="25px"/>
            <p>Trash</p>
            </span>
            <img src="https://gcdnb.pbrd.co/images/2sf4sTYXpfP8.png?o=1" alt="" width="200px"/>
            <button className="logout-btn">Log out</button>
         </div>
          
           <main>
            {children}
           </main>
           <footer>
           
           </footer>
        </div>
        </div>
    )
}

export default Layout