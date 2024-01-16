export default function Answer({ answer, handleClick }) {
  return (
    <div onClick={() => handleClick(answer.isCorrect)}>
        <p>{answer.text}</p>
    </div>
  );
}
