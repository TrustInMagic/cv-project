function Section({ title, inputFields, unique, handleInputData }) {
  function buildInputs(field) {
    if (field === 'Photo') {
      return (
        <div className='photo-input-container' key={field}>
          <label htmlFor='photo-input'>Add Photo</label>
          <input
            type='file'
            accept='image/jpeg, image/png, image/jpg'
            onChange={handleInputData}
            // style={{ display: 'none' }}
            id='photo-input'
            placeholder='photo'
          />
        </div>
      );
    } else {
      return (
        <input
          key={field}
          placeholder={field}
          onChange={handleInputData}
          className={`${title} input`}
        />
      );
    }
  }

  function addButtons(title) {
    return (
      <>
        <button
          className={`${title.toLowerCase()}-delete`}>
          Delete
        </button>
      </>
    );
  }

  return (
    <>
      <div className='name'>{title}</div>
      <div className='field-container'>
        {inputFields && inputFields.map((field) => buildInputs(field))}
      </div>
      <div className='buttons'>{!unique ? addButtons(title) : null}</div>
    </>
  );
}

export default Section;
