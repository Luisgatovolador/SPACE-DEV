
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Screens/Login/login';
import Register from './Screens/Register/Register';
import Navbar from './Screens/Navbar/Navbar';
import Home from './Screens/Home/Home';
import CrearBlog from './Screens/CrearBlog/CrearBlog';
import NavbarAdministrador from './Screens/NavbarAdministrador/NavbarAdministrador';
import HomeAdmin from './Screens/HomeAdmin/HomeAdmin';
import MisPublicaciones from './Screens/MisPublicaciones/MisPublicaciones';
import EditarPublicaciones from './Screens/EditarPublicaciones/EditarPublicaciones';

function App() {
  return (
<BrowserRouter>
<Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/homeAdmin' element={<HomeAdmin/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/narvar' element={<Navbar/>}></Route>
      <Route path='/crearBlog' element={<CrearBlog/>}></Route>
      <Route path='/navbar' element={<NavbarAdministrador/>}></Route>
      <Route path='/misPublicaciones' element={<MisPublicaciones/>}></Route>
      <Route path='/EditarPublicaciones/:id' element={<EditarPublicaciones/>}></Route>
      </Routes>
     
</BrowserRouter>
  
  );
}

export default App;
