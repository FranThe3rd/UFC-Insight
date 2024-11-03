import { useEffect, useState } from 'react';
import '../components/searchbar/searchName.css';
import axios from 'axios';
import { MagnifyingGlass,Info } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import noProfile from '../assets/no-profile-image.png'

function Champions() {

    const champArray = [
        {
          "id": 1,
          "name": "Islam Makhachev",
          "height": "5'10\"",
          "weight": "155 lbs.",
          "reach": "73\"",
          "stance": "Orthodox",
          "dob": "Nov 18, 1991",
          "url": "http://ufcstats.com/fighter-details/275aca31f61ba28c"
        },
        {
          "id": 2,
          "name": "Alexander Volkanovski",
          "height": "5'6\"",
          "weight": "145 lbs.",
          "reach": "69\"",
          "stance": "Orthodox",
          "dob": "May 29, 1988",
          "url": "http://ufcstats.com/fighter-details/e1248941344b3288"
        },
        {
          "id": 3,
          "name": "Aljamain Sterling",
          "height": "5'8\"",
          "weight": "135 lbs.",
          "reach": "70\"",
          "stance": "Orthodox",
          "dob": "July 31, 1989",
          "url": "http://ufcstats.com/fighter-details/cb696ebfb6598724"
        },
        {
          "id": 4,
          "name": "Brandon Moreno",
          "height": "5'6\"",
          "weight": "125 lbs.",
          "reach": "67\"",
          "stance": "Orthodox",
          "dob": "December 7, 1993",
          "url": "http://ufcstats.com/fighter-details/792be9a24df82ed6"
        },
        {
          "id": 5,
          "name": "Zhang Weili",
          "height": "5'6\"",
          "weight": "115 lbs.",
          "reach": "66\"",
          "stance": "Orthodox",
          "dob": "August 8, 1989",
          "url": "http://ufcstats.com/fighter-details/1ebe20ebbfa15e29"
        },
        {
          "id": 6,
          "name": "Amanda Nunes",
          "height": "5'8\"",
          "weight": "135 lbs.",
          "reach": "69\"",
          "stance": "Orthodox",
          "dob": "May 1, 1988",
          "url": "http://ufcstats.com/fighter-details/80fa8218c99f9c58"
        },
        {
          "id": 7,
          "name": "Valentina Shevchenko",
          "height": "5'7\"",
          "weight": "125 lbs.",
          "reach": "68\"",
          "stance": "Southpaw",
          "dob": "March 7, 1988",
          "url": "http://ufcstats.com/fighter-details/132deb59abae64b1"
        },
        {
          "id": 8,
          "name": "Rose Namajunas",
          "height": "5'4\"",
          "weight": "115 lbs.",
          "reach": "65\"",
          "stance": "Orthodox",
          "dob": "May 29, 1992",
          "url": "http://ufcstats.com/fighter-details/47b63240018d5d86"
        },
        {
          "id": 9,
          "name": "Leon Edwards",
          "height": "5'10\"",
          "weight": "170 lbs.",
          "reach": "76\"",
          "stance": "Orthodox",
          "dob": "February 25, 1991",
          "url": "http://ufcstats.com/fighter-details/f1fac969a1d70b08"
        },
        {
          "id": 10,
          "name": "Khamzat Chimaev",
          "height": "5'11\"",
          "weight": "170 lbs.",
          "reach": "76\"",
          "stance": "Orthodox",
          "dob": "May 1, 1994",
          "url": "http://ufcstats.com/fighter-details/767755fd74662dbf"
        },
        {
          "id": 11,
          "name": "Alex Pereira",
          "height": "6'4\"",
          "weight": "185 lbs.",
          "reach": "80\"",
          "stance": "Southpaw",
          "dob": "January 10, 1990",
          "url": "http://ufcstats.com/fighter-details/e5549c82bfb5582d"
        },
        {
          "id": 12,
          "name": "Jiri Prochazka",
          "height": "6'3\"",
          "weight": "205 lbs.",
          "reach": "80\"",
          "stance": "Southpaw",
          "dob": "September 14, 1992",
          "url": "http://ufcstats.com/fighter-details/009341ed974bad72"
        },
        {
          "id": 13,
          "name": "Jon Jones",
          "height": "6'4\"",
          "weight": "205 lbs.",
          "reach": "84\"",
          "stance": "Orthodox",
          "dob": "July 19, 1987",
          "url": "http://ufcstats.com/fighter-details/07f72a2a7591b409"
        },
        {
          "id": 14,
          "name": "Francis Ngannou",
          "height": "6'4\"",
          "weight": "265 lbs.",
          "reach": "83\"",
          "stance": "Orthodox",
          "dob": "September 5, 1986",
          "url": "http://ufcstats.com/fighter-details/8d03ce87ca14e778"
        }
      ]
      



  return (
    <div className="searchName">
      <div className="titles">
      <NavLink to='/name'>        <h1  className='all'>All</h1>
      </NavLink>  
        <NavLink to='/champions'>        <h1 className='all'>Champions</h1>
        </NavLink>
        <NavLink to='/popular'>        <h1 className='all'>Popular</h1>
        </NavLink>
      </div>

      <h2 className='numberOfAthletes'>14 Athletes</h2>
      <div className='search-function'>
        
      </div>

      <div className='bar-line'></div>
      <div className="searchGrid">
        {champArray.map((champion,index)=> (
             <div className='card' key={index}>
             <div className='card-img'>
               <img src={noProfile} alt="" />
             </div>
             <div className='bar-line2'></div>

             <h2 id='fighter-name'>{champion.name}</h2>
             <h1>{champion.weight}</h1>
             <h1>{champion.stance}</h1>
             <h1>{champion.height}</h1>
             <h1>{champion.dob}</h1>


             <a target='_blank' href={champion.url}><Info color='black'/></a>
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

export default Champions;
