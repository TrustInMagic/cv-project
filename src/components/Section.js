import { parseInputToValidVariableName } from '../utils';

function Section(props) {
  const {
    title,
    inputFields,
    unique,
    handleInputData,
    deleteSection,
    number,
    autocomplete,
  } = props;

  function autocompletePersonal(field) {
    const autocompleteField = parseInputToValidVariableName(field);
    return autocomplete[autocompleteField] ?? '';
  }

  function autocompleteComplex(field, number) {
    const autocompleteField = parseInputToValidVariableName(field);
    return autocomplete[number]?.[autocompleteField]
  }

  function buildInputs(field) {
    if (field === 'Photo') {
      return (
        <div className='photo-input-container' key={field}>
          <label htmlFor='photo-input'>Add Photo</label>
          <input
            type='file'
            accept='image/jpeg, image/png, image/jpg'
            onInput={handleInputData}
            // style={{ display: 'none' }}
            id='photo-input'
            placeholder='photo'
            data-number={number}
          />
        </div>
      );
    } else {
      return (
        <input
          key={field}
          placeholder={field}
          onInput={handleInputData}
          className={`${title} input`}
          data-number={number}
          defaultValue={
            title === 'Personal'
              ? autocompletePersonal(field)
              : autocompleteComplex(field, number)
          }
        />
      );
    }
  }

  function addButtons(title) {
    return (
      <button
        className={`${title.toLowerCase()}-delete`}
        onClick={deleteSection}
        data-number={number}
      >
        Delete
      </button>
    );
  }

  return (
    <div className={title.toLowerCase()}>
      <div className='field-container'>
        {inputFields && inputFields.map((field) => buildInputs(field))}
      </div>
      <div className='buttons'>{!unique ? addButtons(title) : null}</div>
    </div>
  );
}

export default Section;
