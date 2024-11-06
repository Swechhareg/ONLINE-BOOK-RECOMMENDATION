import Books from "./Books";
import Home from "./Home"
import {Route, Routes,BrowserRouter,Link} from 'react-router-dom'
import Login from "./Login"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
  <div>
    <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/books" element={<Books/>}/>
    <Route path="/login" element={<Login/>}/>
       
          </Routes>
    
  
    </div>
  );
}

export default App;
