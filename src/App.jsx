import { useState } from 'react';
import BasicInfo from './components/basicInfo';
import { DisplayPreview } from './components/displayPreview';

function App() {
  const [personInfo, setPersonInfo] = useState({
    id: crypto.randomUUID(),
    firstName: 'Indigo',
    lastName: 'Winter',
    title: 'Historian',
    summary:
      'As a distinguished historian renowned for my deep expertise in unraveling the intricacies of historical narratives. With a passion for uncovering untold stories and exploring the nuances of different eras, I have made significant contributions to the field through meticulous research and insightful analysis. My publications have garnered acclaim for their scholarly rigor, contributing valuable insights to our understanding of the past.',
    phone: '123.123.1234',
    education: [],
  });
  const updatePerson = (name, value) => {
    setPersonInfo((currentPerson) => {
      return { ...currentPerson, ...{ [name]: value } };
    });
  };

  return (
    <>
      <BasicInfo updatePerson={updatePerson} />
      <DisplayPreview personInfo={personInfo} />
    </>
  );
}

export default App;
