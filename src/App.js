import React, { useEffect } from 'react';
import questions from './data/index.js';
import { debounce } from 'lodash';
//components
import Quiz from './components/Quiz.jsx';
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

  return (
    <div className='App'>
      <Quiz quiz={questions} />
    </div>
  );
}
