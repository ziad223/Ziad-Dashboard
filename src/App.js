import './App.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import New from './pages/new/New';
import List from './pages/list/List';
import { productInputs, userInputs } from './formSource';
import './style/dark.css';
import { darkContext } from './context/darkModeContext';
import { useContext } from 'react';


function App() {
  const {dark} = useContext(darkContext);

  return (
    <div className={dark ? "app dark" : "app"}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/login' element = {<Login/>} />

      <Route path='users'>
    <Route index element = {<List/>} />
    <Route path=':userId' element = {<Single/>} />
    <Route path='new' element = {<New inputs = {userInputs} title = 'Add New User'/>} />
      </Route>
      
      <Route path='products'>
    <Route index element = {<List/>} />
    <Route path=':productId' element = {<Single/>} />
    <Route path='new' element = {<New inputs = {productInputs} title = 'Add New Product' />} />
      </Route>
    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
