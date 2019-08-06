import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
    font-size: 1em;
    min-width: 200px;
    padding: 10px;
    margin-top: 10px;
    border: none;
    background-color: ${props => props.color}
    border-radius: 5px;
    opacity: ${props => props.turnOff ? '0.3' : '1'};
    cursor: ${props => props.turnOff ? 'not-allowed' : (props.disable ? 'default' : 'pointer')};
    transition: opacity 500ms, background-color 1s;
    &:hover {
        opacity: ${props => props.turnOff? '0.3' : (props.disable ? '1' : '0.7')};
        box-shadow: ${props => props.turnOff || props.disable ? 'none' : '1px 1px 4px 2px rgba(0,0,0,0.2)'};
    }
`;
export default function SubmitButton({ label, checkAnswer, disable, turnOff, bgcolor }) {
    const [buttonLabel, setLabel] = useState(label || 'Submit')
    const [color, setColor] = useState(bgcolor || '#198C8C');
    const [emoji, setEmoji] = useState('')
    useEffect(() => {
        switch(buttonLabel.toLowerCase()) {
            case 'correct':
                setColor('#5AC18E');
                setEmoji('👍');
                break;
            case 'try again':
                setColor('#999');
                setEmoji('');
                break;
            case 'wrong':
                setColor('#F00000');
                setEmoji('👎');
                break;
            default:
                setColor(bgcolor || '#198C8C')
                setEmoji('');
                break;
        }
    }, [buttonLabel])
    return (
        <Button 
            turnOff={turnOff}
            disable={disable}
            color={color}
            onClick={() => { if(!disable) checkAnswer(setLabel) }}>
            {buttonLabel} {emoji}
        </Button>
    )
}

SubmitButton.propTypes = {
    label: PropTypes.string, 
    checkAnswer: PropTypes.func, 
    disable, turnOff, bgcolor
}