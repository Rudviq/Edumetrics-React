import React from 'react';
// import './styles_admin.css'; // Import your SCSS file
// import styles from './QA.module.scss';
import styled from 'styled-components';

// Create a styled component
const Container = styled.div`
/* Balaram Krishna Dammavalam 1002113672

Nirmala Dinesh Gowda 1002028286

Omkar Ele 1002120514

Rudviq Bhavsar 1002091441

Saisanjay bandarupalli 1002091531 */



* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  margin:0;
  padding:0;  
}

/* Style the top navigation bar */
.topnav {
  /* overflow: hidden; */
  display: flex;
  background: linear-gradient(to bottom,  #42adff,#0064b1);
  /* background-color: #333; */
  justify-content: space-between; 
  /* height:70px;  */
  position: -webkit-sticky;  
  position: sticky;
  top: 0; 
}

  
/* Change color on hover */
.topnav a:hover {
  color: black;
}

/* Style the topnav links */
/* .topnav a { */
  /* float: left;ss */
  /* display: block; */
  /* color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  max-height: 100px;
} */

.logo-container{
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.logo {
  height: 70px;
  display: block;
  float: left;
  margin-left: 15px;
  margin-right: 10px; 
  
}


.site-name {
  color: #f2f2f2;
  font-size: 25px; /* Adjust font size as needed */
  align-items: center;
  line-height: 50px;
}

/* Style the burger icon */
.burger-icon {
  font-size: 20px;
  color: #f2f2f2;
  text-decoration: none;
  cursor: pointer;
  width: 50px;
  display: inline-block;
  text-align: center;
  line-height: 70px;
  margin-right: 15px;
}

/* Change color on hover for the burger icon */
.dropdown:hover .dropdown-content {
display: block;
}

.dropdown-content {
display: none;
position: absolute;
background-color: #f9f9f9;
min-width: 160px;
right: 0;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1;
}

.dropdown-content a {
color: black;
padding: 12px 16px;
text-decoration: none;
display: block;
line-height: 25px;
text-align: left;
}


.dropdown-content img{
height:25px;
/* padding: 12px 16px; */
line-height: 25px;
margin-right: 15px;
}

.dropdown {
display: inline-block;
align-items: center;
}

.dropdown:hover{
background-color: #ddd;
}

.dropdown-content a:hover {background-color: #0091ff;}


/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 33.33%;
  padding: 10px;
  height: 500px; /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the footer */
.footer {
  /* background-color: #f1f1f1; */

  padding: 10px;
  text-align: center;
  bottom: 0;
  display:flex;
  flex-wrap: wrap;
  background: #0064b1; /* Light gray or off-white color */
  color: #f5f5f5; /* Text color for contrast */
  justify-content: space-around;
  position: relative;

}

.uta_logo{
  float: left;
  display: block;
  left: 0;
  /* max-width: 200px; */
  height:auto;
}

.uni_info{
  flex-grow: 1;
  margin-left: 20px;
  margin-top: auto;
  margin-bottom: auto;
  padding: 0;
  float: left;
  text-align: left;
  
}

.uni_info p, h3{ padding: 0; margin: 0;}

.contact-us {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: flex-end space-evenly;
  bottom: 0;
}

.contact-us img{
  max-height: 30px;
  margin-right: 20px; 
  justify-content: space-evely;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .topnav .dropdown, 
  .topnav div ,.topnav .logo-container {float:none;}

  .topnav {
    display: flex; /* Reset display property */
    flex-direction: column; /* Change direction to column */
    align-items: center; /* Center content horizontally */
    margin-left: 0;
    width: 100%;
  }

  /* Move the burger button below the logo container */
  .burger-icon {
      display: block;
      margin: 10px auto; /* Adjust margin as needed for vertical alignment */
      line-height: normal; /* Reset line-height to default */
  }

  .dropdown-content{
    width: 100%;
    align-items: center;
    text-align: center;
  }

  .dropdown-content a{
    text-align: center;
  } 

  /* .footer {
    flex-direction: column; 
    align-items: flex-start; 
  }

  .contact-us {
      display: flex; 
      align-items: center;
      justify-content: flex-start; 
  }

  .uni_info, .contact-us {
    width: 100%; 
    order: 2; 
  }  */

  /* Style the footer */

  .footer {
    position: absolute;
    padding: 10px;
    text-align: center;
    bottom: 0;
    display: flex;
    background: #0064b1;
    width: 100%;
    color: #f5f5f5;
    flex-wrap: wrap; /* Wrap content to the next line if needed */
    justify-content: space-between; /* Space between items */
  }

  .uta_logo {
    flex: 1; /* Takes 1/3 of the available space */
    order: 1; /* Display first on the left */
    max-width: 100%;
    height: auto;
  }

  .uni_info {
    flex: 1; /* Takes 1/3 of the available space */
    text-align: left;
    padding-left: 20px;
    order: 2; /* Display second on the right */
  }

  .uni_info h4 {
    margin: 0;
    font-size: 16px;
  }

  .uni_info p {
    margin: 5px 0;
  }

  .contact-us {
    flex: 1; /* Takes 1/3 of the available space */
    align-items: center;
    justify-content: space-evenly;
    order: 3; /* Display third on the right */
  }

  .contact-us img {
    max-height: 20px;
    margin-right: 10px;
  }

}
 /* Chat window styles */
 .chat {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.chat label {
  background-color: orange;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px; /* Reduced height */
  width: 50px; /* Reduced width */
  font-size: 18px; /* Reduced font size */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;

}

.chat label .fas {
  display: none;
}

.chat label .fab {
  display: block;
}

.chat input[type="checkbox"] {
  display: none;
}

.chat .wrapper {
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  right: 70px;
  bottom: 80px;
  overflow: hidden;
  transform: scaleY(0);
  transition: transform 0.3s ease;
  width: 300px;
}

.chat input[type="checkbox"]:checked ~ .wrapper {
  transform: scaleY(1);
}

.chat .head-text {
  background-color: orange;
  color: #fff;
  padding: 12px;
  font-weight: bold;
}

.chat .chat-box {
  padding: 20px;
}

.chat .field {
  margin-bottom: 10px;
}   

.chat .field input[type="text"],
.chat .field input[type="email"],
.chat .field textarea {
  width: 80%;
  padding: 6px;
  margin-left: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.chat .field textarea {
  resize: none;
}

.chat .field button {
  background-color: green;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-left: 20px;
  font-size: 14px;
  cursor: pointer;
}


/* admin dashboard styles */

/* Basic styles for the admin dashboard */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-wrap: wrap;
}

.sidebar {
  /* color: #fff; */
  width: 250px;
  padding: 20px;
}

.content {
  flex: 1;
  padding: 20px;
}

.menu-item {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.menu-item i {
  margin-right: 10px; /* Spacing between icon and text */
}


/* Additional styles for components (you can customize further) */
.component {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  margin: 10px;
  margin-bottom: 30px;
  display: none; /* Hide all components by default */
}
/* Student Management Component Styles */
#student-management {
background-color: #f8f8f8;
padding: 20px;
border-radius: 5px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
margin: 20px;
}

/* Course Selection Styles */
.course-selection {
margin-bottom: 20px;
}

label {
font-weight: bold;
}

select {
padding: 5px;
border: 1px solid #ccc;
border-radius: 3px;
}

/* Student List Styles */
.student-list {
background-color: #fff;
border: 1px solid #ccc;
border-radius: 5px;
padding: 20px;
margin-bottom: 20px;
}

.students-table {
width: 100%;
border-collapse: collapse;
}

.students-table th, .students-table td {
padding: 10px;
text-align: left;
border-bottom: 1px solid #ddd;
}

.students-table th {
background-color: #333;
color: #fff;
}

.action-button {
background-color: #007BFF;
color: #fff;
border: none;
padding: 5px 10px;
margin-right: 5px;
cursor: pointer;
border-radius: 3px;
}

.action-button:hover {
background-color: #0056b3;
}

/* Student Details Styles */
.student-details {
background-color: #fff;
border: 1px solid #ccc;
border-radius: 5px;
padding: 20px;
margin-bottom: 20px;
}

.student-info {
padding: 10px;
}

/* Actions Styles */
.actions {
margin-top: 20px;
}
.sidebar-icons {
height: 35px;
width: 35px;
/* margin: 10px; */
}
.edit-profile {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
}

.edit-profile h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.form-group button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

/* user activity  */

#user-activity {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
}

#user-activity h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.user-list {
  margin-bottom: 20px;
}

.activity-log {
  margin-bottom: 20px;
}

/* Style for the toggle button */
.toggle-sidebar-button {
  background-color: transparent;
  border: none;
  color: #f2f2f2;
  font-size: 24px;
  cursor: pointer;
  padding: 0 16px;
  display: none; /* Initially hidden for screens wider than 600px */
}

@media screen and (min-width: 601px) {
  .sidebar {
    display: list-item;
  }
}

/* Display the button for screens 600px or less */
@media screen and (max-width: 600px) {

  /* Add this CSS for responsive table */
.courses-table {
  max-width: 100%;
  border-collapse: collapse;
  overflow-x: auto; /* Enable horizontal scrolling */
}

.courses-table th, .courses-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  white-space: nowrap; /* Prevent text wrapping */
}

/* Adjust table header to be sticky on top */
.courses-table thead {
  position: sticky;
  top: 0;
  background-color: #333;
  color: #fff;
}

  
.container {
  max-width: 100%;
      flex-direction: column; /* Stack container elements vertically */
  }

  
.toggle-sidebar-button:hover {
  color: black;
 
}

  .toggle-sidebar-button {
      display: block;
  }

  .sidebar{
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    display: none;
    margin-bottom: 20px;
  }

.toggle-sidebar-button {
  background-color: transparent;
  border: none;
  color: #f2f2f2;
  font-size: 24px;
  cursor: pointer;
  padding: 0 16px;
  display: block; /* Initially visible for screens 600px or less */
}

/* When the toggle button is clicked, show the sidebar as a dropdown */
.toggle-sidebar-button.active + .container .sidebar {
  width: 250px;
}

.toggle-sidebar-button.active {
  transform: translateX(250px);
  transition: transform 0.5s;
}

.content {
  margin-bottom: 100px;
  padding-bottom: 20px; /* Add padding to create space for the footer */
  overflow: auto; /* Add overflow to make content scrollable if necessary */
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
#student-management table {
  max-width: 100%; /* Make the table take up the full width of the screen */
  overflow-x:auto; /* Add horizontal scrolling for smaller screens */

}

/* Optionally, you can reduce the font size for table cells on smaller screens */
#student-management th,
#student-management td {
  font-size: 12px;
}


  .uta_logo {
    flex: 1; /* Takes 1/3 of the available space */
    order: 1; /* Display first on the left */
    max-width: 100%;
    height: auto;
  }

  .uni_info {
    flex: 1; /* Takes 1/3 of the available space */
    text-align: left;
    padding-left: 20px;
    order: 2; /* Display second on the right */
  }

  .uni_info h4 {
    margin: 0;
    font-size: 16px;
  }

  .uni_info p {
    margin: 5px 0;
  }

  .contact-us {
    flex: 1; /* Takes 1/3 of the available space */
    align-items: center;
    justify-content: space-evenly;
    order: 3; /* Display third on the right */
  }

  .contact-us img {
    max-height: 20px;
    margin-right: 10px;
  }

}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
.sidebar {
  /* color: #fff; */
  width: 250px;
  padding: 20px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  // display: none;
  margin-bottom: 20px;
}

.content {
  flex: 1;
  padding: 20px;
}

.menu-item {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.menu-item i {
  margin-right: 10px; /* Spacing between icon and text */
}


.component {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  margin: 10px;
  display: none; /* Hide all components by default */
}

.program-objective {
background-color: #f8f8f8;
padding: 20px;
border-radius: 5px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
margin: 20px;
}
.report-generation {
background-color: #f8f8f8;
padding: 20px;
border-radius: 5px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
margin: 20px;
}
.course-selection {
margin-bottom: 20px;
}

label {
font-weight: bold;
}

select {
padding: 5px;
border: 1px solid #ccc;
border-radius: 3px;
}

.course-list {
background-color: #fff;
border: 1px solid #ccc;
border-radius: 5px;
padding: 20px;
margin-bottom: 20px;
}

.courses-table {
width: 100%;
border-collapse: collapse;
}

.courses-table th, .courses-table td {
padding: 10px;
text-align: left;
border-bottom: 1px solid #ddd;
}

.courses-table th {
background-color: #333;
color: #fff;
}

.action-button {
background-color: #007BFF;
color: #fff;
border: none;
padding: 5px 10px;
margin-right: 5px;
cursor: pointer;
border-radius: 3px;
}

.action-button:hover {
background-color: #0056b3;
}

/* Course Details Styles */
.courses-details {
background-color: #fff;
border: 1px solid #ccc;
border-radius: 5px;
padding: 20px;
margin-bottom: 20px;
}

.course-info {
padding: 10px;
}

/* Actions Styles */
.actions {
margin-top: 20px;
}
.sidebar-icons {
height: 35px;
width: 35px;
/* margin: 10px; */
}
.edit-profile {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
}

.edit-profile h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.form-group button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}


`;


