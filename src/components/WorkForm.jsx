import { useState } from 'react';

export default function WorkForm(props) {
  const [companyName, setcompany] = useState('');
  const [jobTitleName, setJobTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [summary, setSumary] = useState('');

  const updateCompany = (e) => {
    setcompany(e.target.value);
  };

  const updateTitle = (e) => {
    setJobTitle(e.target.value);
  };

  const updateStart = (e) => {
    setStart(e.target.value);
  };

  const updateEnd = (e) => {
    setEnd(e.target.value);
  };

  const updateSummary = (e) => {
    setSumary(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateWork(companyName, jobTitleName, start, end, summary);
    updateCompany('');
    updateTitle('');
    updateStart('');
    updateEnd('');
    updateSummary('');
  };

  return (
    <>
      <form action="">
        <fieldset className="gridForm">
          <legend>Work Experience</legend>
          <label htmlFor="company">Company Name</label>
          <input
            value={companyName}
            type="text"
            name="company"
            id="company"
            onChange={updateCompany}
          />

          <label htmlFor="JobTitle">Job Title</label>
          <input
            value={jobTitleName}
            type="text"
            name="jobTitle"
            id="jobTtile"
            onChange={updateTitle}
          />

          <label htmlFor="startDate">Start Date</label>
          <input
            value={start}
            type="month"
            name="startDate"
            id="startDate"
            onChange={updateStart}
          />
          <label htmlFor="endDate">end Date (present option)</label>
          <input
            value={start}
            type="month"
            name="endDate"
            id="endDate"
            onChange={updateEnd}
          />

          <label htmlFor="summary">Summary</label>
          <textarea
            value={summary}
            name="summary"
            id="summary"
            className="summaryInput"
            onChange={updateSummary}
          ></textarea>
          <button onClick={handleSubmit}>Add</button>
        </fieldset>
      </form>
    </>
  );
}
