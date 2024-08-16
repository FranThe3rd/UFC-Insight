import './App.css';
import SearchName from './components/searchbar/SearchName';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Champions from './pages/Champions';
import Popular from './pages/Popular';
import SearchHeight from './components/searchbar/SearchHeight';
import SearchStance from './components/searchbar/SearchStance';
import SearchWeight from './components/searchbar/SearchWeight';
import SearchBirthday from './components/searchbar/SearchBirthday';
import Navbar from './components/navbar/Navbar';
import Home from './Home';




function App() {



  return (
    <div>

      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/name' element={<SearchName/>}></Route> 
          <Route path='/champions' element={<Champions/>}></Route>
          <Route path='/popular' element={<Popular/>}></Route>
          <Route path='/height' element={<SearchHeight/>}></Route>
          <Route path='/stance' element={<SearchStance/>}></Route>
          <Route path='/weight' element={<SearchWeight/>}></Route>
          <Route path='/birthday' element={<SearchBirthday/>}></Route>






        </Routes>
      </Router>
    </div>
  );

  
}

export default App;
