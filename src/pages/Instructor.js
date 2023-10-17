import React, { useState } from 'react';
import styled from 'styled-components';
import MySidenav from './MySideNav';

// Create a styled component
const Container = styled.div`

* {
    box-sizing: border-box;
  }
  
  body {
    /* font-family: Arial, Helvetica, sans-serif;
     */
    font-family: 'Roboto', sans-serif;
    margin:0;
    padding:0;  
  }
  
  /* Style the top navigation bar */
.topnav {
    /* overflow: hidden; */
    display: flex;
     background: linear-gradient(to bottom, #42adff, #0064b1);
    /* background-color: #333; */
    justify-content: space-between; 
    /* height:70px;  */
    position: -webkit-sticky;  
    position: sticky;
    top: 0; 
    z-index: 1;
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



/* Style the upcoming exams and assignments section */
.upcoming {
  background-color: #f9f9f9;
  padding: 10px 20px; /* Reduced padding */
  border-radius: 10px;
  /* margin: 20px ; */
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  align-items: center;
  /* max-width: 1000px; Adjust the width as needed */
  width: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  /* justify-content: center; */
}

.upcoming h2 {
  font-size: 24px;
  margin-bottom: 10px; /* Reduced margin */
}

.upcoming-item {
  display: flex; /* Use flexbox for layout */
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  align-items: center; /* Center vertically */
}

.upcoming-item .left {
  flex: 1; /* Occupy left side */
}

.upcoming-item .right {
  flex: 1; /* Occupy right side */
  text-align: right; /* Align text to the right */
}

.upcoming-item h3 {
  font-size: 18px;
  margin: 0;
  margin-bottom: 10px; /* Add margin between titles */
}

.upcoming-item p {
  margin: 5px 0;
}

.upcoming-schedule{
  width: 60%;
  justify-content: center;
  margin: auto;
}

.ue,.ua{
  margin: 120px auto;
}



  /* Create three equal columns that floats next to each other */
  /* .column {
    float: left;
    width: 33.33%;
    padding: 10px;
    height: 500px; 
  } */
  
  /* Clear floats after the columns */
  /* .row:after {
    content: "";
    display: table;
    clear: both;
  } */


  /* ========================================================================================== */

  .grades{
    display: flex;
    flex-direction: row;
    margin:  30px 10%;
    /* justify-content: space-evenly center; */
  }

  .grades > div{
    flex:1;
    width: auto;
    /* margin: 10%; */
    flex-grow: 1;
    text-align: center;
    /* margin:; */
  }

  .grades > div> img{
    height: 200px;
    width: auto;
  }
  .container{
    /* display:; */
    /* padding-top: 200px; */
    height: auto;
    /* background-color: #94aee1; */
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    /* height: auto; */
  }
  
  #sem{
    margin-left: 10%;
    margin-top: 50px;
    line-height: 30px;
    height: 35px;
    border:#020365;
    border-style: solid;
    width: 15%;

  }
  .courses{
    display: flex;
    margin:  30px 10%;
    /* border-radius: 50px; */
  }

  .courses > div{
    flex:1;
    /* justify-content: space-evenly; */
    height: auto;
    background-color: #b6cbf6;
    /* background-color: #f1f1f1; */
    width: auto;
    margin: 10px;
    text-align: center;   
    /* line-height: 75px; */
    font-size: 27px;
    border-color: #020365;
    border-width: 2px;
    border-radius: 20px;
    border-style: double;
    /* padding: 10px; */
    padding-top: 2%;
    flex-grow: 1;
  }

  .courses > div > h5,h6{
    margin:0;
    padding:0;
  }

  .buttons{
    margin-top: 35px;
    margin-bottom: 20px ;
    display:flex;
    justify-content: space-evenly;
    
  }

  button{
    background-color: #0064b1;
    height: 40px;
    /* width: 100px; */
    border: #020365;
    border-style: solid;
    color:white;
    border-radius: 10px;
  }

  button:hover {
    background-color: #0091ff;
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

  /* ----------------------------------------------- */
/* Initially hide the chat container */
#chatContainer {
  display: none;
  /* Add your chat-container styles here */
}

#closeChatButton{
  background-color: none;
}
/* Style the chat toggle button */
#toggleChatButton {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999; /* Ensure the button is above other elements */
  background-color: #42adff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

#toggleChatButton:hover {
  background-color: #0091ff;
}


/* Style the chat container */
.chat-container {
  max-width: 400px;
//   display: none;
  margin: 20px auto;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: fixed; /* Position the chatbot interface */
    bottom: 20px; /* Distance from the bottom of the viewport */
    right: 20px; /* Distance from the right of the viewport */
}

/* Style the chat messages */
.chat {
  padding: 10px;
}

.chat-message {
  margin: 5px 10px;
  padding: 10px;
  border-radius: 10px;
  max-width: 70%;
  word-wrap: break-word;
}

.bot {
  background-color: #42adff;
  color: #fff;
  align-self: flex-start;
}

.user {
  background-color: #e2e2e2;
  color: #000;
  align-self: flex-end;
}

/* Style the user input area */
.user-input {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid #ccc;
}

input[type="text"] {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
}

#sendMessage {
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #42adff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#sendMessage:hover {
  background-color: #0091ff;
}

.announce{
  display:flex;
  justify-content: center;
  margin: 120px auto;
}

.announce > select{
  height:30px;
  margin-right: 30px;
}

.announce > textarea{
  width:1000px;
}

.u{
  display: flex;
  justify-content: space-evenly;
  margin-left: 30px;
  /* width: 300px; */
  /* margin: 120px auto; */
}

.upload{
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  background-color: #42adff;
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: center;
}

.exams{
  margin-left: 20px;
  margin: 10px;
  background-color: white;
  height:40px;
  line-height: 40px;
  font-size: 20px;
  border-radius: 5px;
  display: flex;
  /* justify-content: flex-end; */
}

.exams > h6{
  margin-right:80px;
  margin-left: 30px;
  
}
.exams > img{
  height: 25px;
  width:auto;
  line-height: 40px;
  margin: auto;
  margin-right: 5px;
}

.exams > img:hover{
  background-color: #707077;
  border-radius: 10px;
  color: white;
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
      padding: 10px;
      text-align: center;
      bottom: 0;
      display: flex;
      background: #0064b1;
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
    
      .announce {
        flex-direction: column; /* Stack elements vertically */
        align-items: center; /* Center elements horizontally */
        margin: 40px auto;
        margin-left: auto;
        margin-right: auto;
      }
    
      .announce select {
        width: 80%; /* Make the select element full width */
        margin:0; /* Remove right margin */
        margin-bottom: 20px; /* Add bottom margin for spacing */
      }
    
      .announce textarea {
        width: 80%; /* Make the textarea full width */
        max-width: 100%; /* Ensure it doesn't overflow its container */
      }
    

  }
  
  
.time-body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120vh;
}

.schedule {
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 20px;
    width: 80%;
    max-width: 600px;
}

.day {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
    color: #333;
}

.timeline {
    position: relative;
    margin-left: 60px;
    padding-left: 20px;
    border-left: 2px solid #333;
    z-index: 0;
}

.event {
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
    color: #333;
    margin-bottom: 10px;
    position: relative;
    z-index: 0;
}

/* Add some hover effect to events */
.event:hover {
    background-color: #e0e0e0;
}

.time {
    position: absolute;
    left: -80px;
    top: 0;
    font-size: 14px;
    color: #555;
    width: 40px;
    text-align: right;
}




@media screen and (max-width: 600px) {
.schedule {
    margin-top: 120px;
    	/* Adjust this value for smaller screens */
}

.event {
	z-index:0;
}
}
    



.container_prog {
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 20px;
    // width: 80%;
    // max-width: 600px;
    margin: 120px auto;
    text-align: center;
    display: flex;
    flex-direction: row; /* Display elements side by side */
    align-items: flex-start; /* Align items at the top */
    justify-content: space-between; /* Create space between elements */
    padding: 20px; /* Add padding for spacing */
}

h1 {
    margin-bottom: 20px;
}

label {
    font-weight: bold;
}

select {
    padding: 5px;
    margin: 10px 0;
}

.student-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

.student-table th, .student-table td {
    border: 1px solid #ddd;
    padding: 8px;
}

.student-table th {
    background-color: #f2f2f2;
}

.student-table tbody tr:nth-child(even) {
    background-color: #f2f2f2;
}

.student-table tbody tr:hover {
    background-color: #ddd;
}

.feedback-form {
    flex: 1; /* Grow to fill available space */
    min-width: 50%; /* Set a minimum width for the feedback form */
}

.feedback-form .modal-content {
    width: 100%; /* Adjust the width as needed */
}
#opennav{
    height: 100%;
    width: 25px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #0064b1;
    opacity:0.9;
    overflow-x: hidden;
    transition: 0.5s;
    color:white;
    padding-top: 60px;
}
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  background-color: #111;
  opacity: 0.9;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}



`;

