import Section from './Section';
import React from 'react';
import { handleInputData } from '../utils';
import { v4 as uuid } from 'uuid';
import { autocompleteLoadExampleInputs } from '../utils';

function ExperienceSections({
  updateCvInfo,
  removeDeletedSectionsData,
  resetFlag,
  setResetFlag,
  loadExampleFlag,
  setLoadExampleFlag
}) {
  
  const title = 'experience';
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
    // remove data from App component
    removeDeletedSectionsData(sectionToRemove, title);
    // remove data from ExperienceSections component
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
      setSections([1, 2, 3, 4]);
      setLoadExampleFlag(false)
    }
  }, [loadExampleFlag]);

  return (
    <div className='experience-sections'>
      {sections.map((number) => {
        const autocomplete = autocompleteLoadExampleInputs(title, number);
        return (
          <Section
            className={`section-${number}`}
            key={number}
            number={number}
            title='Experience'
            handleInputData={(e) => handleInputData(e, inputData, setInputData)}
            inputFields={['Position', 'Company', 'City', 'From', 'To']}
            deleteSection={deleteSection}
            autocomplete={autocomplete}
          />
        );
      })}
      <button onClick={addSection}>Add Section</button>
    </div>
  );
}

export default ExperienceSections;
