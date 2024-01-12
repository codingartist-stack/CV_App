import { useState } from 'react';
import BasicInfo from './components/basicInfo';
import { DisplayPreview } from './components/displayPreview';
import Skills from './components/Skills';
import InterestForm from './components/InterestsForm';
import EducationForm from './components/EducationForm';
import WorkForm from './components/WorkForm';

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

  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      school: 'SML University',
      degree: "Bachelor's degree",
      graduatedYear: '2018-07',
    },
    {
      id: crypto.randomUUID(),
      school: 'WA College',
      degree: 'Vocational qualification',
      graduatedYear: '2012-07',
    },
  ]);

  const [workExperience, setWorkExperience] = useState([
    {
      id: crypto.randomUUID(),
      company: 'ACME Corp',
      jobTitle: 'Supervisor',
      startDate: '2010-12',
      endDate: '2020-06',
      jobSummary:
        'As an ACME Corp Supervisor, you will lead a dynamic team, ensuring optimal departmental operations. Your role involves overseeing workflow, maintaining quality standards, and driving productivity. Collaborate with upper management to implement strategic initiatives, foster a positive work environment, and monitor key performance indicators. If you excel in leadership, thrive in a fast-paced setting, and have a track record in successful team management, join us in this key supervisory role.',
    },
    {
      id: crypto.randomUUID(),
      company: 'Quantum Innovations Solutions',
      jobTitle: 'Senior Quantum Integration Specialist',
      startDate: '2003-12',
      endDate: '2010-06',
      jobSummary:
        'As a Senior Quantum Integration Specialist at Quantum Innovations Solutions, you will be at the forefront of groundbreaking technology, leading the integration of quantum solutions into our clients existing systems. Your role involves designing and implementing quantum algorithms, collaborating with cross-functional teams, and providing technical expertise in quantum computing. Join us in revolutionizing the technological landscape and shaping the future of quantum innovation. If you possess a deep understanding of quantum mechanics, programming proficiency, and a passion for cutting-edge technologies, this role is your gateway to the forefront of quantum advancements.',
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

  const updateEducation = (schoolVal, degreeVal, yearVal) => {
    setEducation((currentEducation) => {
      return [
        ...currentEducation,
        {
          id: crypto.randomUUID(),
          school: schoolVal,
          degree: degreeVal,
          graduatedYear: yearVal,
        },
      ];
    });
  };

  const updateWork = (companyName, jobTitleName, start, end, summary) => {
    setWorkExperience((currentWorkEx) => {
      return [
        ...currentWorkEx,
        {
          id: crypto.randomUUID(),
          company: companyName,
          jobTitle: jobTitleName,
          startDate: start,
          endDate: end,
          jobSummary: summary,
        },
      ];
    });
  };

  const deleteListItem = (array, id) => {
    if (array === 'skills') {
      setSkills((currentList) => {
        return currentList.filter((skill) => skill.id !== id);
      });
    } else if (array === 'interest') {
      setinterestList((currentList) => {
        return currentList.filter((interest) => interest.id !== id);
      });
    } else if (array === 'education') {
      setEducation((currentEducation) => {
        return currentEducation.filter((edu) => edu.id !== id);
      });
    } else {
      setWorkExperience((currentWorkEx) => {
        return currentWorkEx.filter((work) => work.id !== id);
      });
    }
  };

  return (
    <>
      <main className="mainForm">
        <h1 className="appTitle">CSV Creator</h1>
        <BasicInfo updatePerson={updatePerson} />
        <EducationForm
          updateEducation={updateEducation}
          education={education}
          deleteListItem={deleteListItem}
        />
        <WorkForm
          workExperience={workExperience}
          updateWork={updateWork}
          deleteListItem={deleteListItem}
          name="workEx"
        />
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

      <DisplayPreview
        personInfo={personInfo}
        skillsList={skillsList}
        interestList={interestList}
        education={education}
        workExperience={workExperience}
      />
    </>
  );
}

export default App;
