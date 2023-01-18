import React from 'react';

import styled from 'styled-components';

import InputPlanner from'./InputPlanner';
import SelectPlanner from './SelectPlanner';
import ActionButton from './ActionButton';

export const ActionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 1rem 1rem;
    width: 100%;
`;

export const InputsForm = styled.form`
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

function PlannerAction() {

    return(
        <ActionsContainer>
            <InputsForm>
                <InputPlanner width='64%' type='text' placeholder='Task or issue' />
                <SelectPlanner width='40%'>
                    <option value='monday'>Monday</option>
                    <option value='tuesday'>Tuesday</option>
                    <option value='thursday'>Thursday</option>
                    <option value='friday'>Friday</option>
                    <option value='saturday'>Saturday</option>
                    <option value='sunday'>Sunday</option>
                </SelectPlanner>
                <SelectPlanner>
                    <option value='01h32m'>01h 32m</option>
                    <option value='02h32m'>02h 32m</option>
                    <option value='03h32m'>03h 32m</option>
                    <option value='04h32m'>04h 32m</option>
                    <option value='05h32m'>05h 32m</option>
                </SelectPlanner>
            </InputsForm>

            <ButtonsContainer>
                <ActionButton color='#00BA88'>+ Add to calendar</ActionButton>
                <ActionButton  color='#FF3D1F'>- Delete All</ActionButton>
            </ButtonsContainer>
        </ActionsContainer>
    );
}

export default PlannerAction;