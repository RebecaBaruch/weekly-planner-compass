import React, { useState, useRef } from 'react';

import styled from 'styled-components';

import InputPlanner from'./InputPlanner';
import SelectPlanner from './SelectPlanner';
import ActionButton from './ActionButton';

export const ActionsForm = styled.form`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 1rem 1rem;
    width: 100%;
`;

export const InputsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    width: 40%;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
    align-items: center;
`;

function PlannerAction({ onSaveTaskData, deleteDataHandler }) {
    const  [enteredDesc, setEnteredDesc] = useState('');
    const  [enteredDay, setEnteredDay] = useState('');
    const  [enteredTime, setEnteredTime] = useState('');

    const descChangeHandler = (e) => {
        setEnteredDesc(e.target.value);
      };
    
    const dayChangeHandler = (e) => {
        setEnteredDay(e.target.value);
    };
    
    const timeChangeHandler = (e) => {
        setEnteredTime(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
    
        const taskData = {
            desc: enteredDesc,
            day: enteredDay,
            time: enteredTime
        };

        onSaveTaskData(taskData);
        console.log(taskData);
        setEnteredDesc('');
        setEnteredDay('');
        setEnteredTime('');
    };

    return(
        <ActionsForm onSubmit={submitHandler}>
            <InputsContainer>
                <InputPlanner 
                    width='64%' 
                    type='text' 
                    placeholder='Task or issue' 
                    value={enteredDesc}
                    onChange={descChangeHandler}
                />
                <SelectPlanner width='40%' value={enteredDay} onChange={dayChangeHandler}>
                    <option value='monday'>Monday</option>
                    <option value='tuesday'>Tuesday</option>
                    <option value='thursday'>Thursday</option>
                    <option value='friday'>Friday</option>
                    <option value='saturday'>Saturday</option>
                    <option value='sunday'>Sunday</option>
                </SelectPlanner>
                <SelectPlanner value={enteredTime} onChange={timeChangeHandler}>
                    <option value='01'>01h 32m</option>
                    <option value='02'>02h 32m</option>
                    <option value='03'>03h 32m</option>
                    <option value='04'>04h 32m</option>
                    <option value='05'>05h 32m</option>
                </SelectPlanner>

            </InputsContainer>
            <ButtonsContainer>
                <ActionButton type='submit' color='#00BA88'>+ Add to calendar</ActionButton>
                <ActionButton type='button' color='#FF3D1F' onClick={deleteDataHandler}>- Delete All</ActionButton>
            </ButtonsContainer>

        </ActionsForm>
    );
}

export default PlannerAction;