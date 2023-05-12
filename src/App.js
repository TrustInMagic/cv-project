import React from 'react';
import Cv from './components/Cv';
import ExperienceSections from './components/ExperienceSections';
import PersonalInfoSection from './components/PersonalInfoSection';
import EducationSections from './components/EducationSections';
import cvInfoExample from './example';

function App() {
  const cvInfo = {
    personalInfo: {},
    experience: {},
    education: {},
  };

  const [inputData, setInputData] = React.useState(cvInfo);

  function updateCvInfo(data) {
    const prevDataCopy = { ...inputData };

    for (let key in data) {
      if (key.includes('experience')) {
        prevDataCopy.experience[key] = data[key];
      } else if (key.includes('education')) {
        prevDataCopy.education[key] = data[key];
      } else if (data.section === 'personal') {
        prevDataCopy.personalInfo = data;
      }
    }

    setInputData(prevDataCopy);
  }

  function removeDeletedSectionsData(sectionNumber, title) {
    const prevDataCopy = { ...inputData };
    const propToDelete = `${title}-${sectionNumber}`;

    delete prevDataCopy[title][propToDelete];

    setInputData(prevDataCopy);
  }

  function generatePdf() {}

  function loadExample() {
    const exampleInfo = { ...cvInfoExample };
    setInputData(exampleInfo)
  }

  function reset() {
    setInputData(cvInfo)
  }

  return (
    <div className='App'>
      <h1>CV CREATOR</h1>
      <div className='sections-body'>
        <h2>Personal Information</h2>
        <PersonalInfoSection
          updateCvInfo={updateCvInfo}
          autocomplete={inputData.personalInfo}
        />
        <h2>Experience</h2>
        <ExperienceSections
          updateCvInfo={updateCvInfo}
          removeDeletedSectionsData={removeDeletedSectionsData}
          autocomplete={inputData.experience}
        />
        <h2>Education</h2>
        <EducationSections
          updateCvInfo={updateCvInfo}
          removeDeletedSectionsData={removeDeletedSectionsData}
          autocomplete={inputData.education}
        />
        <button className='pdf-button' onClick={generatePdf}>
          Generate PDF
        </button>
        <button className='example-button' onClick={loadExample}>
          Load Example
        </button>
        <button className='reset-button' onClick={reset}>
          Reset
        </button>
      </div>
      {/* <Cv userInput={inputData} /> */}
    </div>
  );
}

export default App;
