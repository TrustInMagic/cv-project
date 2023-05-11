function CvEduSection({ section }) {
  return (
    <div className='education-section'>
      <div className='years'>
        {section.from} {section.to ? '-' : null} {section.to}
      </div>
      <div className='details'>
        <div className='university'>
          {section.universityName}{section.city ? ', ' : null} {section.city}
        </div>
        <div className='degree'>
          {section.degree ? 'Degree: ' : null} {section.degree}
        </div>
        <div className='subject'>
          {section.subject ? 'Subject: ' : null} {section.subject}
        </div>
      </div>
    </div>
  );
}

export default CvEduSection;