function QualityAssuranceOfficerDashboard() {
  // Define a function to show components
  const showComponent = (componentId) => {  
    const components = document.querySelectorAll('.component');
    components.forEach((component) => {
      component.style.display = 'none';
    });

    const selectedComponent = document.getElementById(componentId);
    selectedComponent.style.display = 'block';
  };

  return (
    <Container>
    <div >
      <div className="topnav">
        <button className="toggle-sidebar-button">&#9776;</button>
        <div className="logo-container">
          <img src="images/logo.png" className="logo" alt="Logo" />
          <span className="site-name">Edumetrics</span>
        </div>
        <div className="dropdown">
          <a href="#" className="burger-icon">
            &#9776;
          </a>
          <div className="dropdown-content">
            <a href="/qa">
              <img src="icons/icons8-home-50.png" alt="Home" />
              Home
            </a>
            <a href="/services">
              <img src="icons/icons8-services-50.png" alt="Services" />
              Services
            </a>
            <a href="/contact_us">
              <img src="icons/icons8-contact-us-50.png" alt="Contact Us" />
              Contact Us
            </a>
            <a href="/aboutus">
              <img src="icons/icons8-about-us-50.png" alt="About Us" />
              About Us
            </a>
            <a href="https://bxd3672.uta.cloud/wordpress_blog/">
              <img src="icons/blog.png" />
              Our Blog
            </a>
            <a href="#">
              <img src="icons/user.png" alt="Profile" />
              Profile
            </a>
            <a href="/login">
              <img src="icons/exit.png" alt="Log Out" />
              Log Out
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="sidebar">
          <div className="menu-item" onClick={() => showComponent('program-objective')}>
            <img src="icons/icons8-manager-66.png" className="sidebar-icons" alt="Program Objective" />
            Program Objective
          </div>
          <div className="menu-item" onClick={() => showComponent('recommendation')}>
            <img src="icons/icons8-training-50.png" className="sidebar-icons" alt="Recommendation" />
            Recommendation
          </div>
          <div className="menu-item" onClick={() => showComponent('report-generation')}>
            <img src="icons/icons8-quality-control-64.png" className="sidebar-icons" alt="Report Generation" />
            Report Generation
          </div>
        </div>

        <div className="content">
          <h1>Quality Assurance Officer Dashboard</h1>

          <div className="component" id="program-objective">
            <h2>Program Objective</h2>

            <div className="course-selection">
              <label htmlFor="course-dropdown">Department:</label>
              <select id="course-dropdown">
                <option value="course-1">Computer Science</option>
                <option value="course-2">Electronics</option>
              </select>
            </div>

            <div className="course-list">
              <h3>Course List</h3>
              <table className="courses-table">
                <thead>
                  <tr>
                    <th>Course ID</th>
                    <th>Course Name</th>
                    <th>Instructor</th>
                    <th>Status(Completed/Inprogress)</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>12783</td>
                    <td>Real Time Embedded Systems</td>
                    <td>George Bush</td>
                    <td>70%</td>
                    <td>
                      <button className="action-button" >
                        View Reviews
                      </button>
                      <button className="action-button" >
                        Give Feedback
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>26432</td>
                    <td>Web Analytics</td>
                    <td>Bret Lee</td>
                    <td>84%</td>
                    <td>
                      <button className="action-button" >
                        View Reviews
                      </button>
                      <button className="action-button" >
                        Give Feedback
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="courses-details">
              <h3>Course Details</h3>

              <div className="course-info">
                <h4>Course ID: 12783</h4>
                <p>
                  <strong>Course Name:</strong>Real Time Embedded Systems
                </p>
                <p>
                  <strong>Instructor:</strong>George Bush
                </p>
                <p>
                  <strong>Status:</strong> 70%
                </p>
              </div>
            </div>
          </div>

          <div className="component" id="recommendation">
            <h2>Recommendation</h2>
            <form>
              <div className="form-group">
                <label htmlFor="course">Select Course:</label>
                <select id="course" name="course">
                  <option value="Course A">Course A</option>
                  <option value="Course B">Course B</option>
                  <option value="Course C">Course C</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="course">About</label>
                <select id="course" name="course">
                  <option value="Course A">Teaching Method</option>
                  <option value="Course B">Assessment</option>
                  <option value="Course C">Program Effectiveness</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="details">Details:</label>
                <input type="text" id="details" name="details" placeholder="Enter Details" />
              </div>
              <div className="form-group">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>

          <div className="component" id="report-generation">
            <h2>Report Generation</h2>

            <div className="course-selection">
              <label htmlFor="course-dropdown">Options:</label>
              <select id="course-dropdown" >
                <option value="dropdown-1">Departments</option>
                <option value="dropdown-2">Courses</option>
                <option value="dropdown-3">Students</option>
                <option value="dropdown-4">Instructors</option>
              </select>
            </div>

            <div className="course-list">
              <h3>Department List</h3>
              <table className="courses-table">
                <thead>
                  <tr>
                    <th>Department ID</th>
                    <th>Department Name</th>
                    <th>Program Coordinator</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>45678</td>
                    <td>Computer Science</td>
                    <td>David Lee</td>
                    <td>Stevens Hall</td>
                  </tr>
                  <tr>
                    <td>45556</td>
                    <td>Electronics</td>
                    <td>Falguni Pathak</td>
                    <td>Bishops Gate</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="course-list">
              <h3>Course List</h3>
              <table className="courses-table">
                <thead>
                  <tr>
                    <th>Course ID</th>
                    <th>Course Name</th>
                    <th>Department ID</th>
                    <th>Instructor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1234</td>
                    <td>Web Analytics</td>
                    <td>36767</td>
                    <td>Bret Lee</td>
                  </tr>
                  <tr>
                    <td>3456</td>
                    <td>Power Electronics</td>
                    <td>45678</td>
                    <td>Ankur Saxena</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="course-list">
              <h3>Student List</h3>
              <table className="courses-table">
                <thead>
                  <tr>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Department ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>6789909</td>
                    <td>Robert Johnson</td>
                    <td>robertjohnson@company.com</td>
                    <td>(262) 162-1585</td>
                    <td>46735</td>
                  </tr>
                  <tr>
                    <td>7890909</td>
                    <td>Kelly Hayes</td>
                    <td>kellyhayes@company.com</td>
                    <td>(717) 550-1675</td>
                    <td>47889</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="course-list">
              <h3>Instructor List</h3>
              <table className="courses-table">
                <thead>
                  <tr>
                    <th>Instructor ID</th>
                    <th>Instructor Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Department ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>19010</td>
                    <td>Dylan Bob</td>
                    <td>dylanbob@company.com</td>
                    <td>(626) 182-1455</td>
                    <td>4796</td>
                  </tr>
                  <tr>
                    <td>29313</td>
                    <td>Kelly Hayes</td>
                    <td>kellyhayes@company.com</td>
                    <td>(217) 560-1973</td>
                    <td>4509</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="form-group">
              <button type="submit">Report to Excel</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="uta-logo-container">
          <img src="images/uta_logo.png" alt="UTA" className="uta_logo" />
        </div>
        <div className="footer-content">
          <div className="uni_info">
            <h4>THE UNIVERSITY OF TEXAS AT ARLINGTON</h4>
            <p>701 S Nedderman Dr,</p>
            <p>Arlington, TX 76019</p>
            <p>817-090-xxxx</p>
            <p>Privacy Statement | Contact</p>
            <p>@2023 University of Texas at Arlington</p>
          </div>
          <div className="contact-us">
            <img src="images/footer/facebook-app-symbol.png" alt="facebook" />
            <img src="images/footer/email.png" alt="mail" />
            <img src="images/footer/linkedin.png" alt="linkedin" />
            <img src="images/footer/twitter (1).png" alt="twitter" />
            <img src="images/footer/instagram.png" alt="instagram" />
          </div>
        </div>
      </div>

      <div className="chat">
        <input type="checkbox" id="click" />
        <label htmlFor="click">Chat</label>
        <i className="fab fa-facebook-messenger"></i>
        <i className="fas fa-times"></i>
        <div className="wrapper">
          <div className="head-text">Chat</div>
          <div className="chat-box">
            <div className="desc-text">Please fill out the form below to start chatting.</div>
            <div className="field">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="field">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="field textarea">
              <textarea cols="30" rows="10" placeholder="Explain your queries.." required></textarea>
            </div>
            <div className="field">
              <button type="submit">Start Chat</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
}

export default QualityAssuranceOfficerDashboard;
