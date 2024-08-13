import { useEffect, useState } from 'react';
import './searchName.css';
import axios from 'axios';
import { MagnifyingGlass,Info } from 'phosphor-react';
import noProfile from '../../assets/no-profile-image.png'

function SearchName() {

  const [fighterData, setFighterData] = useState([])
  const [inputValue, setInputValue] = useState('')

  let url = "http://localhost:8080/fighter?name=" + inputValue


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
    }

  };


  const getFighter = () => {
    axios.get(url).then(res => {
      setFighterData(res.data)
      countFighter(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="searchName">
      <h1 className='all'>UFC Fighters</h1>
      <h2 className='numberOfAthletes'>{countFighter(fighterData)} Athletes</h2>
      <div className='search-function'>
        <div className='search-bar'>
          <MagnifyingGlass className='magnifying-glass' size={20} />
          <input className='input-label' placeholder='Search For Athletes' onChange={handleChange} value={inputValue} type='text' onKeyDown={handleKeyDown} />
        </div>
      </div>

      <div className='bar-line'></div>
      <div className="searchGrid">
        {
          fighterData.map((fighter, index) => (
            <div className='card' key={index}>
              <div className='card-img'>
                <img src={noProfile} alt="" />
              </div>
              <div className='bar-line2'></div>

              <h2 id='fighter-name'>{fighter.name}</h2>
              <h1>{fighter.weight}</h1>
              <h1>{fighter.stance}</h1>
              <a target='_blank' href={fighter.url}><Info color='black'/></a>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default SearchName;
