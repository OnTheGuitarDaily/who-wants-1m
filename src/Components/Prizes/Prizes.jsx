import React from 'react';

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

export default function Prizes({ currentQuestionIndex }) {
  return (
    <div>
      <h1>Prizes</h1>
      <ul>
        {prizeList.map((prize, index) => (
          <li
            key={prize.level}
            style={{
              color: index + 1 <= currentQuestionIndex ? 'green' : 'black',
              fontWeight: index + 1 === currentQuestionIndex ? 'bold' : 'normal',
            }}
          >
            Level {prize.level}: {prize.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
