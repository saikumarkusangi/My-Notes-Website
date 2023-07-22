import React, { useState } from "react";
import Layout from "./components/Layout";
import HomePage from "./components/pages/Home";
import axios from "axios";







    

const App = () => {

const notes = []

const [loading,setLoading] = useState(false)
  

  return(
       <div className="App">
          <Layout>
            <HomePage notes={notes} loading={loading}/>
          </Layout>
       </div>
  )
}

export default App