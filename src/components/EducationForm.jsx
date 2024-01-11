import { useState } from 'react';
import DisplayEducationForm from './displayEducationForm';

export default function EducationForm(props) {
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [year, setYear] = useState('');

  const handleSchool = (e) => {
    setSchool(e.target.value);
    console.log(e.target.value);
  };

  const handleDegree = (e) => {
    setDegree(e.target.value);
    console.log(e.target.value);
  };

  const handleYear = (e) => {
    setYear(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateEducation(school, degree, year);
    console.log(props.education);
  };

  return (
    <>
      <form action="">
        <fieldset className="gridForm">
          <legend>Education</legend>

          <label>Name of Education Institution</label>
          <input
            type="text"
            name="school"
            id="school"
            onChange={handleSchool}
          />

          <label>Level Of Completion</label>
          <select
            className="form-control dropdown"
            id="education"
            name="education"
            onChange={handleDegree}
          >
            <option value="" defaultValue="selected" disabled="disabled">
              -- select one --
            </option>
            <option value="No formal education">No formal education</option>
            <option value="Primary education">Primary education</option>
            <option value="Secondary education">
              Secondary education or high school
            </option>
            <option value="GED">GED</option>
            <option value="Vocational qualification">
              Vocational qualification
            </option>
            <option value="Bachelor's degree">Bachelor's degree</option>
            <option value="Master's degree">Master's degree</option>
            <option value="Doctorate or higher">Doctorate or higher</option>
          </select>

          <label>Year of Completion</label>
          <input
            type="month"
            name="yearCompletion"
            id="yearCompletion"
            onChange={handleYear}
          />
        </fieldset>
        <button onClick={handleSubmit}>Add</button>
      </form>
      <DisplayEducationForm
        educationList={props.education}
        deleteListItem={props.deleteListItem}
      />
    </>
  );
}
