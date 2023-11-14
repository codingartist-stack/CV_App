import { useState } from 'react';
import BasicInfo from './components/basicInfo';
BasicInfo;

function App() {
  const [personInfo, setPersonInfo] = useState('');

  const updatePersonalInfo = () => {
    setPersonInfo((currentPerson) => {
      return [
        ...currentPerson,
        {
          id: crypto.randomUUID(),
          firstName: 'Indigo',
          lastName: 'Winter',
          title: 'Historian',
          summary:
            'As a distinguished historian renowned for my deep expertise in unraveling the intricacies of historical narratives. With a passion for uncovering untold stories and exploring the nuances of different eras, I have made significant contributions to the field through meticulous research and insightful analysis. My publications have garnered acclaim for their scholarly rigor, contributing valuable insights to our understanding of the past.',
        },
      ];
    });
  };
  console.log(personInfo);

  return (
    <>
      <BasicInfo updatePersonalInfo={updatePersonalInfo} />
    </>
  );
}

export default App;
