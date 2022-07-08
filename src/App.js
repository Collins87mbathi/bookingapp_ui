import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Hotel from './Pages/Hotel/Hotel';
import Hotels from './Pages/Hotels/Hotels';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/hotels' element={<Hotels/>}/>
    <Route path='/hotel/:id' element={<Hotel/>}/>
    
    </Routes>
   
   </BrowserRouter>
  );
}

export default App;
