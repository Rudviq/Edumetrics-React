import React from 'react';
// import './HomePage.scss';
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
    margin: 0;
    padding: 0;
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

.logo-container {
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
    font-size: 25px;
    /* Adjust font size as needed */
    align-items: center;
    margin-left: 15px;
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
    max-width: 80px;
    right: 0;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
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


    .dropdown-content img {
        height: 25px;
        /* padding: 12px 16px; */
        line-height: 25px;
        margin-right: 15px;
    }

.dropdown {
    display: inline-block;
    align-items: center;
}

    .dropdown:hover {
        background-color: #ddd;
    }

.dropdown-content a:hover {
    background-color: #0091ff;
}


/* Create three equal columns that floats next to each other */
/* .column {
    float: left;
    width: 50%;
    padding: 10px;
    height: 250px; /* Should be removed. Only for demonstration
  } */
.row {
    display: flex;
    border-width: 10px;
    border-color: rgb(6, 4, 145);
    border-style: double;
    margin: 4px;
    border-radius: 3px;
}

.content {
    width: 65%;
    padding: 1px 0px 0px 10px;
    height: auto;
}

.carousel_image {
    width: 35%;
    height: auto;
    background-color: #d7edff;
}

.button {
    background-color: #7359e9;
    /* Green */
    border: black;
    color: rgb(203, 203, 203);
    padding: 15px 32px;
    margin: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    border-radius: 7px;
}

.newsletter {
    border-width: 10px;
    border-color: rgb(6, 4, 145);
    border-style: double;
    margin: 22px;
    border-radius: 3px;
    margin-bottom: 80px;
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
    display: flex;
    flex-wrap: wrap;
    background: #0064b1;
    /* Light gray or off-white color */
    color: #f5f5f5;
    /* Text color for contrast */
    justify-content: space-around;
}

.uta_logo {
    float: left;
    display: block;
    left: 0;
    /* max-width: 200px; */
    width: 60px;
    height: 20px;
}

.uni_info {
    flex-grow: 1;
    margin-left: 20px;
    margin-top: auto;
    margin-bottom: auto;
    padding: 0;
    float: left;
    text-align: left;
}

    .uni_info p,
    h3 {
        padding: 0;
        margin: 0;
    }

.contact-us {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: flex-end space-evenly;
    bottom: 0;
}

    .contact-us img {
        max-height: 30px;
        margin-right: 20px;
        justify-content: space-evely;
    }

img {
    width: 100%;
}

form {
    border: 3px solid #d7edff;
    font-family: Arial;
}

.container {
    padding: 20px;
    overflow-y: hidden;
    background-color: #d7edff;
}

input[type=text],
input[type=submit] {
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

input[type=checkbox] {
    margin-top: 16px;
}

input[type=submit] {
    background-color: #04AA6D;
    color: white;
    border: none;
}

    input[type=submit]:hover {
        opacity: 0.8;
    }

@media screen and (max-width: 850px) {

    .row {
        border-width: 10px;
        border-color: rgb(0, 217, 217);
        border-style: double;
        border-radius: 2px;
        margin: 5px;
    }

    .content {
        padding: 1px 0px 0px 10px;
        width: 100%;
        height: auto;
        float: top;
    }

    .carousel_image {
        width: 100%;
        height: auto;
        background-color: #d7edff;
        float: top;
    }

    .button {
        background-color: #190088;
        /* Green */
        border: black;
        color: rgb(203, 203, 203);
        padding: 5px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 15px;
        border-radius: 4px;
    }
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {

    .topnav .dropdown,
    .topnav div,
    .topnav .logo-container {
        float: none;
    }

    .topnav {
        display: flex;
        /* Reset display property */
        flex-direction: column;
        /* Change direction to column */
        align-items: center;
        /* Center content horizontally */
        margin-left: 0;
        width: 100%;
    }

    /* Move the burger button below the logo container */
    .burger-icon {
        display: block;
        margin: 10px auto;
        /* Adjust margin as needed for vertical alignment */
        line-height: normal;
        /* Reset line-height to default */
    }

    .dropdown-content {
        width: 100%;
        align-items: center;
        text-align: center;
    }

        .dropdown-content a {
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
        flex-wrap: wrap;
        /* Wrap content to the next line if needed */
        justify-content: space-between;
        /* Space between items */
    }

    .uta_logo {
        flex: 1;
        /* Takes 1/3 of the available space */
        order: 1;
        /* Display first on the left */
        max-width: 100%;
        height: auto;
    }

    .uni_info {
        flex: 1;
        /* Takes 1/3 of the available space */
        text-align: left;
        padding-left: 20px;
        order: 2;
        /* Display second on the right */
    }

        .uni_info h4 {
            margin: 0;
            font-size: 16px;
        }

        .uni_info p {
            margin: 5px 0;
        }

    .contact-us {
        flex: 1;
        /* Takes 1/3 of the available space */
        align-items: center;
        justify-content: space-evenly;
        order: 3;
        /* Display third on the right */
    }

        .contact-us img {
            max-height: 20px;
            margin-right: 10px;
        }
}

/*Carousel*/

.carousel-wrapper {
    height: 400px;
    position: relative;
    width: 90%;
    margin: 0 auto;
}

.carousel-item {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 25px 50px;
    opacity: 0;
    transition: all 0.5s ease-in-out;
}

.arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 12px;
}

.arrow-prev {
    left: -30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(135deg);
}

.arrow-next {
    right: -30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(-45deg);
}

.light {
    color: white;
}

@media (max-width: 480px) {

    .arrow,
    .light .arrow {
        background-size: 10px;
        background-position: 10px 50%;
    }
}

/*Select every element*/
[id^="item"] {
    display: none;
}

.item-1 {
    z-index: 2;
    opacity: 1;
    background: url('https://connect-uta-edu.cdn.technolutions.net/www/images/Admissions/email_images/primary/daily_campus_tours_portal.jpg');
    background-size: cover;
}

.item-2 {
    background: url('https://cdn.web.uta.edu/-/media/project/website/news/releases/2022/05/black-excellence2.ashx?revision=873f8b64-560d-4193-9c0e-70bca2d4b16b');
    background-size: cover;
}

.item-3 {
    background: url('https://www.uta.edu/strategicplan/_img/about.jpg');
    background-size: cover;
}

*:target ~ .item-1 {
    opacity: 0;
}

#item-1:target ~ .item-1 {
    opacity: 1;
}

#item-2:target ~ .item-2,
#item-3:target ~ .item-3 {
    z-index: 3;
    opacity: 1;
}


