export default function Answer({ answer, isSelected, handleAnswerClick }) {
  return (
    <div
      onClick={handleAnswerClick}
      className='Answer d-flex align-items-center'
    >
      <h4 className='px-3 py-2 col-10' style={{border: isSelected ? '1px solid red' : '' , color: isSelected ? 'red' : ''}}>{answer.text}</h4>
    </div>
  );
}
