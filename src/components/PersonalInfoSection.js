import Section from './Section';
import { handleInputData } from '../utils';
import React from 'react';

function PersonalInfoSection({ updateCvInfo, autocomplete }) {
  const [inputData, setInputData] = React.useState({});

  React.useEffect(() => updateCvInfo(inputData), [inputData]);

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
        'Photo',
        'Address',
        'Phone number',
        'Email',
        'Description',
      ]}
    />
  );
}

export default PersonalInfoSection;