.message {
    background-color: #d7edff;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
}

input[type="text"] {
    width: 94%;
    padding: 10px;
}

button {
    padding: 10px 20px;
    background-color: #7359e9;
    /* Green */
    border: black;
    color: rgb(203, 203, 203);
    margin-bottom: 8px;
}

.chat.collapsed {
    height: 0;
    overflow: hidden;
}

/* .gfg {
        margin: 3%;
        max-width:1189%;
        height: 100%;
        position: relative;
    }
   
  /*This CSS code is defining the styles for a container that holds text*/
/* .text-container {
        position: absolute;
        color: rgb(255, 255, 255);
        left: 0rem;
        top: 34rem;
        background-color: rgb(41, 41, 41, 0.8);
        padding: 0 1rem;
    }  */

.gfg {
    max-width: 1915px;
    /* Adjusted to be responsive */
    height: auto;
    /* Adjusted to be responsive */
    position: relative;
    margin: 10px 70px 10px 70px;
}

.text-container {
    position: relative;
    /* Changed to relative for better responsive behavior */
    color: rgb(0, 0, 0);
    background-color: #d7edff;
    padding: 20px;
    /* Adjusted for better spacing */
}


.aboutusbody {
    border-width: 10px;
    border-color: rgb(6, 4, 145);
    border-style: double;
    margin: 20px 0;
    /* Adjusted for better spacing */
    border-radius: 3px;
    padding: 10px;
}

/* ipad view for about us page */

@media (max-width: 767px) {
    .text-container {
        padding: 10px;
        /* Adjusted padding for smaller screens */
    }
}

@media (max-width: 767px) {
    .row {
        flex-direction: column;
    }

    .content, .carousel_image {
        width: 100%;
    }

    .content {
        order: 2;
    }

    .carousel_image {
        order: 1;
    }

    .gfg {
        margin: 10px;
    }
}


/* Chat window styles */

