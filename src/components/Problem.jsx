import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Choice from './Choice.jsx';
import SubmitButton from './SubmitButton.jsx';
import InputChoice from './InputChoice.jsx';
import PropTypes from 'prop-types';

const ProblemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export default function Problem({ question, choices, answer, numOfTries}) {
    const answerCondition = answer instanceof Array && answer.length > 1 && choices && choices instanceof Array;
    const [selected, setSelected] = useState(answerCondition? [] : -1);
    const [ correctAnswer, setCorrectAnswer ] = useState(answerCondition? [] : -1);
    const [tries, setTries] = useState(numOfTries || 1);
    useEffect(() => {
        if(answerCondition) {
            const mappedAnswers = choices.map(choice => {
                const answerFound = answer.findIndex(a => a == choice) !== -1;
                if(answerFound) {
                    return choice;
                } else {
                    return null;
                }
            })
            setCorrectAnswer(mappedAnswers)
        } else {
            setCorrectAnswer(choices.findIndex(choice => choice == answer))
        }
    }, []);
    function handleSelected(i, choice, remove = false) {
        if(answerCondition) {
            let newSelected = selected.slice();
            if(!newSelected[i]) {
                newSelected[i] = choice;
            } else {
                if(remove) {
                    console.log('removing element')
                    newSelected[i] = null;
                }
            }
            setSelected(newSelected);
        } else {
            if(remove) {
                console.log('removing element')
                setSelected(-1)
            } else {
                setSelected(i)
            }
        }
    }
    function checkAnswer(setLabel) {
        //continues to check answers based on number of tries allowed
        console.log(tries);
        if(tries > 0) {
            if(answerCondition) {
                const isCorrect = correctAnswer.every((a, i) => a == selected[i])
                if(isCorrect) {
                    setLabel('Correct');
                } else {
                    console.log('wrong');
                    if(tries > 1) {
                        setLabel('Try Again')
                    } else {
                        setLabel('Wrong');
                    }
                }
            } else {
                if(choices[selected] == answer) {
                    console.log('correct');
                    setLabel('Correct');
                } else {
                    console.log('wrong');
                    if(tries > 1) {
                        setLabel('Try Again');
                    } else {
                        setLabel('Wrong');
                    }
                }
            }
            setTries(tries - 1);
        }
    }
    return (
        <ProblemContainer>
            <p>{question}</p>
            { answerCondition ? <h5 style={{ marginTop: -5}}>Select One or More</h5> : null }
            {choices && choices.length > 0 ?
                choices.map((choice, i) => <Choice
                    key={i.toString()}
                    selected={answerCondition ? (selected[i] === choice) : selected === i}
                    choice={choice}
                    disable={tries <= 0}
                    correct={answerCondition ? (correctAnswer[i] && tries <= 0 ? true: false) : (correctAnswer === i && tries <= 0)}
                    handleSelected={handleSelected}
                    index={i} />) :
                <InputAnswer />}
            <SubmitButton disable={tries <= 0} turnOff={answerCondition ? (selected.filter(each => each).length === 0) : (selected === -1)} checkAnswer={checkAnswer} />
        </ProblemContainer>
    )
}

Problem.propTypes = {
    question: PropTypes.string,
    choices: PropTypes.array,
    answer: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array])
}