import CvExpSection from './CvExpSection';
import CvEduSection from './CvEduSection';
import '../styles/Cv.css';

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
      <div className='cv-header'>
        <h1>
          {firstName} {lastName}
        </h1>
        <h2>{title}</h2>
      </div>
      <div className='body'>
        <div className='main-area'>
          <div className='description-container'>
            <h3>Description</h3>
            <div className='description'>{description}</div>
          </div>
          <div className='experience-container'>
            <h3>Experience</h3>
            <div className='experience'>
              {experienceSections.map((section) => (
                <CvExpSection section={section} key={section.section} />
              ))}
            </div>
          </div>
          <div className='education-container'>
            <h3>Education</h3>
            <div className='education'>
              {educationSections.map((section) => (
                <CvEduSection section={section} key={section.section} />
              ))}
            </div>
          </div>
        </div>
        <div className='personal'>
          <img src={photo ?? './assets/person.png'} alt='' />
          <h3>Personal Details</h3>
          <div className='details'>
            <div className='personal-container'>
              <div className='bold'>Address</div>
              <div>{address}</div>
            </div>
            <div className='personal-container'>
              <div className='bold'>Phone Number</div>
              <div>{phoneNumber}</div>
            </div>
            <div className='personal-container'>
              <div className='bold'>Email</div>
              <div>{email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cv;
