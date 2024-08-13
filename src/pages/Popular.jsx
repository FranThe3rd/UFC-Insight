import { useEffect, useState } from 'react';
import '../components/searchbar/searchName.css';
import axios from 'axios';
import { MagnifyingGlass,Info } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import noProfile from '../assets/no-profile-image.png'


function Popular() {

    const popularArray = [
        {
          id: 1,
          name: "Conor McGregor",
          height: "5'9\"",
          weight: "155 lbs.",
          reach: "74\"",
          stance: "Southpaw",
          dob: "July 14, 1988",
          url: "http://ufcstats.com/fighter-details/f4c49976c75c5ab2"
        },
        {
          id: 2,
          name: "Khabib Nurmagomedov",
          height: "5'10\"",
          weight: "155 lbs.",
          reach: "70\"",
          stance: "Orthodox",
          dob: "September 20, 1988",
          url: "http://ufcstats.com/fighter-details/032cc3922d871c7f"
        },
        {
          id: 3,
          name: "Anderson Silva",
          height: "6'2\"",
          weight: "185 lbs.",
          reach: "77\"",
          stance: "Orthodox",
          dob: "April 14, 1975",
          url: "http://ufcstats.com/fighter-details/f2925e6db404bf1d"
        },
        {
          id: 4,
          name: "Georges St-Pierre",
          height: "5'10\"",
          weight: "170 lbs.",
          reach: "76\"",
          stance: "Orthodox",
          dob: "May 19, 1981",
          url: "http://ufcstats.com/fighter-details/91afd96d99b965b7"
        },
        {
          id: 5,
          name: "Jon Jones",
          height: "6'4\"",
          weight: "205 lbs.",
          reach: "84\"",
          stance: "Orthodox",
          dob: "July 19, 1987",
          url: "http://ufcstats.com/fighter-details/f4d3b0b444154785"
        },
        {
          id: 6,
          name: "Ronda Rousey",
          height: "5'7\"",
          weight: "135 lbs.",
          reach: "68\"",
          stance: "Orthodox",
          dob: "February 1, 1987",
          url: "http://ufcstats.com/fighter-details/e8ff75b2c5a7e51f"
        },
        {
          id: 7,
          name: "Daniel Cormier",
          height: "5'11\"",
          weight: "205 lbs.",
          reach: "72\"",
          stance: "Orthodox",
          dob: "March 20, 1979",
          url: "http://ufcstats.com/fighter-details/5edef93fcc7c5ab9"
        },
        {
          id: 8,
          name: "Amanda Nunes",
          height: "5'8\"",
          weight: "135 lbs.",
          reach: "69\"",
          stance: "Orthodox",
          dob: "May 30, 1988",
          url: "http://ufcstats.com/fighter-details/b00137c0401d63a0"
        },
        {
          id: 9,
          name: "Chuck Liddell",
          height: "6'2\"",
          weight: "205 lbs.",
          reach: "76\"",
          stance: "Orthodox",
          dob: "December 17, 1969",
          url: "http://ufcstats.com/fighter-details/2f732dd9210d301f"
        },
        {
          id: 10,
          name: "Brock Lesnar",
          height: "6'3\"",
          weight: "265 lbs.",
          reach: "81\"",
          stance: "Orthodox",
          dob: "July 12, 1977",
          url: "http://ufcstats.com/fighter-details/a4f1549084b49d48"
        },
        {
          id: 11,
          name: "Nate Diaz",
          height: "6'0\"",
          weight: "170 lbs.",
          reach: "76\"",
          stance: "Southpaw",
          dob: "April 16, 1985",
          url: "http://ufcstats.com/fighter-details/a550c79c8ce6bdb0"
        },
        {
          id: 12,
          name: "Demetrious Johnson",
          height: "5'3\"",
          weight: "125 lbs.",
          reach: "66\"",
          stance: "Orthodox",
          dob: "August 13, 1986",
          url: "http://ufcstats.com/fighter-details/d0406bbe966d1f7d"
        },
        {
          id: 13,
          name: "Israel Adesanya",
          height: "6'4\"",
          weight: "185 lbs.",
          reach: "80\"",
          stance: "Switch",
          dob: "July 22, 1989",
          url: "http://ufcstats.com/fighter-details/a9e7be1f78d8e548"
        },
        {
          id: 14,
          name: "Francis Ngannou",
          height: "6'4\"",
          weight: "265 lbs.",
          reach: "83\"",
          stance: "Orthodox",
          dob: "September 5, 1986",
          url: "http://ufcstats.com/fighter-details/0df5f7a68085e823"
        },
        {
          id: 15,
          name: "Max Holloway",
          height: "5'11\"",
          weight: "145 lbs.",
          reach: "69\"",
          stance: "Orthodox",
          dob: "December 4, 1991",
          url: "http://ufcstats.com/fighter-details/ecd3fe9ce95a7a20"
        }
      ];
      
        
      



  return (
    <div className="searchName">
      <div className="titles">
      <NavLink to='/'>        <h1  className='all'>All</h1>
      </NavLink>  
        <NavLink to='/champions'>        <h1 className='all'>Champions</h1>
        </NavLink>
        <NavLink to='/popular'>        <h1 className='all'>Popular</h1>
        </NavLink>



      </div>

      <h2 className='numberOfAthletes'>15 Athletes</h2>
      <div className='search-function'>
        
      </div>

      <div className='bar-line'></div>
      <div className="searchGrid">
        {popularArray.map((popular,index)=> (
             <div className='card' key={index}>
             <div className='card-img'>
               <img src={noProfile} alt="" />
             </div>
             <div className='bar-line2'></div>

             <h2 id='fighter-name'>{popular.name}</h2>
             <h1>{popular.weight}</h1>
             <h1>{popular.stance}</h1>
             <a target='_blank' href={popular.url}><Info color='black'/></a>
           </div>
        )

        )}
        
      </div>
      <div className='load-more'>
      <button className='load-more-btn'>Load More</button>
      </div>
    </div>
  );
}

export default Popular;
