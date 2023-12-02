import React from 'react';
import './App.css';
import Bio from '/components/Bio';
import Skills from '/components/Skills';
import Projects from '/components/Projects';

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


