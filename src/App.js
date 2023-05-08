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
    console.log(data)
  }

  return (
    <div className='App'>
      <div className='title'>CV CREATOR</div>
      <div className='sections-body'>
        <PersonalInfoSection updateCvInfo={updateCvInfo} />
        <ExperienceSections updateCvInfo={updateCvInfo} />
        <EducationSections updateCvInfo={updateCvInfo} />
      </div>
      <Cv userInput={inputData} />
    </div>
  );
}

export default App;
