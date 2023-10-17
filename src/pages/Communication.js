import React from 'react';
import styled from 'styled-components';

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
    /*background-image: url('C://Users//saisa//Documents//phase-html-WDM//images//micah-williams-lmFJOx7hPc4-unsplash.jpg'); 
    background-repeat: no-repeat; 
    background-attachment: fixed;	*/
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
    z-index: 10;
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
  
  
  /* Clear floats after the columns */
  .container_login {
	display: flex;
    flex-direction: column; /* Change to column to stack items vertically */
    align-items: center;
	height: 595px;
	padding: 10px;
   }
   
   .container_sinup {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Center the container vertically on the page */
}


.container_forgot {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Center the container vertically on the page */
}

main {
    max-width: 1200px;
    margin: 20px auto;
    margin-bottom: 400px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

section {
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.forgot-password-form {
    background-color: #ffffff; /* Form background color */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 400px; /* Set the maximum width for the form */
}

.forgot-password-form h1 {
    margin-bottom: 20px;
}

.forgot-password-form p {
    margin-bottom: 20px;
    font-size: 16px;
    color: #555;
}

/* styles.css */
.contact-list {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
}

.contact {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    background-color: #f8f8f8;
}

.contact-avatar img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 20px;
}

.contact-info {
    flex: 1;
}

.contact h2 {
    font-size: 18px;
    margin: 0;
}

.contact p {
    font-size: 14px;
    margin: 5px 0;
}

/* styles.css */
.search-bar {
    text-align: center;
    margin: 20px 0;
}

label {
    font-size: 16px;
    font-weight: bold;
    margin-right: 10px;
}

#contact-search {
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    outline: none;
}


.forgot-password-form label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
}

.forgot-password-form input[type="email"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
}

.forgot-password-form input[type="submit"] {
    background-color: #0091ff; /* Button background color */
    color: #fff; /* Button text color */
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

.forgot-password-form input[type="submit"]:hover {
    background-color: #0064b1; /* Button background color on hover */
}
   
.login-form label,
.login-form input[type="text"],
.login-form input[type="password"],
.login-form input[type="submit"] {
    margin: 15px 0; /* Adjust the vertical margin as needed */
}

.login-form {
    width: 300px;
    margin: 0 auto;
    text-align: center;
    background-color: #f5f5f5; /* Background color for the form */
    padding: 20px;
    border-radius: 8px; /* Rounded corners for the form */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Box shadow for a subtle 3D effect */
}

/* Style labels for form elements */
.login-form label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold; /* Bold labels */
}

/* Style text inputs and password inputs */
.login-form input[type="text"],
.login-form input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none; /* Remove default input focus outline */
    transition: border-color 0.2s ease-in-out; /* Smooth border transition on focus */
}

/* Change input border color on focus */
.login-form input[type="text"]:focus,
.login-form input[type="password"]:focus {
    border-color: #0091ff; /* Change border color on focus */
}

/* Style the submit button */
.login-form input[type="submit"] {
    background-color: #0091ff; /* Button background color */
    color: #fff; /* Button text color */
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out; /* Smooth background color transition on hover */
}

/* Change button background color on hover */
.login-form input[type="submit"]:hover {
    background-color: #0064b1; /* Change background color on hover */
}

/* Optional: Style links within the form */
.login-form a {
    text-decoration: none;
    color: #0091ff; /* Link color */
    transition: color 0.2s ease-in-out; /* Smooth link color transition on hover */
}

/* Change link color on hover */
.login-form a:hover {
    color: #0064b1; /* Change link color on hover */
}

.signup-form {
    background-color: #ffffff; /* Form background color */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 400px; /* Set the maximum width for the form */
}

.signup-form h1 {
    margin-bottom: 20px;
}

.signup-form label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
}

.signup-form input[type="text"],
.signup-form input[type="email"],
.signup-form input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
}

.signup-form input[type="submit"] {
    background-color: #0091ff; /* Button background color */
    color: #fff; /* Button text color */
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

.signup-form input[type="submit"]:hover {
    background-color: #0064b1; /* Button background color on hover */
}

  
  /*.login-form {
	 width: 300px; /* Set the desired width for the form 
    margin: 0 auto; /* Center the form horizontally within the container */
    /*text-align: center;
	margin-top: 10px;
    
  }*/
  
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

  }
@media screen and (max-width: 600px) {
 .footer {
	 font-size:6px;
 }
}
@media screen and (min-width: 601px) and (max-width: 1024px) {
 .footer {
	 font-size:10px;
 }
}
/*@media screen and (min-width: 1025px) {
	.footer {
	 font-size:10px;
 }*/
}

  `;

class ContactList extends React.Component {
  render() {
    return (
        <Container>
        <div>
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
              <a href="/home">
                <img src="icons/icons8-home-50.png" />
                Home
              </a>
              <a href="/services">
                <img src="icons/icons8-services-50.png" />
                Services
              </a>
              <a href="/contact_us">
                <img src="icons/icons8-contact-us-50.png" />
                Contact Us
              </a>
              <a href="/aboutus">
                <img src="icons/icons8-about-us-50.png" />
                About Us
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

        <div className="search-bar">
          <label htmlFor="contact-search">Search Contacts:</label>
          <input type="text" id="contact-search" placeholder="Search..." />
        </div>

        <div className="contact-list">
          <div className="contact">
            <div className="contact-info">
              <h2>Emma Johnson</h2>
              <p>Email: john.doe@example.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="contact">
            <div className="contact-info">
              <h2>Liam Smith</h2>
              <p>Email: jane.smith@example.com</p>
              <p>Phone: +1 (555) 987-6543</p>
            </div>
          </div>
          <div className="contact">
            <div className="contact-info">
              <h2>Olivia Brown</h2>
              <p>Email: test.user@example.com</p>
              <p>Phone: +1 (555) 555-5555</p>
            </div>
          </div>
          <div className="contact">
            <div className="contact-info">
              <h2>Noah Davis</h2>
              <p>Email: placeholder.email@example.com</p>
              <p>Phone: +1 (555) 111-2222</p>
            </div>
          </div>
          <div className="contact">
            <div className="contact-info">
              <h2>Ava Wilson</h2>
              <p>Email: contact.me@example.com</p>
              <p>Phone: +9876543210</p>
            </div>
          </div>
          <div className="contact">
            <div className="contact-info">
              <h2>Benjamin Taylor</h2>
              <p>Email: sample.email@example.com</p>
              <p>Phone: +1 (555) 333-4444</p>
            </div>
          </div>
          <div className="contact">
            <div className="contact-info">
              <h2>Sophia Martinez</h2>
              <p>Email: temp.email@example.com</p>
              <p>Phone: +1 (555) 777-8888</p>
            </div>
          </div>
          <div className="contact">
            <div className="contact-info">
              <h2>William Anderson</h2>
              <p>Email: website.user@example.com</p>
              <p>Phone: +1 (555) 999-0000</p>
            </div>
          </div>
        </div>
        {/* Add more contacts here */}
      </div>

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
}

export default ContactList;
