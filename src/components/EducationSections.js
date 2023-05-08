import Section from './Section';
import { handleInputData } from '../utils';
import React from 'react';

function EducationSections({ updateCvInfo }) {
  const education = {};

  const [sections, setSections] = React.useState([1]);
  const [inputData, setInputData] = React.useState(education);

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
  }

  React.useEffect(() => updateCvInfo({ section: 'education', ...inputData }));

  return (
    <div className=''>
      {sections.map((number) => {
        return (
          <Section
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
          />
        );
      })}
      <button onClick={addSection}>Add Section</button>
    </div>
  );
}

export default EducationSections;
