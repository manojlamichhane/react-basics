import './App.css';
import NavBar from './Components/NavBar';
import Posts from './Pages/Posts';
import Users from './Pages/Users';

import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Albums from './Pages/Albums';
import Photos from './Pages/Photos';
import Photo from './Pages/Photo';
import User from './Pages/User';
import Home from './Pages/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Route path="/" exact component={Home}/>
      <Route path="/posts" exact component={Posts}/>
      <Route path="/users" exact component={Users}/>
      <Route path="/albums" exact component={Albums}/>
      <Route path="/photos" exact component={Photos}/>
      <Route path="/photos/:id" exact component={Photo}/>
      <Route path="/users/:id" exact component={User}/>      
      </BrowserRouter>      
    </div>
  );
}

export default App;