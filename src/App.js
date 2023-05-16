import React from 'react';
import Cv from './components/Cv';
import ExperienceSections from './components/ExperienceSections';
import PersonalInfoSection from './components/PersonalInfoSection';
import EducationSections from './components/EducationSections';
import cvInfoExample from './example';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import './styles/App.css';

function App() {
  const cvInfo = {
    personalInfo: {},
    experience: {},
    education: {},
  };

  const [inputData, setInputData] = React.useState(cvInfo);

  function updateCvInfo(data) {
    const prevDataCopy = { ...inputData };

    for (let key in data) {
      if (key.includes('experience')) {
        prevDataCopy.experience[key] = data[key];
      } else if (key.includes('education')) {
        prevDataCopy.education[key] = data[key];
      } else if (data.section === 'personal') {
        prevDataCopy.personalInfo = data;
      }
    }

    setInputData(prevDataCopy);
  }

  function removeDeletedSectionsData(sectionNumber, title) {
    const prevDataCopy = { ...inputData };
    const propToDelete = `${title}-${sectionNumber}`;

    delete prevDataCopy[title][propToDelete];
    delete prevDataCopy[title][sectionNumber];

    setInputData(prevDataCopy);
  }

  async function generatePdf() {
    const download = document.querySelector('.cv')
    const cvPdf = new jsPDF('1', 'pt');

    await html2canvas(download, {
      allowTaint: true,
      useCORS: true,
    }).then((canvas) => {
      cvPdf.addImage(canvas.toDataURL("image/png"), 'PNG', 5, 5)
    })

    cvPdf.save("Cv.pdf")
  }

  function loadExample() {
    const exampleInfo = { ...cvInfoExample };
    setInputData(exampleInfo);
  }

  function reset() {
    setInputData(cvInfo);
  }

  return (
    <div className='App'>
      <div className='header'>
        <h1>CV CREATOR</h1>
      </div>
      <div className="content">
        <div className='sections-body'>
          <div className='section'>
            <h2>Personal Information</h2>
            <PersonalInfoSection
              updateCvInfo={updateCvInfo}
              autocomplete={inputData.personalInfo}
            />
          </div>
          <div className='section'>
            <h2>Experience</h2>
            <ExperienceSections
              updateCvInfo={updateCvInfo}
              removeDeletedSectionsData={removeDeletedSectionsData}
              autocomplete={inputData.experience}
            />
          </div>
          <div className='section'>
            <h2>Education</h2>
            <EducationSections
              updateCvInfo={updateCvInfo}
              removeDeletedSectionsData={removeDeletedSectionsData}
              autocomplete={inputData.education}
            />
          </div>
          <div className='special-buttons'>
            <button className='pdf-button special' onClick={generatePdf}>
              Generate PDF
            </button>
            <button className='example-button special' onClick={loadExample}>
              Load Example
            </button>
            <button className='reset-button special' onClick={reset}>
              Reset
            </button>
          </div>
        </div>
        <Cv userInput={inputData} />
      </div>
    </div>
  );
}

export default App;
