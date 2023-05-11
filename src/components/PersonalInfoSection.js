import Section from './Section';
import { handleInputData } from '../utils';
import React from 'react';
import { autocompleteLoadExampleInputs } from '../utils';

function PersonalInfoSection({
  updateCvInfo,
  resetFlag, 
  setResetFlag,
  loadExampleFlag,
  setLoadExampleFlag,
}) {
  const title = 'personal';
  const [inputData, setInputData] = React.useState({});
  const [autocomplete, setAutocomplete] = React.useState(false);

  React.useEffect(() => updateCvInfo(inputData), [inputData]);
  // resetting the fields if reset button is pressed
  React.useEffect(() => {
    if (resetFlag) {
      setAutocomplete(false)
      setResetFlag(false);
    }
  }, [resetFlag]);
  // in case Load Example button is pressed, load the example CV
  React.useEffect(() => {
    if (loadExampleFlag) {
      setAutocomplete(autocompleteLoadExampleInputs(title))
      setLoadExampleFlag(false);
    }
  }, [loadExampleFlag]);

  return (
    <Section
      title='Personal Information'
      unique={true}
      handleInputData={(e) => handleInputData(e, inputData, setInputData)}
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
      autocomplete={autocomplete}
    />
  );
}

export default PersonalInfoSection;
