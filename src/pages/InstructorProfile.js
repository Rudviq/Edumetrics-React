import React, { useState } from 'react';
import styled from 'styled-components';

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
  display: none;
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
  
body, h1, h2, p, ul, li {
    margin: 0;
    padding: 0;
}

/* body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
} */

.instructor-card {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    max-width: 400px;
}

.instructor-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto 10px;
}

.instructor-name {
    font-size: 24px;
    margin-bottom: 5px;
}

.instructor-title {
    font-size: 18px;
    color: #666;
    margin-bottom: 10px;
}

.instructor-bio {
    font-size: 16px;
    margin-bottom: 15px;
}

.instructor-contact {
    list-style-type: none;
    padding: 0;
}

.instructor-contact li {
    font-size: 16px;
    margin-bottom: 5px;
}

.instructor-contact li strong {
    font-weight: bold;
}

/* Center the card on the page */
 .inst_body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
}

`;


function InstructorProfile() {
  const [chatVisible, setChatVisible] = useState(false);

  const toggleChatContainer = () => {
    setChatVisible(!chatVisible);
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
            <a href="/instructor">
              <img src="icons/user.png" />
              Home
            </a>
            <a href="instructor_dash.html">
              <img src="icons/user.png" />
              Courses
            </a>
            <a href="https://bxd3672.uta.cloud/wordpress_blog/">
              <img src="icons/blog.png" />
              Our Blog
            </a>
            
            <a href="/login">
              <img src="icons/exit.png" />
              Log Out
            </a>
          </div>
        </div>
      </div>

      <div className="inst_body" style={{ marginTop: '100px', marginBottom: '100px' }}>
        <div className="instructor-card">
          <img src="images/instructor.jpg" alt="Instructor Image" className="instructor-image" />
          <h2 className="instructor-name">John Doe</h2>
          <p className="instructor-title">Computer Science Professor</p>
          <p className="instructor-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo id arcu porttitor, non
            tristique nulla scelerisque.
          </p>
          <ul className="instructor-contact">
            <li>
              <strong>Email:</strong> john.doe@example.com
            </li>
            <li>
              <strong>Phone:</strong> (123) 456-7890
            </li>
            <li>
              <strong>Office:</strong> Room 123
            </li>
          </ul>
        </div>
      </div>

      <button id="toggleChatButton" onClick={toggleChatContainer}>
        Chat
      </button>

      {chatVisible && (
        <div className="chat-container">
          <button id="closeChatButton" onClick={toggleChatContainer}>
            X
          </button>
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
}

export default InstructorProfile;
