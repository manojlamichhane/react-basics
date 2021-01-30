import './App.css';
import NavBar from './Components/NavBar';
import Posts from './Pages/Posts';
import Users from './Pages/Users';

import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Albums from './Pages/Albums';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Route path="/posts" component={Posts}/>
      <Route path="/users" component={Users}/>
      <Route path="/albums" component={Albums}/>      
      </BrowserRouter>      
    </div>
  );
}

export default App;