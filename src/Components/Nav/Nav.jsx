import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const prizeList = [
  { level: 1, amount: '$100' },
  { level: 2, amount: '$200' },
  { level: 3, amount: '$300' },
  { level: 4, amount: '$500' },
  { level: 5, amount: '$1,000' },
  { level: 6, amount: '$2,000' },
  { level: 7, amount: '$4,000' },
  { level: 8, amount: '$8,000' },
  { level: 9, amount: '$16,000' },
  { level: 10, amount: '$32,000' },
  { level: 11, amount: '$64,000' },
  { level: 12, amount: '$125,000' },
  { level: 13, amount: '$250,000' },
  { level: 14, amount: '$500,000' },
  { level: 15, amount: '$1,000,000' },
];

export default function Nav({ currentQuestionIndex }) {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (<>
   <nav className='col-12 d-flex justify-content-between'>
      <Link to={'/'}>
        <h1>1M Game</h1>
      </Link>
      <MenuIcon fontSize="large" onClick={handleClick}/>
    {isActive && <>
      <ul className='Prize d-flex flex-column gap-2 p-4'>
      <p>Your Win:</p>
        {prizeList.map((prize, index) => (
          <li
            key={prize.level}
            style={{
              color: index + 1 <= currentQuestionIndex && 'green',
              fontWeight: index + 1 === currentQuestionIndex && 'bold',
            }}
          >
            Level {prize.level}: {prize.amount}
          </li>
        ))}
      </ul>
    </>
        
      }
       </nav>
  </>
   
  );
}
