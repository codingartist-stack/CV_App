import { useState } from 'react';
import ListForm from './listForm';

export default function InterestForm(props) {
  const [interestItem, setInterestItem] = useState('');

  const updateInterestItem = (e) => {
    setInterestItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (interestItem === '') return;
    props.updateList('interests', interestItem);
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
      <ListForm
        name="interest"
        list={props.interestList}
        deleteListItem={props.deleteListItem}
      />
    </>
  );
}
