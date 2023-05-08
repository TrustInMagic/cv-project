import React from 'react';
import Section from './components/Section';
import Cv from './components/Cv';
import parseInputToValidVariableName from './utils';

function App() {
  const cvInfo = {
    personalInfo: {},
    experience: {},
    education: {},
  };

  const [inputData, setInputData] = React.useState(cvInfo);

  function handleInputData(event) {
    const inputSectionClass = parseInputToValidVariableName(
      event.target.className
    );
    const inputSubSection = parseInputToValidVariableName(
      event.target.placeholder
    );

    const input = event.target.value;
    const cvInfoCopy = { ...inputData };
    const subSection = inputSubSection;

    if (inputSectionClass.includes('personal')) {
      cvInfoCopy.personalInfo[subSection] = input;
    } else if (inputSectionClass.includes('experience')) {
      cvInfoCopy.experience[subSection] = input;
    } else if (inputSectionClass.includes('education')) {
      cvInfoCopy.education[subSection] = input;
    }

    setInputData(cvInfoCopy);
  }


  return (
    <div className='App'>
      <div className='title'>CV CREATOR</div>
      <div className='sections-body'>
        <Section
          title='Personal Information'
          unique={true}
          handleInputData={handleInputData}
          inputFields={[
            'First name',
            'Last name',
            'Title',
            'Photo',
            'Address',
            'Phone number',
            'Email',
            'Description',
          ]}
        />
        <Section
          title='Experience'
          handleInputData={handleInputData}
          inputFields={['Position', 'Company', 'City', 'From', 'To']}
        />
        <Section
          title='Education'
          handleInputData={handleInputData}
          inputFields={[
            'University name',
            'City',
            'Degree',
            'Subject',
            'From',
            'To',
          ]}
        />
      </div>
      <Cv userInput={inputData} />
    </div>
  );
}

export default App;
