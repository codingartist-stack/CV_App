import { useState } from 'react';
import BasicInfo from './components/basicInfo';
BasicInfo;

function App() {
  const [personInfo, setPersonInfo] = useState({
    id: crypto.randomUUID(),
    firstName: 'Indigo',
    lastName: 'Winter',
    title: 'Historian',
    summary:
      'As a distinguished historian renowned for my deep expertise in unraveling the intricacies of historical narratives. With a passion for uncovering untold stories and exploring the nuances of different eras, I have made significant contributions to the field through meticulous research and insightful analysis. My publications have garnered acclaim for their scholarly rigor, contributing valuable insights to our understanding of the past.',
  });

  const updateFirstName = (firstName) => {
    setPersonInfo((currentPerson) => {
      return { ...currentPerson, firstName };
    });
  };
  const updateLastName = (lastName) => {
    setPersonInfo((currentPerson) => {
      return { ...currentPerson, lastName };
    });
  };
  const updateTitle = (title) => {
    setPersonInfo((currentPerson) => {
      return { ...currentPerson, title };
    });
  };
  const updateSummary = (summary) => {
    setPersonInfo((currentPerson) => {
      return { ...currentPerson, summary };
    });
  };
  console.log(personInfo);

  return (
    <>
      <BasicInfo
        updateFirstName={updateFirstName}
        updateLastName={updateLastName}
        updateTitle={updateTitle}
        updateSummary={updateSummary}
      />
    </>
  );
}

export default App;
