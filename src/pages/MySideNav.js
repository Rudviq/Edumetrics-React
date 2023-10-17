import React, { useState } from 'react';

function MySidenav({ showAnnounceSection, showUploadSection, showProgressSection, showAssignSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };  

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <div>
      <div id="opennav" onClick={openNav}>
        &gt;
      </div>
      <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#" onClick={showAnnounceSection}>
          Make an announcement
        </a>
        <a href="#" onClick={showUploadSection}>
          Create Exam
        </a>
        <a href="#">Assign Grades</a>
        <a href="#" onClick={showProgressSection}>
          Student Standings
        </a>
        <a href="#">Update Syllabus</a>
        <a href="#" onClick={showAssignSection}>
          Add Assignments
        </a>
      </div>
    </div>
  );
}

export default MySidenav;
