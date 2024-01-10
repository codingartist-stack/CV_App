import { useState } from 'react';

export default function InterestForm(props) {
  const [interestItem, setInterestItem] = useState('');

  const updateInterestItem = (e) => {
    setInterestItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateinterestList(interestItem);
    setInterestItem('');
  };

  return (
    <>
      <form>
        <label htmlFor={props.id + '-interest'}>Interests</label>
        <input
          type="text"
          name="interest"
          id={props.id + '-interest'}
          value={interestItem}
          onChange={updateInterestItem}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
      <ul>
        {props.interestList.map((interestItem) => {
          return (
            <li key={interestItem.id}>
              {interestItem.title}
              <button onClick={() => props.deleteInterest(interestItem.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
