export default function Answer({ answer, handleClick }) {
  return (
   <div
    onClick={() => handleClick(answer.isCorrect)}
    className="Answers"
    >
        <p style={{color: answer.isCorrect ? 'red' : ''}}>{answer.text}</p>
   </div>
  );
}
