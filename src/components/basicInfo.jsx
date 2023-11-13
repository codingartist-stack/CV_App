//personal info
//name
//title?
//phone number
//email
//website
//short blurb about self

import { useState } from 'react';

function BasicInfo() {
  const [personInfo, setPersonInfo] = useState({
    firstName: 'Indigo',
    lastName: 'Winter',
    title: 'Historian',
    phone: '0123456789',
    email: 'example@mail.com',
    website: 'example.com',
    summary:
      'As a distinguished historian renowned for my deep expertise in unraveling the intricacies of historical narratives. With a passion for uncovering untold stories and exploring the nuances of different eras, I have made significant contributions to the field through meticulous research and insightful analysis. My publications have garnered acclaim for their scholarly rigor, contributing valuable insights to our understanding of the past.',
  });

  const handleFirstName = (e) => {
    const newFirstPerson = { ...personInfo, firstName: e.target.value };
    setPersonInfo(newFirstPerson);
  };
  const handleLastName = (e) => {
    const newLastName = { ...personInfo, lastName: e.target.value };
    setPersonInfo(newLastName);
  };
  const handleTitle = (e) => {
    const newTitle = { ...personInfo, title: e.target.value };
    setPersonInfo(newTitle);
  };

  const handlePhone = (e) => {
    const newPhone = { ...personInfo, phone: e.target.value };
    setPersonInfo(newPhone);
  };
  const handleEmail = (e) => {
    const newEmail = { ...personInfo, phone: e.target.value };
    setPersonInfo(newEmail);
  };
  const handleWebsite = (e) => {
    const newURL = { ...personInfo, website: e.target.value };
    setPersonInfo(newURL);
  };
  const handleSummary = (e) => {
    const newSummary = { ...personInfo, summary: e.target.value };
    setPersonInfo(newSummary);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (personInfo === '') return;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <input
            type="text"
            placeholder="First Name"
            onChange={handleFirstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleLastName}
          />
          <input
            type="text"
            placeholder="Professional Title"
            onChange={handleTitle}
          />
          <input type="email" placeholder="email" onChange={handleEmail} />
          <input type="number" placeholder="phone" onChange={handlePhone} />
          <input
            type="url"
            placeholder="url website"
            onChange={handleWebsite}
          />
          <input
            type="text"
            placeholder="Professional Summary"
            className="textSummary"
            onChange={handleSummary}
          />
        </fieldset>
        <button>add</button>
      </form>
      <div>
        <h1>
          {personInfo.firstName} {personInfo.lastName}
        </h1>
        <i>{personInfo.title}</i>
        <ul>
          <li>{personInfo.phone}</li>
          <li>{personInfo.email}</li>
          <li>{personInfo.website}</li>
        </ul>
        <p>{personInfo.summary}</p>
        <button>Edit</button>
      </div>
    </>
  );
}

export default BasicInfo;
