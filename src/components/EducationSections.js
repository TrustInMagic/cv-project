import Section from './Section';
import { handleInputData } from '../utils';
import React from 'react';
import { v4 as uuid } from 'uuid';
import { autocompleteLoadExampleInputs } from '../utils';

function EducationSections({
  updateCvInfo,
  removeDeletedSectionsData,
  resetFlag,
  setResetFlag,
  loadExampleFlag,
  setLoadExampleFlag,
}) {
  
  const title = 'education';
  const [sections, setSections] = React.useState([uuid()]);
  const [inputData, setInputData] = React.useState({});

  function addSection() {
    const nextEl = uuid();
    const sectionsCopy = [...sections];
    sectionsCopy.push(nextEl);
    setSections(sectionsCopy);
  }

  function deleteSection(event) {
    const sectionToRemove = event.target.getAttribute('data-number');
    const indexToRemove = sections.indexOf(sectionToRemove);
    const sectionsCopy = [...sections];
    sectionsCopy.splice(indexToRemove, 1);
    setSections(sectionsCopy);
    // remove input data from App component
    removeDeletedSectionsData(sectionToRemove, title);
    // remove data from EducationSections component
    const inputDataCopy = { ...inputData };
    delete inputDataCopy[`${title}-${sectionToRemove}`];

    setInputData(inputDataCopy);
  }

  React.useEffect(() => updateCvInfo(inputData), [inputData]);
  // resetting the fields if reset button is pressed
  React.useEffect(() => {
    if (resetFlag) {
      setSections([uuid()]);
      setResetFlag(false);
      setInputData({});
    }
  }, [resetFlag]);
  // in case Load Example button is pressed, load the example CV
  React.useEffect(() => {
    if (loadExampleFlag) {
      setSections([1, 2, 3]);
      setLoadExampleFlag(false)
    }
  }, [loadExampleFlag]);

  return (
    <div className='education-sections'>
      {sections.map((number) => {
        const autocomplete = autocompleteLoadExampleInputs(title, number);
        return (
          <Section
            className={`section-${number}`}
            key={number}
            number={number}
            title='Education'
            handleInputData={(e) => handleInputData(e, inputData, setInputData)}
            inputFields={[
              'University name',
              'City',
              'Degree',
              'Subject',
              'From',
              'To',
            ]}
            deleteSection={deleteSection}
            autocomplete={autocomplete}
          />
        );
      })}
      <button onClick={addSection}>Add Section</button>
    </div>
  );
}

export default EducationSections;
