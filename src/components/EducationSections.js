import Section from './Section';
import { handleInputData } from '../utils';
import React from 'react';
import { v4 as uuid } from 'uuid';

function EducationSections({
  updateCvInfo,
  removeDeletedSectionsData,
  autocomplete,
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

  React.useEffect(() => {
    if (Object.keys(autocomplete).length === 0) {
      setSections([uuid()]);
      setInputData({})
    } else if (Object.keys(autocomplete).length > 0) {
      setSections([...Object.keys(autocomplete)]);
      setInputData(autocomplete)
    }
  }, [autocomplete]);

  return (
    <div className='education-sections'>
      {sections.map((number) => {
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
