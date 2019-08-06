import React, { useState } from 'react';
import questions from './data/index.js';
//components
import Quiz from './components/Quiz.jsx';
import StartMenu from './components/StartMenu.jsx';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons'
// import { faBracketsCurly, faPencilAlt, faEnvelope, faHomeAlt, faLaptopCode, faTimes, faServer, faDatabase, faPlus, faBrain, faChartPie } from '@fortawesome/pro-regular-svg-icons'
// import { faFilePdf, faChartScatter, faHorizontalRule, faProjectDiagram } from '@fortawesome/pro-light-svg-icons'
// import { faGithub, faVimeoV } from '@fortawesome/free-brands-svg-icons';
// import logo from './logo.svg';
import './App.css';
library.add(
  faChevronDown,
  faCircle);

export default function App() {
  const [start, setStart] = useState(false);
  return (
    <div className='App'>
      {start ? <Quiz quiz={questions} /> : <StartMenu setStart={setStart} />}
    </div>
  );
}
