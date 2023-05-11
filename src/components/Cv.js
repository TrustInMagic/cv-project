import CvExpSection from './CvExpSection';
import CvEduSection from './CvEduSection';

function Cv({ userInput }) {
  const {
    firstName,
    lastName,
    title,
    photo,
    address,
    phoneNumber,
    email,
    description,
  } = userInput.personalInfo;

  const experienceSections = [];
  const educationSections = [];

  for (let key in userInput.experience) {
    experienceSections.push(userInput.experience[key]);
  }
  for (let key in userInput.education) {
    educationSections.push(userInput.education[key]);
  }

  return (
    <div className='cv'>
      <div className='header'>
        <h1>
          {firstName} {lastName}
        </h1>
        <h2>{title}</h2>
      </div>
      <div className='body'>
        <div className='main-area'>
          <h3>Description</h3>
          <div className='description'>{description}</div>
          <h3>Experience</h3>
          <div className='experience'>
            {experienceSections.map((section) => (
              <CvExpSection section={section} key={section.section} />
            ))}
          </div>
          <h3>Education</h3>
          <div className='education'>
            {educationSections.map((section) => (
              <CvEduSection section={section} key={section.section} />
            ))}
          </div>
        </div>
        <div className='personal'></div>
      </div>
    </div>
  );
}

export default Cv;
