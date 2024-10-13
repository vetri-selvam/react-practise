import './App.css';
import Goat from './components/goat';
import List from './components/list';
import Form from './components/form';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import User from './components/user';
import OldBook from './components/OldBook';
import NewBook from './components/NewBook';


function App() {
  return (
    
    <BrowserRouter>
    <ul className='NavBar'>
      <li>
        <Link to='/'>goat</Link> 
      </li>
      <li>
        <Link to='/list'>list</Link>
      </li>
      <li>
      <Link to='/form'>form</Link>
      </li>
      <li>
      <Link to='/user/1'>user 1</Link>
      </li>
      <li>
      <Link to='/user/2'>user 2</Link>
      </li>
      <li>
      <Link to='/books/old-book'>Old Books</Link>
      </li>
      <li>
      <Link to='/books/new-book'>New Books</Link>
      </li>
      
    </ul>
    <Routes>
      <Route path="/" element={<Goat/>} />
      <Route path="/list" element={<List/>} />
      <Route path="/form" element={<Form/>} />
      <Route path="/user/:id" element={<User/>} />
      <Route path='/books'>
        <Route path='old-book' element={<OldBook/>}/>
        <Route path='new-book' element={<NewBook/>}/>

      </Route>
    </Routes>
  
    </BrowserRouter>
    
  );
}

export default App;
