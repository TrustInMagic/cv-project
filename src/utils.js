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

function handleInputData(event, state, setState) {
  const inputSectionClass = parseInputToValidVariableName(
    event.target.className
  );
  const inputSubSection = parseInputToValidVariableName(
    event.target.placeholder
  );
  const inputField = event.target;
  const sectionNumber = inputField.getAttribute('data-number');

  const input = event.target.value;
  let stateCopy = { ...state };
  const subSection = inputSubSection;

  if (inputSectionClass.includes('personal')) {
    stateCopy[subSection] = input;
    stateCopy.section = `personal`;
  } else if (inputSectionClass.includes('experience')) {
    const sectionId = `experience-${sectionNumber}`;
    stateCopy[sectionId] = stateCopy[sectionId] ? stateCopy[sectionId] : {};
    stateCopy[`experience-${sectionNumber}`][subSection] = input;
    stateCopy[`experience-${sectionNumber}`].section = `experience-${sectionNumber}`
  } else if (inputSectionClass.includes('education')) {
    const sectionId = `education-${sectionNumber}`;
    stateCopy[sectionId] = stateCopy[sectionId] ? stateCopy[sectionId] : {};
    stateCopy[`education-${sectionNumber}`][subSection] = input;
    stateCopy[`education-${sectionNumber}`].section = `education-${sectionNumber}`
  }

  setState(stateCopy);
}

export { parseInputToValidVariableName, handleInputData };
