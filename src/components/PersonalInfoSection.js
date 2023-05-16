import Section from './Section';
import { handleInputData } from '../utils';
import React from 'react';

function PersonalInfoSection({ updateCvInfo, autocomplete }) {
  const [inputData, setInputData] = React.useState({});

  React.useEffect(() => updateCvInfo(inputData), [inputData]);

  React.useEffect(() => {
    if (Object.keys(autocomplete).length === 0) {
      setInputData({});
    } else if (Object.keys(autocomplete).length > 0) {
      setInputData(autocomplete)
    }
  }, [autocomplete]);

  return (
    <Section
      title='Personal'
      unique={true}
      handleInputData={(e) => handleInputData(e, inputData, setInputData)}
      autocomplete={autocomplete}
      inputFields={[
        'First name',
        'Last name',
        'Title',
        'Address',
        'Phone number',
        'Email',
        'Description',
        'Photo'
      ]}
    />
  );
}

export default PersonalInfoSection;
