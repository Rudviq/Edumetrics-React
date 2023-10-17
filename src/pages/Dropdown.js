import React from 'react';

const Dropdown = () => {
  return (
    <div className="dropdown">
      <a href="#" className="burger-icon">&#9776;</a>
      <div className="dropdown-content">
        <a href="student_profile"><img src="icons/user.png" alt="User Icon" />Student Profile</a>
        <a href="student_dashboard"><img src="icons/user.png" alt="User Icon" />Courses</a>
        <a href="#"><img src="icons/test.png" alt="Test Icon" />Grade Info</a>
        <a href="#"><img src="icons/scholarship.png" alt="Scholarship Icon" />Charges Due</a>
        <a href="#"><img src="icons/settings.png" alt="Settings Icon" />Settings</a>
        <a href="#"><img src="icons/exit.png" alt="Exit Icon" />Log Out</a>
      </div>
    </div>
  );
};

export default Dropdown;
