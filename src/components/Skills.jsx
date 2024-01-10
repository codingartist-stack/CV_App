/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Skills(props) {
  const [skill, setSkill] = useState('');

  const updateSkill = (e) => {
    setSkill(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateSkillsList(skill);
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
      <ul>
        {props.skillsList.map((skill) => {
          return (
            <li key={skill.id}>
              {skill.title}
              <button onClick={() => props.deleteSkill(skill.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
