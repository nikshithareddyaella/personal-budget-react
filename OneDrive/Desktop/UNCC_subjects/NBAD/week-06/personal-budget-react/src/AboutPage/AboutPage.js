import React from "react";
import './AboutPage.scss'; // Optional: Import SCSS for styling

function AboutPage() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our mission, vision, and the team behind our Personal Budget Management App.</p>
      </header>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower individuals to take control of their finances by providing an intuitive and efficient budgeting tool. 
          We believe that everyone should have access to the resources they need to manage their money wisely.
        </p>
      </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <ul className="team-list">
          <li>
            <h3>Nikshitha Reddy Aella</h3>
            <p>Founder & Lead Developer</p>
            <p>A passionate software engineer focused on creating user-friendly applications.</p>
          </li>
          <li>
            <h3>Jane Doe</h3>
            <p>Product Manager</p>
            <p>Ensures the app meets user needs and oversees product development.</p>
          </li>
          <li>
            <h3>John Smith</h3>
            <p>UI/UX Designer</p>
            <p>Designs the app interface for optimal user experience and engagement.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AboutPage;
