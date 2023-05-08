// import Section from './Section';
// import React from 'react';
// import parseInputToValidVariableName from '../utils';

// function InputSections({}) {
//   const [sections, setSections] = React.useState(1);

//   const cvInfo = {
//     personalInfo: {},
//     experience: {},
//     education: {},
//   };

//   const [inputData, setInputData] = React.useState(cvInfo);

//   function handleInputData(event) {
//     const inputSectionClass = parseInputToValidVariableName(
//       event.target.className
//     );
//     const inputSubSection = parseInputToValidVariableName(
//       event.target.placeholder
//     );

//     const input = event.target.value;
//     const cvInfoCopy = { ...inputData };
//     const subSection = inputSubSection;

//     if (inputSectionClass.includes('personal')) {
//       cvInfoCopy.personalInfo[subSection] = input;
//     } else if (inputSectionClass.includes('experience')) {
//       cvInfoCopy.experience[subSection] = input;
//     } else if (inputSectionClass.includes('education')) {
//       cvInfoCopy.education[subSection] = input;
//     }

//     setInputData(cvInfoCopy);
//   }

//   function buildSections() {
//     return (
//       <Section
//         title='Experience'
//         handleInputData={handleInputData}
//         inputFields={['Position', 'Company', 'City', 'From', 'To']}
//       />
//     );
//   }

//   return (
//     <div className=''>
//       <Section />
//     </div>
//   );
// }

// export default InputSections;
