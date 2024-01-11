/* eslint-disable react/prop-types */
import { useState } from 'react';
import ListForm from './listForm';

export default function Skills(props) {
  const [skill, setSkill] = useState('');

  const updateSkill = (e) => {
    setSkill(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (skill === '') return;
    props.updateList('skills', skill);
    setSkill('');
  };

  return (
    <>
      <form>
        <label htmlFor={props.id + '-skill'}>Skills</label>
        <input
          type="text"
          name="skills"
          id={props.id + '-skill'}
          value={skill}
          onChange={updateSkill}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
      <ListForm
        name="skills"
        list={props.skillsList}
        deleteListItem={props.deleteListItem}
      />
    </>
  );
}
