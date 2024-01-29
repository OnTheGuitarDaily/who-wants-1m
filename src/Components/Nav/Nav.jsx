import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";


export default function Nav({ currentQuestionIndex, prize}) {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isActive && !event.target.closest('.menuIcon')) {
        setIsActive(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isActive]);



  return (<>
   <nav className='col-12 p-2 d-flex justify-content-between'>
      <Link to={'/'}>
        <h1>1M Game</h1>
      </Link>
      <MenuIcon fontSize="large" className='menuIcon' onClick={handleClick}/>
      
    {isActive && <>
      <ul className='Prize d-flex flex-column gap-2 p-4'>
      <p>Your Win:</p>
        {prize.map((p, index) => (
          <li
            key={p.level}
            style={{
              color: index + 1 <= currentQuestionIndex && 'green',
              fontWeight: index + 1 === currentQuestionIndex && 'bold',
            }}
          >
            Level {p.level}: {p.amount}
          </li>
        ))}
      </ul>
    </>
        
      }
       </nav>
  </>
   
  );
}
