import React from 'react';
import Problem from './Problem.jsx';
export default function Quiz({quiz}) {
    return (
        <div>
            { quiz.map((problem, i) => <Problem key={i.toString()} {...problem} id={i}/>) }
        </div>
    )
}