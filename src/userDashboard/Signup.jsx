// Login.js
import React from 'react';
//import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
//import Button from '@mui/material/Button';
//import { TextField } from '@mui/material';
import './Signup.css'; 
//import {useNavigate } from "react-router-dom";
const Register = () => {
    //const navigate = useNavigate();
    var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
const programs = ["Introduction Programme", "Diploma Programme", "Degree in Web"];
const categories = ["Working Professional", "University Student", "High School Student","FreeLancer","Graduate","Tech Lover","Other"];
const activationDates = ["April 2024", "May 2024", "June 2024","July 2024","August 2024","September 2024","October 2024","November 2024","December 2024"];

    const [formData, setFormData] = React.useState({
      country: '',
      password: '',
      email: '',
      firstName: '',
      middleName: '',
      lastName: '',
      contact: '',
      program: '',
      category: '',
      activationDate: ''
    });
    const courses = [
      { name: 'Introduction Programme', yearlyPrice: '13.99$', monthlyPrice: '-' },
      { name: 'Diploma in Web 3 Technology', yearlyPrice: '90.99$', monthlyPrice: '7.99$' },
      { name: 'Degree in Web 3 Technology', monthlyPrice: '99$', yearlyPrice: '999$', oneTimePrice: '1499$' }
    ];
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log(formData);
    }
    const [referralCode, setReferralCode] = React.useState('');
    const [selectedCourses, setSelectedCourses] = React.useState([]);
    const handleEnrollment = (courseName, priceType, price) => {
      setSelectedCourses([...selectedCourses,{courseName,priceType,price}]);
    }
    const handleReferralCodeChange = (e) => {
      setReferralCode(e.target.value);
    }
    return (
      <div className='registerContainer'>
      <div className="registration-form">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Select Country:</label>
            <select name="country" value={formData.country} onChange={handleChange}>
              <option value="">Select Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </div>
  
          <div className="form-group">
            <label>Set Your Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
  
          <div className="form-group">
            <label>Email ID:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
  
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </div>
  
          <div className="form-group">
            <label>Middle Name:</label>
            <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
          </div>
  
          <div className="form-group">
            <label>Last Name:</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </div>
  
          <div className="form-group">
            <label>Contact:</label>
            <input type="tel" name="contact" value={formData.contact} onChange={handleChange} />
          </div>
  
          <div className="form-group">
            <label>Select Programme:</label>
            <select name="program" value={formData.program} onChange={handleChange}>
              <option value="">Select Programme</option>
              {programs.map((program, index) => (
                <option key={index} value={program}>{program}</option>
              ))}
            </select>
          </div>
  
          <div className="form-group">
            <label>Candidate Category Type:</label>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="">Candidate Category Type</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
  
          <div className="form-group">
            <label>Select Date of Activation:</label>
            <select name="activationDate" value={formData.activationDate} onChange={handleChange}>
              <option value="">Select Date of Activation</option>
              {activationDates.map((date, index) => (
                <option key={index} value={date}>{date}</option>
              ))}
            </select>
          </div>
  
          
        </form>
        <div className="enrollment-section">
        <table className="course-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Yearly</th>
              <th>Monthly</th>
              <th>One Time Payment</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td>
                  <button   onClick={() => handleEnrollment(course.name, 'Yearly', course.yearlyPrice)}>{course.yearlyPrice}</button>
                </td>
                <td>
                  <button  onClick={() => handleEnrollment(course.name, 'Monthly', course.monthlyPrice)}>{course.monthlyPrice}</button>
                </td>
                <td>
                  <button  onClick={() => handleEnrollment(course.name, 'One Time', course.oneTimePrice)}>{course.oneTimePrice}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="referral-code">
          <label>Referral Code [If Any]:</label>
          <input type="text" value={referralCode} onChange={handleReferralCodeChange} />
        </div>
      </div>
      <div className="form-group">
            <button type="submit">Register</button>
          </div>
        </div>
      </div>
    );
}

export default Register;