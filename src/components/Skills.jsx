import { useState } from 'react';

export default function Skills(props) {
  const [skill, setSkill] = useState('');

  const updateSkill = (e) => {
    setSkill(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('i have been clicked');
    props.updatePerson('skills', skill);

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
        {props.personInfo.skills.map((skill) => {
          return (
            <li key={skill.id}>
              {skill.title}
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
