import { useState } from 'react'
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

    useIntersectionObserver();
    return (
      <div className="navbar hidden">
        <header className="navbar-header">
          <nav className={`${styles.navbar}`}>
            {/* logo */}
            <img className='ufc-logo' src={ufcLogo} alt="" />
            <ul className={`${styles.navMenu}  ${isActive ? styles.active : ''}`}>
              <li onClick={removeActive}>
                <a href='#home' className={`${styles.navLink}`}>Athletes</a>
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
  