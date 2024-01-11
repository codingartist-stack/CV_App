import { useState } from 'react';
import BasicInfo from './components/basicInfo';
import { DisplayPreview } from './components/displayPreview';
import Skills from './components/Skills';
import InterestForm from './components/InterestsForm';

function App() {
  const [personInfo, setPersonInfo] = useState({
    id: crypto.randomUUID(),
    firstName: 'Indigo',
    lastName: 'Winter',
    title: 'Historian',
    summary:
      'As a distinguished historian renowned for my deep expertise in unraveling the intricacies of historical narratives. With a passion for uncovering untold stories and exploring the nuances of different eras, I have made significant contributions to the field through meticulous research and insightful analysis. My publications have garnered acclaim for their scholarly rigor, contributing valuable insights to our understanding of the past.',
    phone: '(123)123-1234',
    email: 'email@email.com',
    // education: [
    //   {
    //     school: 'University',
    //     degree: 'Bacholars',
    //     graduatedYear: 2006,
    //   },
    // ],
    // experience: [],
  });

  const [skillsList, setSkills] = useState([
    {
      id: crypto.randomUUID(),
      title: 'Problem Solving',
    },
    {
      id: crypto.randomUUID(),
      title: 'Communication',
    },
  ]);

  const [interestList, setinterestList] = useState([
    {
      id: crypto.randomUUID(),
      title: 'Painting',
    },
    {
      id: crypto.randomUUID(),
      title: 'Theater',
    },
  ]);

  const updatePerson = (name, value) => {
    setPersonInfo((currentPerson) => {
      return { ...currentPerson, ...{ [name]: value } };
    });
  };

  const updateList = (listArray, value) => {
    if (listArray === 'skills') {
      setSkills((currentList) => {
        return [
          ...currentList,
          {
            id: crypto.randomUUID(),
            title: value,
          },
        ];
      });
    } else {
      setinterestList((currentList) => {
        return [
          ...currentList,
          {
            id: crypto.randomUUID(),
            title: value,
          },
        ];
      });
    }
  };

  const updateInterestList = (value) => {
    setinterestList((currentList) => {
      return [
        ...currentList,
        {
          id: crypto.randomUUID(),
          title: value,
        },
      ];
    });
  };

  const deleteListItem = (array, id) => {
    if (array === 'skills') {
      setSkills((currentList) => {
        return currentList.filter((skill) => skill.id !== id);
      });
    } else {
      setinterestList((currentList) => {
        return currentList.filter((interest) => interest.id !== id);
      });
    }
  };

  return (
    <>
      <main>
        <BasicInfo updatePerson={updatePerson} />
        <Skills
          updateList={updateList}
          skillsList={skillsList}
          deleteListItem={deleteListItem}
        />
        <InterestForm
          updateList={updateList}
          interestList={interestList}
          deleteListItem={deleteListItem}
        />
      </main>

      <DisplayPreview personInfo={personInfo} />
    </>
  );
}

export default App;
