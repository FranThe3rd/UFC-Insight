import { useEffect, useState } from 'react';
import './searchName.css';
import axios from 'axios';
import { MagnifyingGlass,Info } from 'phosphor-react';
import noProfile from '../../assets/no-profile-image.png'
import { NavLink } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import Navbar from '../navbar/Navbar';

function SearchStance() {

  const [fighterData, setFighterData] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [showMore,setShowMore] = useState(24)
  const [loading,setLoading] = useState(false)

  let url = "http://localhost:8080/fighter?stance=" + inputValue
  let allUrl = "http://localhost:8080/fighter?stance="


  const addMorePages = () => {
    setShowMore(showMore + 24)
  }

  const countFighter = (fighterArray) => {
   let count = 0
    for (let i = 0; i < fighterArray.length; i++) {
      count +=1
    }
    return count
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default behavior (e.g., form submission)
      getFighter();
      setShowMore(24)
    }

  };


  const getFighter = () => {
    axios.get(url).then(res => {
      setLoading(true)
      setFighterData(res.data)
      countFighter(res.data)

    }).catch(err => {
      console.log(err)
    })
  }

  const getAllFighters = () => {
    axios.get(allUrl).then(res => {
      setLoading(true)
      setFighterData(res.data)
      countFighter(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(()=> {
    getFighter()
  },[])


  return (
    <div className="searchName">
      <Navbar/>
      <div className="titles">
      <NavLink to='/name'>        <h1 onClick={getAllFighters} className='all'>All</h1>
      </NavLink>  
        <NavLink to='/champions'>        <h1 className='all'>Champions</h1>
        </NavLink>
        <NavLink to='/popular'>        <h1 className='all'>Popular</h1>
        </NavLink>



      </div>

      <h2 className='numberOfAthletes'>{countFighter(fighterData)} Athletes</h2>
      <div className='search-function'>
        <div className='search-bar'>
          <MagnifyingGlass className='magnifying-glass' size={20} />
          <input className='input-label' placeholder='Search Athlete By Stance' onChange={handleChange} value={inputValue} type='text' onKeyDown={handleKeyDown} />
        </div>
      </div>

      <div className='bar-line'></div>
      <div className="searchGrid">
        {

          loading ?
  
          fighterData.slice(0,showMore).map((fighter, index) => (
            <div className='card' key={index}>
              <div className='card-img'>
                <img src={noProfile} alt="" />
              </div>
              <div className='bar-line2'></div>

              <h2 id='fighter-name'>{fighter.name}</h2>
              <h1>{fighter.stance}</h1>
              <h1>{fighter.weight}</h1>
              <h1>{fighter.height}</h1>
              <h1>{fighter.dob}</h1>
=              <a target='_blank' href={fighter.url}><Info color='black'/></a>
            </div>
          ))
          :
          <TailSpin 
  visible={true}
  height="80"
  width="80"
  color="#ff0000"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass="tail-spin"
  />
        }
      </div>
      {loading ? <div className='load-more'>
      <button className='load-more-btn' onClick={addMorePages}>Load More</button>
      </div> :
      '' }
      
    </div>
  );
}

export default SearchStance;
