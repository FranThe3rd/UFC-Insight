import './App.css';
import SearchName from './components/searchbar/SearchName';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Champions from './pages/Champions';
import Popular from './pages/Popular';




function App() {



  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<SearchName/>}></Route>
          <Route path='/champions' element={<Champions/>}></Route>
          <Route path='/popular' element={<Popular/>}></Route>


        </Routes>
      </Router>
    </div>
  );

  
}

export default App;
