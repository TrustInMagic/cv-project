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
  const subSection = parseInputToValidVariableName(event.target.placeholder);
  const inputField = event.target;
  const sectionNumber = inputField.getAttribute('data-number');

  const input = event.target.value;
  let stateCopy = { ...state };

  // parsing the input data in the desired format
  if (inputSectionClass.includes('personal')) {
    stateCopy[subSection] = input;
    stateCopy.section = `personal`;
  } else if (inputSectionClass.includes('experience')) {
    const sectionId = sectionNumber.includes('experience')
      ? sectionNumber
      : `experience-${sectionNumber}`;
    stateCopy[sectionId] = stateCopy[sectionId] ? stateCopy[sectionId] : {};
    stateCopy[sectionId][subSection] = input;
    stateCopy[sectionId].section = sectionId;
  } else if (inputSectionClass.includes('education')) {
    const sectionId = sectionNumber.includes('education')
      ? sectionNumber
      : `education-${sectionNumber}`;
    stateCopy[sectionId] = stateCopy[sectionId] ? stateCopy[sectionId] : {};
    stateCopy[sectionId][subSection] = input;
    stateCopy[sectionId].section = sectionId;
  }

  setState(stateCopy);
}

export { parseInputToValidVariableName, handleInputData };
