import React from 'react';
import Section from './components/Section';
import Cv from './components/Cv';

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

  function parseInputToValidVariableName(input) {
    const lowerCase = input.toLowerCase();
    const arrFromString = [...lowerCase];

    for (let i = 0; i < arrFromString.length; i++) {
      if (arrFromString[i] === ' ') {
        arrFromString[i + 1] = arrFromString[i + 1].toUpperCase();
        arrFromString.splice(i, 1);
      }
    }

    const validName = arrFromString.join('');
    return validName;
  }

  return (
    <div className='App'>
      <div className='title'>CV CREATOR</div>
      <div className='sections-body'>
        <Section
          title='Personal Information'
          unique={true}
          handleChange={handleInputData}
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
          handleChange={handleInputData}
          inputFields={['Position', 'Company', 'City', 'From', 'To']}
        />
        <Section
          title='Education'
          handleChange={handleInputData}
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
