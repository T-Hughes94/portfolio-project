import { useState } from 'react'
import './App.css'
import React from 'react';


// Bio component
const Bio = () => (
  <section>
    <h2>Bio</h2>
    <p>
      Hello! I am Terence Hughes, a passionate Software Engineer with a focus on Web Development and using A.I
      to develop systems and applications that solve real world problems.
    </p>
  </section>
);

// Skills component
const Skills = () => (
  <section>
    <h2>Skills</h2>
    <ul>
      <li>JavaScript (ES6+)</li>
      <li>React.js</li>
      <li>Node.js</li>
      <li>Python</li>
      <li>Flask</li>
      <li>SQLalchemy</li>
      {/* Add more skills as needed */}
    </ul>
  </section>
);

// Projects component
const Projects = () => (
  <section>
    <h2>Projects</h2>
    {/* Add your projects with details */}
    <div>
      <h3>Project 1</h3>
      <p>Description of Project 1.</p>
      <a href="#">View Project</a>
    </div>
    <div>
      <h3>Project 2</h3>
      <p>Description of Project 2.</p>
      <a href="#">View Project</a>
    </div>
    {/* Add more projects as needed */}
  </section>
);

function App() {
  return (
    <div className="App">
      <header>
        <h1>Terence Hughes - Software Engineer</h1>
      </header>
      <main>
        <Bio />
        <Skills />
        <Projects />
      </main>
      <footer>
        {/* Add your contact information or social media links */}
        <p>Contact: your.email@example.com</p>
      </footer>
    </div>
  );
}

export default App;

