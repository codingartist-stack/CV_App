//personal info
//name
//title?
//short blurb about self

import { useState } from 'react';

function BasicInfo({ updatePersonalInfo }) {
  const [firstName, setFirstName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('something is happening');
    if (firstName === '') return;

    updatePersonalInfo(firstName);
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
            onChange={(e) => setFirstName(e.target)}
          />
        </fieldset>

        <fieldset>
          <legend htmlFor="lastName">Last Name</legend>
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            // onChange={handleLastName}
          />
        </fieldset>

        <fieldset>
          <legend htmlFor="title">Professional Title</legend>
          <input
            type="text"
            placeholder="Professional Title"
            id="title"
            // onChange={handleTitle}
          />
        </fieldset>

        <fieldset>
          <legend htmlFor="summary">Summary</legend>
          <input
            type="text"
            placeholder="Professional Summary"
            className="textSummary"
            id="summarty"
            // onChange={handleSummary}
          />
        </fieldset>

        <button>save</button>
      </form>
    </>
  );
}

export default BasicInfo;
