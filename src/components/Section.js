import { parseInputToValidVariableName } from '../utils';
import React from 'react';

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

  const fileInputRef = React.useRef(null);

  function buildInputs(field) {
    if (field === 'Photo') {
      return (
        <div className='photo-input-container' key={field}>
          <button onClick={() => fileInputRef.current.click()}>
            Add Photo
          </button>
          <input
            type='file'
            accept='image/jpeg, image/png, image/jpg'
            onInput={handleInputData}
            style={{ display: 'none' }}
            id='photo-input'
            className={`${title} input`}
            placeholder='photo'
            data-number={number}
            ref={fileInputRef}
          />
        </div>
      );
    } else if (field === 'Description') {
      return (
        <textarea
          rows='4'
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
        className={`${title.toLowerCase()}-delete delete`}
        onClick={deleteSection}
        data-number={number}
      >
        Delete
      </button>
    );
  }

  return (
    <div className={`${title.toLowerCase()}`}>
      {inputFields && inputFields.map((field) => buildInputs(field))}
      <div className='buttons'>{!unique ? addButtons(title) : null}</div>
    </div>
  );
}

export default Section;
