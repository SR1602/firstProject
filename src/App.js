
import HomePage from './component/HomePage/HomePage'
import Navbar from "./component/Navbar/Navbar";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import About from './component/About/About'
const App = () => {
  return(
    <>
 <div className="main-wrapper">
  
  <BrowserRouter>
    
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
   
 </div>
     
    </>
  )
}

export default App;
