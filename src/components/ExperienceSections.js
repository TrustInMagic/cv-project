import Section from './Section';
import React from 'react';
import { handleInputData } from '../utils';

function ExperienceSections({ updateCvInfo, removeDeletedSectionsData }) {
  const experience = {};
  const title = 'experience'

  const [sections, setSections] = React.useState([1]);
  const [inputData, setInputData] = React.useState(experience);

  function addSection() {
    const nextEl = sections.length + 1;
    const sectionsCopy = [...sections];
    sectionsCopy.push(nextEl);
    setSections(sectionsCopy);
  }

  function deleteSection(event) {
    const sectionToRemove = event.target.getAttribute('data-number');
    const indexToRemove = sections.indexOf(Number(sectionToRemove));
    const sectionsCopy = [...sections];
    sectionsCopy.splice(indexToRemove, 1);
    setSections(sectionsCopy);
    // remove input data from App component
    removeDeletedSectionsData(sectionToRemove, title)
  }

  React.useEffect(() => updateCvInfo(inputData), [inputData, sections]);

  return (
    <div className=''>
      {sections.map((number) => {
        return (
          <Section
            key={number}
            number={number}
            title='Experience'
            handleInputData={(e) => handleInputData(e, inputData, setInputData)}
            inputFields={['Position', 'Company', 'City', 'From', 'To']}
            deleteSection={deleteSection}
          />
        );
      })}
      <button onClick={addSection}>Add Section</button>
    </div>
  );
}

export default ExperienceSections;
