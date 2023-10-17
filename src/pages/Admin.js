import React, { useState } from 'react';
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


`;

function AdminDashboard() {
//   const [selectedComponent, setSelectedComponent] = useState('student-management');

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
    <div className="admin-dashboard">
      <div className="topnav">
        <button className="toggle-sidebar-button" >&#9776;</button>
        <div className="logo-container">
          <img src="images/logo.png" className="logo" alt="Logo" />
          <span className="site-name">Edumetrics</span>
        </div>
        <div className="dropdown">
        <a href="#" className="burger-icon">
          &#9776;
        </a>
        <div className="dropdown-content">
          <a href="/home">
            <img src="icons/icons8-home-50.png" /> Home
          </a>
          <a href="/services">
            <img src="icons/icons8-services-50.png" /> Services
          </a>
          <a href="/contact_us">
            <img src="icons/icons8-contact-us-50.png" /> Contact Us
          </a>
          <a href="/aboutus">
            <img src="icons/icons8-about-us-50.png" /> About Us
          </a>
          <a href="https://bxd3672.uta.cloud/wordpress_blog/">
            <img src="icons/blog.png" />
            Our Blog
          </a>
          <a href="/login">
            <img src="icons/exit.png" /> Log Out
          </a>
        </div>
      </div>
      </div>

      <div className="container">
        <div className="sidebar">
            <div className="menu-item" onClick={() => showComponent('student-management')}>
            <img src="icons/icons8-student-50.png" className="sidebar-icons" alt="Student Management" />
            Student Management
        </div>

        <div className="menu-item" onClick={() => showComponent('instructor-management')}>
            <img src="icons/icons8-training-50.png" className="sidebar-icons" alt="Instructor Management" />
            Instructor Management
        </div>

        <div className="menu-item" onClick={() => showComponent('qao-management')}>
            <img src="icons/icons8-quality-control-64.png" className="sidebar-icons" alt="QAO Management" />
            QAO Management
        </div>

        <div className="menu-item" onClick={() => showComponent('program-coordinator-management')}>
            <img src="icons/icons8-manager-66.png" className="sidebar-icons" alt="Program Coordinator Management" />
            Program Coordinator Management
        </div>

        <div className="menu-item" onClick={() => showComponent('course-management')}>
            <img src="icons/icons8-book-50.png" className="sidebar-icons" alt="Course Management" />
            Course Management
        </div>

        <div className="menu-item" onClick={() => showComponent('system-health')}>
            <img src="icons/icons8-system-50.png" className="sidebar-icons" alt="System Health" />
            System Health
        </div>

        <div className="menu-item" onClick={() => showComponent('dashboards')}>
            <img src="icons/icons8-dashboards-32.png" className="sidebar-icons" alt="Dashboards" />
            Dashboards
        </div>

        <div className="menu-item" onClick={() => showComponent('user-activity')}>
            <img src="icons/user.png" className="sidebar-icons" alt="User Activity" />
            User Activity
        </div>

        <div className="menu-item" onClick={() => showComponent('security-audit')}>
            <img src="icons/icons8-audit-50.png" className="sidebar-icons" alt="Security and Audit" />
            Security and Audit
        </div>

        <div className="menu-item" onClick={() => showComponent('permission-management')}>
            <img src="icons/icons8-user-rights-50.png" className="sidebar-icons" alt="Permission Management" />
            Permission Management
        </div>

        <div className="menu-item" onClick={() => showComponent('edit-profile')}>
            <img src="icons/icons8-test-account-50.png" className="sidebar-icons" alt="Edit Profile" />
            Edit Profile
        </div>
        </div>

        <div className="content">
          <h1>Welcome to admin dashboard!!!</h1>

          {/* Render the selected component */}
         
            <div className="component" id="student-management">
                <h2>Student Management</h2>

                {/* Student List */}
                <div className="course-selection">
                <label for="course-dropdown">Select a Course:</label>
                <select id="course-dropdown" >
                    <option value="course-1">Course 1</option>
                    <option value="course-2">Course 2</option>
                    <option value="course-3">Course 3</option> {/* Add more courses here */}
                    <option value="course-4">Course 4</option>
                </select>
                </div>

                {/* Student List */}
                <div className="student-list">
                <h3>Student List</h3>
                <table className="students-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Performance</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* Sample Student Data (You would load real data from a database) */}
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>johndoe@example.com</td>
                        <td>85%</td>
                        <td>
                        <button className="action-button" >
                            View Performance
                        </button>
                        <button className="action-button" >
                            Remove
                        </button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>janesmith@example.com</td>
                        <td>92%</td>
                        <td>
                        <button className="action-button" >
                            View Performance
                        </button>
                        <button className="action-button" >
                            Remove
                        </button>
                        </td>
                    </tr>
                    {/* Add more student rows as needed */}
                    </tbody>
                </table>
                </div>

                {/* Student Details */}
                <div className="student-details">
                <h3>Student Details</h3>
                {/* Detailed Student Information Goes Here */}
                <div className="student-info">
                    <h4>Student ID: 1</h4>
                    <p>
                    <strong>Name:</strong> John Doe
                    </p>
                    <p>
                    <strong>Email:</strong> johndoe@example.com
                    </p>
                    <p>
                    <strong>Performance:</strong> 85%
                    </p>
                    {/* Add more details as needed */}
                </div>
                </div>

                {/* Actions */}
                <div className="actions">
                <h3>Actions</h3>
                <button className="action-button" >
                    Add Student
                </button>
                </div>
            </div>
        
            
              <div className="component" id="instructor-management">
                {/* Instructor Management component content here */}
                <form>
                    <div className="form-group">
                    <label htmlFor="instructorName">Instructor Name:</label>
                    <input type="text" id="instructorName" name="instructorName" placeholder="Enter instructor's name" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="course">Select Course:</label>
                    <select id="course" name="course">
                        <option value="Course A">Course A</option>
                        <option value="Course B">Course B</option>
                        <option value="Course C">Course C</option>
                    </select>
                    </div>
                    <div className="form-group">
                    <button type="submit">Add Instructor</button>
                    </div>
                </form>
              </div>

              <div className="component" id="qao-management">
                <h2>QAO Management</h2>
                <form id="manageQAOfficersForm">
                    <div className="form-group">
                    <label htmlFor="qaoName">QAO Name:</label>
                    <input type="text" id="qaoName" name="qaoName" placeholder="Enter QAO's name" />
                    </div>
                    <div className="form-group">
                    <button type="button" >Add QAO</button>
                    </div>
                </form>

                {/* View and Manage Reviews */}
                <form id="manageQAOForm">
                    <div className="form-group">
                    <label htmlFor="qaoName">QAO Name:</label>
                    <input type="text" id="qaoName" name="qaoName" placeholder="Enter QAO's name" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="course">Select Course:</label>
                    <select id="course" name="course">
                        <option value="Course A">Course A</option>
                        <option value="Course B">Course B</option>
                        <option value="Course C">Course C</option>
                    </select>
                    </div>
                    <div className="form-group">
                    <button type="submit" id="addQAOBtn">Add QAO</button>
                    </div>
                </form>

                {/* Manage QAO Reviews */}
                <form id="manageQAOReviewsForm">
                    <div className="form-group">
                    <label htmlFor="courseReview">Course Review by QAO:</label>
                    <textarea id="courseReview" name="courseReview" rows="4" placeholder="Enter course review"></textarea>
                    </div>
                    <div className="form-group">
                    <button type="submit" id="submitReviewBtn">Submit Review</button>
                    </div>
                </form>
                </div>

                <div className="component" id="program-coordinator-management">
                    <h2>Program Coordinator Management</h2>
                    <form>
                        <div className="form-group">
                        <label htmlFor="coordinatorName">Coordinator Name:</label>
                        <input type="text" id="coordinatorName" name="coordinatorName" placeholder="Enter coordinator's name" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="courses">Select Courses:</label>
                        <select id="courses" name="courses" multiple>
                            <option value="Course A">Course A</option>
                            <option value="Course B">Course B</option>
                            <option value="Course C">Course C</option>
                        </select>
                        </div>
                        <div className="form-group">
                        <label htmlFor="issues">Issues Raised:</label>
                        <textarea id="issues" name="issues" placeholder="Enter any issues raised by the coordinator"></textarea>
                        </div>
                        <div className="form-group">
                        <button type="submit">Add Coordinator</button>
                        </div>
                    </form>
                    </div>


                    <div className="component" id="course-management">
                        <h2>Course Management</h2>
                        <div className="course-info">
                            <h3>Course Information</h3>
                            <p>Course Name: Introduction to Computer Science</p>
                            <p>Course Code: CS101</p>
                            <p>Duration: 12 weeks</p>
                            {/* Add more course information as needed */}
                        </div>

                        {/* Program Objectives */}
                        <div className="course-objectives">
                            <h3>Program Objectives</h3>
                            <ul>
                            <li>Objective 1: Understand the basics of programming.</li>
                            <li>Objective 2: Learn data structures and algorithms.</li>
                            <li>Objective 3: Develop problem-solving skills.</li>
                            {/* Add more objectives as needed */}
                            </ul>
                        </div>

                        {/* QA Report */}
                        <div className="qa-report">
                            <h3>QA Report</h3>
                            <p>Quality Assurance Report for CS101: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            {/* Add QA report details as needed */}
                        </div>

                        {/* Program Coordinator Details */}
                        <div className="program-coordinator">
                            <h3>Program Coordinator Details</h3>
                            <p>Name: John Doe</p>
                            <p>Email: john.doe@example.com</p>
                            <p>Contact: 123-456-7890</p>
                            {/* Add more program coordinator details as needed */}
                        </div>
                        </div>

                        <div className="component" id="user-activity">
                            <h2>User Activity</h2>

                            {/* User List */}
                            <div className="user-list">
                                <h3>User List</h3>
                                <ul>
                                <li>User 1</li>
                                <li>User 2</li>
                                <li>User 3</li>
                                {/* Add more users as needed */}
                                </ul>
                            </div>

                            {/* CRUD Operations */}
                            <div className="crud-operations">
                                <h3>CRUD Operations</h3>
                                {/* Add form for Create, Update, Delete operations */}
                                <form>
                                <div className="form-group">
                                    <label htmlFor="username">Username:</label>
                                    <input type="text" id="username" name="username" placeholder="Enter username" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" name="email" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="role">Role:</label>
                                    <select id="role" name="role">
                                    <option value="Admin">Admin</option>
                                    <option value="User">User</option>
                                    <option value="Moderator">Moderator</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" id="password" name="password" placeholder="Enter password" />
                                </div>
                                <button type="button" id="create">Create</button>
                                <button type="button" id="update">Update</button>
                                <button type="button" id="delete">Delete</button>
                                </form>
                            </div>

                            {/* User Activity Log */}
                            <div className="activity-log">
                                <h3>User Activity Log</h3>
                                <ul>
                                <li>User 1 performed action X.</li>
                                <li>User 2 performed action Y.</li>
                                <li>User 3 performed action Z.</li>
                                {/* Add more activity log entries as needed */}
                                </ul>
                            </div>
                            </div>

                            <div className="component" id="system-health">
                                <h2>System Health</h2>

                                {/* System Status */}
                                <div className="system-status">
                                    <h3>System Status</h3>
                                    <p><strong>Server Status:</strong> Online</p>
                                    <p><strong>Database Connection:</strong> Stable</p>
                                </div>

                                {/* Metrics */}
                                <div className="metrics">
                                    <h3>Metrics</h3>
                                    <p><strong>Memory Usage:</strong> 65% used</p>
                                    <p><strong>CPU Load:</strong> 30%</p>
                                </div>
                                </div>

                                <div className="component" id="dashboards">
                                <h2>Dashboards</h2>

                                <form>
                                    <div className="form-group">
                                    <label htmlFor="role">Select a User Role:</label>
                                    <select id="role" name="role">
                                        <option value="Student">Student</option>
                                        <option value="Instructor">Instructor</option>
                                        <option value="Program Coordinator">Program Coordinator</option>
                                        <option value="Quality Assurance Officer">Quality Assurance Officer</option>
                                    </select>
                                    </div>
                                    <div className="form-group">
                                    <button type="button" >Open Dashboard</button>
                                    </div>
                                </form>
                                </div>

                <div className="component" id="security-audit">
                    <h2>Security and Audit</h2>

                    {/* Audit Logs */}
                    <div className="audit-logs">
                        <h3>Audit Logs</h3>
                        <ul>
                        <li>User ID: 1 - John Doe accessed the student management module.</li>
                        <li>User ID: 2 - Jane Smith updated course information.</li>
                        <li>User ID: 3 - Alice Johnson viewed system health reports.</li>
                        {/* Add more audit logs as needed */}
                        </ul>
                    </div>

                    {/* Security Alerts */}
                    <div className="security-alerts">
                        <h3>Security Alerts</h3>
                        <p><strong>Recent Alert:</strong> Unauthorized access attempt detected.</p>
                        <p><strong>Firewall Status:</strong> Active</p>
                    </div>
                    </div>

                    <div className="component" id="edit-profile">
                    <h2>Edit Profile</h2>

                    {/* Add your content for Edit Profile here */}
                    <form>
                        <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" placeholder="Enter your username" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="gender">Gender:</label>
                        <select id="gender" name="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        </div>
                        <div className="form-group">
                        <label htmlFor="dob">Date of Birth:</label>
                        <input type="date" id="dob" name="dob" />
                        </div>
                        <div className="form-group">
                        <button type="submit">Save Changes</button>
                        </div>
                    </form>
                    </div>


            <div className="component" id="permission-management">
                <h2>Permission Management</h2>

                {/* Add your content for Permission Management here */}
                <form>
                    <div className="form-group">
                    <label htmlFor="role">Select a User Role:</label>
                    <select id="role" name="role">
                        <option value="Student">Student</option>
                        <option value="Instructor">Instructor</option>
                        <option value="Program Coordinator">Program Coordinator</option>
                        <option value="Quality Assurance Officer">Quality Assurance Officer</option>
                    </select>
                    </div>
                    <div className="form-group">
                    <label>Permissions:</label><br />
                    <input type="checkbox" id="viewPermission" name="viewPermission" /> <label htmlFor="viewPermission">View</label><br />
                    <input type="checkbox" id="editPermission" name="editPermission" /> <label htmlFor="editPermission">Edit</label><br />
                    <input type="checkbox" id="deletePermission" name="deletePermission" /> <label htmlFor="deletePermission">Delete</label><br />
                    </div>
                    <div className="form-group">
                    <button type="submit">Save Permissions</button>
                    </div>
                </form>
                </div>


          {/* Add other components similarly */}
        </div>
      </div>

      <div className="footer">
        <img src="images/uta_logo.png" alt="UTA" className="uta_logo" />
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
    </Container>
  );
}

export default AdminDashboard;