.chat {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 15;
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

`;

const newLocal = "images/carousel2.jpeg";
const newLocal_1 = "images/carousel3.png";
export const HomePage = () => {
    return (
        <Container>
    <>
            <div>
                <div className="topnav">
                    <div className="logo-container">
                        <a href="home.html"><img src="images/logo.png" className="logo" alt="Logo" /></a>
                        <span className="site-name">Edumetrics</span>
                    </div>

                    <div className="dropdown">
                        <a href="#" className="burger-icon">&#9776;</a>
                        <div className="dropdown-content">
                            <a href="aboutus.html"><img src="icons/group.png" alt="Group Icon" />About Us</a>
                            <a href="services.html"><img src="icons/vehicle.png" alt="Vehicle Icon" />Services</a>
                            <a href="login.html"><img src="icons/exit.png" alt="Exit Icon" />Log In</a>
                            <a href="https://bxd3672.uta.cloud/wordpress_blog/">
                                <img src="icons/blog.png" />
                                Our Blog
                            </a>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="carousel-wrapper">
                        <span id="item-1"></span>
                        <span id="item-2"></span>
                        <span id="item-3"></span>
                        <div className="carousel-item item-1">
                            <h2 style={{ color: '#070083', backgroundColor: '#d7edff' }}>Edumetrics</h2>
                            <p style={{ color: '#ffffff' }}>An educational leader in the thriving North Texas region, Edumetrics nurtures
                                minds within an environment that values excellence, ingenuity, and diversity.</p>
                            <button className="button">Learn more...</button>
                            <a className="arrow arrow-prev" href="#item-3"></a>
                            <a className="arrow arrow-next" href="#item-2"></a>
                        </div>

                        <div className="carousel-item item-2">
                            <h2 style={{ color: '#070083', backgroundColor: '#d7edff' }}>Excellence</h2>
                            <p style={{ color: '#d7edff' }}>RANKINGS AND RECOGNITION - Excellence and achievement abound at Edumetrics.</p>
                            <button className="button">Learn more...</button>
                            <a className="arrow arrow-prev" href="#item-1"></a>
                            <a className="arrow arrow-next" href="#item-3"></a>
                        </div>

                        <div className="carousel-item item-3">
                            <h2 style={{ color: '#070083', backgroundColor: '#d7edff' }}>EXPLORE OVER 180 DEGREES</h2>
                            <p style={{ color: '#ffffff' }}>Explore over 180 degree programs across nine colleges. With world-renowned
                                faculty and resources, we help you carve out your path to becoming an innovator, thought-leader, and
                                global citizen.</p>
                            <button className="button">Learn more...</button>
                            <a className="arrow arrow-prev" href="#item-2"></a>
                            <a className="arrow arrow-next" href="#item-1"></a>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="content" style={{ backgroundColor: '#d7edff' }}>
                            <h2>
                                <u>Explore Excellence In Computer Science:</u>
                            </h2>
                            <p>
                                Welcome to a place where knowledge thrives and academic excellence reigns supreme.
                                Our mission is to empower and inspire individuals to reach their full potential
                                through a commitment to academic brilliance. We believe that education is the
                                cornerstone of success, and we are dedicated to fostering an environment where learning flourishes.
                            </p>
                            <button className="button">Course Catalog</button>
                        </div>
                        <div className="carousel_image">
                            <img src="images/carousel1.jpeg" alt="Carousel 1" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="carousel_image">
                            <img src="images/carousel2.jpeg" alt="Carousel 2" />
                        </div>
                        <div className="content" style={{ backgroundColor: '#d7edff' }}>
                            <h2>
                                <u>Program Objectives:</u>
                            </h2>
                            <p>
                                <ol>
                                    <li>Specialized Knowledge: Gain a strong foundation in specialized knowledge for your chosen field.</li>
                                    <li>Critical Thinking & Analysis: Develop critical thinking, problem-solving, and analytical skills.</li>
                                    <li>Communication & Collaboration: Enhance communication, teamwork, and collaboration abilities.</li>
                                    <li>Creativity & Innovation: Foster creativity and innovative thinking.</li>
                                </ol>
                            </p>
                            <button className="button">Learn more</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="content" style={{ backgroundColor: '#d7edff' }}>
                            <h2>
                                <u>Assessment:</u>
                            </h2>
                            <p>
                                At EduMetrics, we take Performance Measurement and Assessment Seriously. Here's why it Matters:
                                <ul>
                                    <li>Quality Assurance: Rigorous Assessments Ensure That Our Program Maintains The Highest
                                        Standards Of Quality In Education.</li>
                                    <li>Personalized Feedback: Performance Assessments Provide</li>
                                    <li>Students With Valuable Feedback, Helping Them Improve And Succeed.</li>
                                    <li>Adaptive Teaching: By Measuring Performance, Our Instructors Can Adapt Their Teaching Methods To
                                        Better Meet Your Needs.</li>
                                    <li>Continuous Improvement: We Use Performance Data To Continually Enhance Our Courses And Program,
                                        Staying Aligned With Industry Trends.</li>
                                </ul>
                                Join Us On This Transformative Journey In Computer Science, Where Your Success Is Our Ultimate Goal.
                            </p>
                            <button className="button">Performance</button>
                        </div>
                        <div className="carousel_image">
                            <img src="images/carousel3.png" alt="Carousel 3" />
                        </div>
                    </div>
                </div>

                <div className="newsletter">
                    <h2>Edumetrics NEWS CENTER</h2>
                    <form action="/action_page.php">
                        <div className="container">
                            <h2>Subscribe to our Newsletter for latest news about the campus</h2>
                            <p> News Center is your official source of University news and announcements</p>
                        </div>
                        <div className="container" style={{ backgroundColor: 'rgb(189, 218, 255)' }}>
                            <input type="text" placeholder="Name" name="name" required />
                            <input type="text" placeholder="Email address" name="mail" required />
                            <label>
                                <input type="checkbox" checked="checked" name="subscribe" /> Daily Updates
                            </label>
                        </div>
                        <div className="container">
                            <input type="submit" value="Subscribe" style={{ backgroundColor: 'rgb(44, 44, 139)' }} />
                        </div>
                    </form>
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

                <div className="footer">
                    <div></div>
                    <img src="images/uta_logo.png" alt="UTA" className="uta_logo" />
                    <div className="uni_info">
                        <h4>Edumetrics</h4>
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
        </>
        </Container>
    );
}

