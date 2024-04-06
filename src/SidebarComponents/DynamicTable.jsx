import React from 'react';
import BasicRating from './BasicRating';

const DynamicTable = ({ serviceType, course }) => {
  // Define data based on the selected service type and course
  const tableData = {
    Introduction: {
      IntroductionCourse1: {
        typeOfService: 'Introduction Programme - Course 1',
        date: '12/07/2023',
        time: '03:00 pm to 04:00 pm',
        session: 'Session 1',
        trainingPlatform: 'Zoom Meeting',
        filesDownload: '1GB File Space',
        accessToCourse: 'Get Access to Your Course',
        certificate: 'Certificate',
      },
      IntroductionCourse2: {
        typeOfService: 'Introduction Programme - Course 2',
        date: '12/08/2023',
        time: '04:00 pm to 05:00 pm',
        session: 'Session 2',
        trainingPlatform: 'Zoom Meeting',
        filesDownload: '1GB File Space',
        accessToCourse: 'Get Access to Your Course',
        certificate: 'Certificate',
      },
      // Add more courses as needed
    },
    Diploma: {
      DiplomaCourse1: {
        typeOfService: 'Diploma Programme - Course 1',
        date: '12/09/2023',
        time: '05:00 pm to 06:00 pm',
        session: 'Session 3',
        trainingPlatform: 'Zoom Meeting',
        filesDownload: '1GB File Space',
        accessToCourse: 'Get Access to Your Course',
        certificate: 'Certificate',
      },
      DiplomaCourse2: {
        typeOfService: 'Diploma Programme - Course 2',
        date: '12/10/2023',
        time: '06:00 pm to 07:00 pm',
        session: 'Session 4',
        trainingPlatform: 'Zoom Meeting',
        filesDownload: '1GB File Space',
        accessToCourse: 'Get Access to Your Course',
        certificate: 'Certificate',
      },
      // Add more courses as needed
    },
    Degree: {
      DegreeCourse1: {
        typeOfService: 'Degree Programme - Course 1',
        date: '12/11/2023',
        time: '07:00 pm to 08:00 pm',
        session: 'Session 5',
        trainingPlatform: 'Zoom Meeting',
        filesDownload: '1GB File Space',
        accessToCourse: 'Get Access to Your Course',
        certificate: 'Certificate',
      },
      DegreeCourse2: {
        typeOfService: 'Degree Programme - Course 2',
        date: '12/12/2023',
        time: '08:00 pm to 09:00 pm',
        session: 'Session 6',
        trainingPlatform: 'Zoom Meeting',
        filesDownload: '1GB File Space',
        accessToCourse: 'Get Access to Your Course',
        certificate: 'Certificate',
      },
      // Add more courses as needed
    },
  };

  const data = tableData[serviceType]?.[course] || {};

  return (
    <div className="table-container">
      <table className="history-table">
        <tbody>
          <tr>
            <td>Type of Service:</td>
            <td>{data.typeOfService}</td>
          </tr>
          <tr>
            <td>Date:</td>
            <td>{data.date}</td>
          </tr>
          <tr>
            <td>Time:</td>
            <td>{data.time}</td>
          </tr>
          <tr>
            <td>Session:</td>
            <td>{data.session}</td>
          </tr>
          <tr>
            <td>Training Platform:</td>
            <td>{data.trainingPlatform}</td>
          </tr>
          <tr>
            <td>Files Download:</td>
            <td>{data.filesDownload}</td>
          </tr>
          <tr>
            <td>Access to Course:</td>
            <td>{data.accessToCourse}</td>
          </tr>
          <tr>
            <td>Certificate:</td>
            <td>{data.certificate}</td>
          </tr>
          <tr>
            <td>Rating</td>
            <td><BasicRating /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
