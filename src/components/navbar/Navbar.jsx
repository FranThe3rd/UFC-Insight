import { useState,useEffect } from 'react'
import  styles from './Navbar.module.css';
import ufcLogo from '../../assets/ufc-logo.png'
import useIntersectionObserver from '../../animations/useIntersectionObserver';

function Navbar() {
    // adding the states 
    const [isActive, setIsActive] = useState(false);
    //add the active class
    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };
    //clean up function to remove the active class
    const removeActive = () => {
      setIsActive(false)
    }

    

    const [changedColor,setColor] = useState(true)

    const handleScroll = () => {
      if (window.scrollY >= 60) {
        setColor(false);
      } else {
        setColor(true);
      }
    };


    window.addEventListener('scroll',handleScroll)




   

    useIntersectionObserver();
    return (
      <div className='main' >
        <header className="navbar-header">
        <nav className={`${styles.navbar} ${changedColor ? styles['navbar-change'] : ''}`}> {/**Changed Color*/}            
            <img className='ufc-logo' src={ufcLogo} alt="" />
            <ul className={`${styles.navMenu}  ${isActive ? styles.active : ''}`}>
              <li onClick={removeActive}>
                <a href='/' className={`${styles.navLink}`}>Athletes</a>
              </li>
              <li onClick={removeActive}>
                <a href='#home' className={`${styles.navLink}`}>Weight Division</a>
              </li>
              <li onClick={removeActive}>
                <a href='#home' className={`${styles.navLink}`}>Height</a>
              </li>
              <li onClick={removeActive}>
                <a href='#home' className={`${styles.navLink}`}>Stance</a>
              </li>
            </ul>
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
            </div>
          </nav>
        </header>
      </div>
    );
  }
  export default Navbar;
  ;
  