function Section({ title, inputFields, unique, handleChange }) {
  function buildInputs(field) {
    if (field === 'Photo') {
      return (
        <input
          key={field}
          type='file'
          accept='image/jpeg, image/png, image/jpg'
          onChange={handleChange}
        />
      );
    } else {
      return (
        <input
          key={field}
          placeholder={field}
          onChange={handleChange}
          className={`${title} input`}
        />
      );
    }
  }

  function addButtons() {
    return (
      <>
        <button>Delete</button>
        <button>Add</button>
      </>
    );
  }

  return (
    <>
      <div className='name'>{title}</div>
      <div className='field-container'>
        {inputFields && inputFields.map((field) => buildInputs(field))}
      </div>
      <div className='buttons'>{!unique ? addButtons() : null}</div>
    </>
  );
}

export default Section;
