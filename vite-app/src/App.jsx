import { Route, Routes } from 'react-router-dom';
import Register from './Register'
import Home from './Home';
import Login from './Login';
import SingleMovie from './SingleMovie'
import Error from './Error';

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='movie/:id' element={<SingleMovie/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='*' element={<Error/>}/> 
     </Routes>  
     
    </>
  );
}

export default App;
