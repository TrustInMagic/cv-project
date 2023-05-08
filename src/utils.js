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

export default parseInputToValidVariableName