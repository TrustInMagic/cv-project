function CvExpSection({section}) {
  return (
    <div className='experience-section'>
      <div className='years'>
        {section.from} {section.to ? '-' : null} {section.to}
      </div>
      <div className='details'>
        <div className='position'>{section.position}</div>
        <div className='company'>
          {section.company}{section.city ? ',' : null} {section.city}
        </div>
      </div>
    </div>
  );
}

export default CvExpSection