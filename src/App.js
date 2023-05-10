import React from 'react';
import Cv from './components/Cv';
import ExperienceSections from './components/ExperienceSections';
import PersonalInfoSection from './components/PersonalInfoSection';
import EducationSections from './components/EducationSections';

function App() {
  const cvInfo = {
    personalInfo: {},
    experience: {},
    education: {},
  };

  const [inputData, setInputData] = React.useState(cvInfo);

  function updateCvInfo(data) {
    const section = data.section;
    const prevDataCopy = { ...inputData };

    if (section === 'personal') {
      prevDataCopy.personalInfo = data;
    } else if (section?.includes('experience')) {
      prevDataCopy.experience[section] = data;
    } else if (section?.includes('education')) {
      prevDataCopy.education[section] = data;
    }

    setInputData(prevDataCopy);
  }

  function removeDeletedSectionsData(section, title) {
    const prevDataCopy = { ...inputData }
    const propToDelete = `${title}-${section}`

    delete prevDataCopy[title][propToDelete];
    setInputData(prevDataCopy)
  }

  return (
    <div className='App'>
      <h1>CV CREATOR</h1>
      <div className='sections-body'>
        <h2>Personal Information</h2>
        <PersonalInfoSection
          updateCvInfo={updateCvInfo}
        />
        <h2>Experience</h2>
        <ExperienceSections
          updateCvInfo={updateCvInfo}
          removeDeletedSectionsData={removeDeletedSectionsData}
        />
        <h2>Education</h2>
        <EducationSections
          updateCvInfo={updateCvInfo}
          removeDeletedSectionsData={removeDeletedSectionsData}
        />
      </div>
      <Cv userInput={inputData} />
    </div>
  );
}

export default App;
