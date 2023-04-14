import Navbar from "./Navbar";
import { Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddNew from "./pages/Addnew";

function App()
{

  return (
    <div>
   <Navbar/> 
   <div className="container">
    <Routes> 
      <Route path="/home" element ={<Home />} />
      <Route path="/add-new" element = {<AddNew />} />
    </Routes>
   </div>
  </div>
  )
}


export default App;