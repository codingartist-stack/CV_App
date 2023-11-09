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

  const handleSave = (e) => {
    setPersonInfo(...personInfo);
  };

  return (
    <>
      <form>
        <fieldset>
          <legend>Personal Information</legend>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Professional Title" />
          <input type="email" placeholder="email" />
          <input type="number" placeholder="phone" />
          <input type="url" placeholder="url website" />
          <input
            type="text"
            placeholder="Professional Summary"
            className="textSummary"
          />
          <button onClick={handleSave}>Save</button>
        </fieldset>
      </form>
      <div>
        <h1>
          {personInfo.firstName} {personInfo.lastName}
        </h1>
        <i>{personInfo.title}</i>
        <p>{personInfo.summary}</p>
        <ul>
          <li>{personInfo.email}</li>
          <li>{personInfo.phone}</li>
          <li>{personInfo.website}</li>
        </ul>
      </div>
    </>
  );
}

export default BasicInfo;
