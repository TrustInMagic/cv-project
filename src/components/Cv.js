function Cv({ userInput }) {
  const {
    firstName,
    lastName,
    title,
    address,
    phoneNumber,
    email,
    description,
  } = userInput.personalInfo;
  const {
    position,
    company,
    city: cityExp,
    from: fromExp,
    to: toExp,
  } = userInput.experience;
  const {
    universityName,
    city: cityEdu,
    degree,
    subject,
    fromEdu,
    toEdu,
  } = userInput.education;


  return (
    <div className='cv'>
      <div className='header'>
        <div className='name'></div>
        <div className='title'></div>
      </div>
      <div className='body'>
        <div className='details'>
          <div className='section'>Description</div>
          <div className='section'>Experience</div>
          <div className='section'>Education</div>
        </div>
        <div className='personal-details'>
          <img src={''} alt='You'></img>
          <div className='section'>Personal Details</div>
        </div>
      </div>
    </div>
  );
}

export default Cv;
