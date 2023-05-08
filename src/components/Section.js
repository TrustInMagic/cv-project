function Section(props) {
  const { title, inputFields, unique, handleInputData, deleteSection, number } =
    props;
  
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
            data-number={number}
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
          data-number={number}
        />
      );
    }
  }

  function addButtons(title) {
    return (
      <>
        <button
          className={`${title.toLowerCase()}-delete`}
          onClick={deleteSection}
          data-number={number}
        >
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
