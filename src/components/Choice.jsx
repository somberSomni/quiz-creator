import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SelectIcon = styled.div`
    border-radius: 50%;
    padding: 1px;
    border: 4px solid black;
    width: 18x;
    height: 18px;
`;

const ChoiceContainer = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 200px;
    height: 25px;
    background: rgba(0,0,0,0);
    box-shadow: ${props => props.correct ? '1px 1px 4px 2px rgba(0,0,0,0.2)' : 'none'};
    cursor: ${props => props.disable ? 'default' : 'pointer'};
    padding: 5px 10px;
    border-radius: 5px;
    opacity: ${props => props.disable && !props.correct ? '0.3' : '1'};
    &:hover {
        background: ${props => props.disable ? 'rgba(0,0,0,0)' : '#CCC'};
    }
`;

const ChoiceText = styled.p`
    margin-left: 10px;
`;
export default function Choice({ choice, handleSelected, index, selected, disable, correct}) {
    const [ onChoice, setOnChoice ] = useState(false);
    console.log(correct, index);
    return (
        <ChoiceContainer
                disable={disable}
                correct={correct}
                onMouseEnter={() => { if(!disable) setOnChoice(true) }}
                onMouseLeave={() => { if(!disable) setOnChoice(false) }}
                onClick={() => {
                    if(selected) {
                        handleSelected(index, choice, true);
                    } else {
                        handleSelected(index, choice)
                    }
                }}
                enable={onChoice}>
            <SelectIcon >
                <FontAwesomeIcon 
                    icon={['fas', 'circle']} 
                    style={{ color: onChoice ? 
                        (selected ? 'black' : '#999999') : 
                        (selected ? 'black' : 'rgba(0,0,0,0)') }} />
            </SelectIcon>
            <ChoiceText>{choice}</ChoiceText>
        </ChoiceContainer>
    )
}