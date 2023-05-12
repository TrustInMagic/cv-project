const cvInfoExample = {
  personalInfo: { firstName: 'Bob', lastName: 'Marley', title: 'Jmeker' },
  experience: {
    1: { position: 'CEO', company: 'Invictus', city: 'Ohio', from: 1992 },
    2: { position: 'Arlechin', company: 'Invictus', city: 'Mishigan' },
    3: { position: 'Arlechin', company: 'Invictus', city: 'Mishiganer' },
  },
  education: {
    1: { universityName: 'cacat', from: 2000 },
  },
};

function buildAutocompleteInputs(field, autocomplete) {
  if (autocomplete) {
    switch (field) {
      case 'Position':
        return autocomplete.position;
      case 'Company':
        return autocomplete.company;
      case 'City':
        return autocomplete.city;
      case 'From':
        return autocomplete.from;
      case 'To':
        return autocomplete.to;
      case 'University name':
        return autocomplete.universityName;
      case 'Subject':
        return autocomplete.subject;
      case 'Degree':
        return autocomplete.degree;
      case 'First name':
        return autocomplete.firstName;
      case 'Last name':
        return autocomplete.lastName;
      case 'Title':
        return autocomplete.title;
      case 'Description':
        return autocomplete.description;
      case 'Address':
        return autocomplete.address;
      case 'Phone number':
        return autocomplete.phoneNumber;
      case 'Email':
        return autocomplete.email;
      default:
        return;
    }
  }
}

export default cvInfoExample;
export { buildAutocompleteInputs };