const InstructorDashboard = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [chatbuttonVisible,setChatButtonVisible] = useState(true);
  const [timeVisible,setTimeVisible] = useState(true);
  const [announceVisible, setAnnounceVisible] = useState(false);
  const [uploadVisible, setUploadVisible] = useState(false);
  const [assignVisible, setAssignVisible] = useState(false);
  const [progressVisible, setProgressVisible] = useState(false);
  const [feedbackModalVisible, setFeedbackModalVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [feedbackText, setFeedbackText] = useState('');

  const openChat = () => {
    setChatVisible(true);
  };

  const closeChat = () => {
    setChatVisible(false);
    setChatButtonVisible(true);
  };

  const toggleChatContainer = () => {
    setChatVisible(!chatVisible);
    setChatButtonVisible(chatVisible);
    
  };
  
  const showAnnounceSection = () => {
    setTimeVisible(false);
    setAnnounceVisible(true);
    setUploadVisible(false);
    setAssignVisible(false);
    setProgressVisible(false);
  };

  const showUploadSection = () => {
    setTimeVisible(false);
    setAnnounceVisible(false);
    setUploadVisible(true);
    setAssignVisible(false);
    setProgressVisible(false);
  };

  const showAssignSection = () => {
    setTimeVisible(false);
    setAnnounceVisible(false);
    setUploadVisible(false);
    setAssignVisible(true);
    setProgressVisible(false);
  };

  const showProgressSection = () => {
    setTimeVisible(false);
    setAnnounceVisible(false);
    setUploadVisible(false);
    setAssignVisible(false);
    setProgressVisible(true);
  };

  const giveFeedback = (studentName) => {
    setSelectedStudent(studentName);
    setFeedbackModalVisible(true);
  };

  const closeFeedbackModal = () => {
    setFeedbackModalVisible(false);
  };

  const submitFeedback = () => {
    // Add your logic to submit feedback to the selected student here
    alert(`Feedback submitted for ${selectedStudent}:\n\n${feedbackText}`);
    setFeedbackModalVisible(false);
  };

  return (
    <Container>
    <div>
      <div className="topnav">
        <div className="logo-container">
          <img src="images/logo.png" className="logo" alt="Logo" />
          <span className="site-name">Edumetrics</span>
        </div>

        <div className="dropdown">
          <a href="#" className="burger-icon">
            &#9776;
          </a>
          <div className="dropdown-content">
            <a href="/instructorProf">
              <img src="icons/user.png" />Instructor Profile
            </a>
            <a href="instructor_dash.html">
              <img src="icons/user.png" />Courses
            </a>
            <a href="#">
              <img src="icons/test.png" />Grade Info
            </a>
            <a href="#">
              <img src="icons/scholarship.png" />Charges Due
            </a>
            <a href="https://bxd3672.uta.cloud/wordpress_blog/">
              <img src="icons/blog.png" />
              Our Blog
            </a>
            <a href="/login">
              <img src="icons/exit.png" />Log Out
            </a>
          </div>
        </div>
      </div>

      <MySidenav
        showAnnounceSection={showAnnounceSection}
        showUploadSection={showUploadSection}
        showProgressSection={showProgressSection}
        showAssignSection={showAssignSection}
      />

      {timeVisible && (
      <div className="time-body" id="time_line">
        {/* Your timeline content */}
        <div className="time-body" id="time_line">
        <div className="schedule">
            {/* Monday */}
            <div className="day">Monday</div>
            <div className="timeline">
            <div className="event">
                <div className="time">09:00 AM</div>
                Meeting with Students
            </div>
            <div className="event">
                <div className="time">11:00 AM</div>
                Lecture: Web Development
            </div>
            {/* Add more events for Monday */}
            </div>

            {/* Repeat the timeline and events for other days */}
            
            {/* Tuesday */}
            <div className="day">Tuesday</div>
            <div className="timeline">
            <div className="event">
                <div className="time">01:00 PM</div>
                Conference @Dallas
            </div>
            <div className="event">
                <div className="time">5:00 PM</div>
                Releasing Web development quiz grades
            </div>
            {/* Add more events for Tuesday */}
            </div>

            {/* Wednesday */}
            <div class="day">Wednesday</div>
            <div class="timeline">
                <div class="event">
                    <div class="time"></div>
                    No task for this day
                </div>
                
            </div>

            <div class="day">Thursday</div>
            <div class="timeline">
                <div class="event">
                    <div class="time">11:00 AM</div>
                    Lecture: Data Analysis
                </div>
                
            </div>

            <div class="day">Friday</div>
            <div class="timeline">
                <div class="event">
                    <div class="time">11:00 AM</div>
                    Lecture: Web Development
                </div>
                <div class="event">
                    <div class="time">3:00 PM</div>
                    Lecture: Data Analysis
                </div>

            </div>

            <div class="day">Saturday</div>
            <div class="timeline">
                <div class="event">
                    <div class="time"></div>
                    No pending tasks
                </div>
            </div>

            <div class="day">Sunday</div>
            <div class="timeline">
                <div class="event">
                    <div class="time"></div>
                    No pending tasks
                </div>
            </div>

            {/* Add more days and events here */}
        </div>
        </div>

      </div>
      )}

      {/* Chat Container */}
      {chatVisible && (
        <div className="chat-container">
          <a href="javascript:void(0)" className="closebtn" onClick={closeChat}>
            &times;
          </a>
          <div className="chat">
            <div className="chat-message bot">Hello! How can I assist you today?</div>
            <div className="chat-message user">Hi! I have a question.</div>
            {/* Add more messages here */}
          </div>
          <div className="user-input">
            <input type="text" id="userMessage" placeholder="Type your message..." />
            <button id="sendMessage">Send</button>
          </div>
        </div>
      )}

      {/* Announcement Section */}
      {announceVisible && (
        <div className="container_prog" id="announceSection">
          {/* Your announcement section content */}
          {/* Your announcement section content */}
            <div className="announce" id="announceSection">
            <select id="inst_course">
                <option value="SE2">Software Engineering 2</option>
                <option value="WDM">Web Development and Management</option>
                <option value="DM">Data Mining</option>
                <option value="DAMT">Data Analysis and Modeling Techniques</option>
            </select>
            <textarea id="txt" cols="30" rows="10" placeholder="Enter your announcement here"></textarea>
            <div className="buttons">
                <button>Submit</button>
            </div>
            </div>

        </div>
      )}

      {/* Upload Section */}
      {uploadVisible && (
        <div className="container">
          <div className="ue" id="uploadSection">
            {/* Your upload section content */}
            <div className="ue" id="uploadSection">
            <div className="upload">
                <div className="exams">
                <h6>Exam 1</h6>
                <img src="icons/editing.png" alt="edit" />
                <img src="icons/upload.png" alt="upload" />
                <img src="icons/delete.png" alt="delete" />
                </div>
                <div className="exams">
                <h6>Exam 2</h6>
                <img src="icons/editing.png" alt="edit" />
                <img src="icons/upload.png" alt="upload" />
                <img src="icons/delete.png" alt="delete" />
                </div>
                <div className="exams">
                <h6>Exam 3</h6>
                <img src="icons/editing.png" alt="edit" />
                <img src="icons/upload.png" alt="upload" />
                <img src="icons/delete.png" alt="delete" />
                </div>
                <div className="exams">
                <h6>Exam 4</h6>
                <img src="icons/editing.png" alt="edit" />
                <img src="icons/upload.png" alt="upload" />
                <img src="icons/delete.png" alt="delete" />
                </div>
                <div className="exams">
                <h6>Exam 5</h6>
                <img src="icons/editing.png" alt="edit" />
                <img src="icons/upload.png" alt="upload" />
                <img src="icons/delete.png" alt="delete" />
                </div>
                <div className="exams">
                <h6>Exam 6</h6>
                <img src="icons/editing.png" alt="edit" />
                <img src="icons/upload.png" alt="upload" />
                <img src="icons/delete.png" alt="delete" />
                </div>
                {/* Add more exams here */}
            </div>
            </div>

          </div>
        </div>
      )}

      {/* Assignment Section */}
      {assignVisible && (
        <div className="container">
          <div className="ua" id="assignSection">
            {/* Your assignment section content */}
            <div className="ua" id="assignSection">
            <div className="upload">
                <div className="exams">
                <h6>Assignment 1</h6>
                <img src="icons/editing.png" alt="edit" />
                <img src="icons/upload.png" alt="upload" />
                <img src="icons/delete.png" alt="delete" />
                </div>
                <div className="exams">
                <h6>Assignment 2</h6>
                <img src="icons/editing.png" alt="edit" />
                <img src="icons/upload.png" alt="upload" />
                <img src="icons/delete.png" alt="delete" />
                </div>
                <div className="exams">
                <h6>Assignment 3</h6>
                <img src="icons/editing.png" alt="edit" />
                <img src="icons/upload.png" alt="upload" />
                <img src="icons/delete.png" alt="delete" />
                </div>
                <div className="exams">
                <h6>Assignment 4</h6>
                <img src="icons/editing.png" alt="edit" />
                <img src="icons/upload.png" alt="upload" />
                <img src="icons/delete.png" alt="delete" />
                </div>
                <div className="exams">
                <h6>Assignment 5</h6>
                <img src="icons/editing.png" alt="edit" />
                <img src="icons/upload.png" alt="upload" />
                <img src="icons/delete.png" alt="delete" />
                </div>
                <div className="exams">
                <h6>Assignment 6</h6>
                <img src="icons/editing.png" alt="edit" />
                <img src="icons/upload.png" alt="upload" />
                <img src="icons/delete.png" alt="delete" />
                </div>
                {/* Add more assignments here */}
            </div>
            </div>

          </div>
        </div>
      )}

      {/* Student Progress Section */}
      {progressVisible && (
        <div className="container_prog" id="progressSection">
          {/* Your student progress tracking content */}
            <div className="container_prog" id="progressSection">
            <div className="student-table">
                <h1>Student Progress Tracking</h1>
                <label htmlFor="course">Select Course:</label>
                <select id="course">
                <option value="course1">Software Engineering 2</option>
                <option value="course2">Web Development and Management</option>
                <option value="course3">Data Mining</option>
                <option value="course4">Data Analysis and Modeling Techniques</option>
                </select>
                <table className="student-table">
                <thead>
                    <tr>
                    <th>Student Name</th>
                    <th>Result (%)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Student 1</td>
                    <td>85</td>
                    <td>
                        <button onClick={() => giveFeedback('Student 1')}>Provide Feedback</button>
                    </td>
                    </tr>
                    <tr>
                    <td>Student 2</td>
                    <td>92</td>
                    <td>
                        <button onClick={() => giveFeedback('Student 2')}>Provide Feedback</button>
                    </td>
                    </tr>
                    <tr>
                    <td>Student 3</td>
                    <td>78</td>
                    <td>
                        <button onClick={() => giveFeedback('Student 3')}>Provide Feedback</button>
                    </td>
                    </tr>
                    {/* Add more rows for other students */}
                </tbody>
                </table>
            </div>

            <div className="feedback-form">
                <div id="feedbackModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeFeedbackModal}>&times;</span>
                    <h2>Provide Feedback</h2>
                    <p>
                    Feedback for: <span id="studentName"></span>
                    </p>
                    <textarea
                    id="feedbackText"
                    cols="30"
                    rows="5"
                    placeholder="Enter feedback here"
                    ></textarea>
                    <button onClick={submitFeedback}>Submit</button>
                </div>
                </div>
            </div>
            </div>

        </div>
      )}

      {/* Feedback Modal */}
      {feedbackModalVisible && (
        <div id="feedbackModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeFeedbackModal}>
              &times;
            </span>
            <h2>Provide Feedback</h2>
            <p>
              Feedback for: <span id="studentName">{selectedStudent}</span>
            </p>
            <textarea
              id="feedbackText"
              cols="30"
              rows="5"
              placeholder="Enter feedback here"
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
            ></textarea>
            <button onClick={submitFeedback}>Submit</button>
          </div>
        </div>
      )}

    {chatbuttonVisible && (
        <button id="toggleChatButton" onClick={toggleChatContainer}>
            Chat
        </button>
      )}

      <div className="footer">
        <div></div>
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
};

export default InstructorDashboard;
