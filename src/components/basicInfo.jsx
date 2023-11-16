//personal info
//name
//title?
//short blurb about self

import { useState } from 'react';

function BasicInfo({
  updateFirstName,
  updateLastName,
  updateTitle,
  updateSummary,
}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName === '') return;

    updateFirstName(firstName);
    updateLastName(lastName);
    updateTitle(title);
    updateSummary(summary);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <fieldset>
          <legend htmlFor="firstName">First Name</legend>
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend htmlFor="lastName">Last Name</legend>
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend htmlFor="title">Professional Title</legend>
          <input
            type="text"
            placeholder="Professional Title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend htmlFor="summary">Summary</legend>
          <input
            type="text"
            placeholder="Professional Summary"
            className="summaryInput"
            id="summary"
            onChange={(e) => setSummary(e.target.value)}
          />
        </fieldset>

        <button>save</button>
      </form>
    </>
  );
}

export default BasicInfo;
