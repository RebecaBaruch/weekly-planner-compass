import React, { useState, useContext } from "react";

import { Wrapper } from '../../global/globalStyles';
import PlannerHeader from "../../components/PlannerHeader";
import PlannerActions from "../../components/PlannerActions";

import { CardsWrapper, Card, MainContainer, Planner } from './styled';

import AllTasks from "../../components/AllTasks";
import TimeTask from "../../components/TimeTask";

const all_tasks = [
    {
      id: 1,
      desc: 'Teste',
      day: 'monday',
      time: '11h24'
    }
  ];

function Dashboard() {
    const [tasks, setTasks] = useState(all_tasks);

    const addTaskHandler = (task) => {
        setTasks(prevTasks => {
            task = {
                id: prevTasks.length + 1,
                ...task
            }
            console.log(task);
            return [task, ...prevTasks]
        });
    }

    const deleteAllHandler = () => {
        setTasks('');
    }

    
    console.log(all_tasks.find(tasks => tasks.day === 'tuesday'));

    return(
        <Wrapper>
           <PlannerHeader />

            <MainContainer>
                <PlannerActions onSaveTaskData={addTaskHandler} deleteDataHandler={deleteAllHandler} />
                <Planner>
                    <CardsWrapper>
                        <Card className='monday'>Monday</Card>
                        <Card className='tuesday'>Tuesday</Card>
                        <Card className='wednesday'>Wednesday</Card>
                        <Card className='thursday'>Thursday</Card>
                        <Card className='friday'>Friday</Card>
                        <Card className='saturday'>Saturday</Card>
                        <Card className='sunday'>Sunday</Card>
                    </CardsWrapper>
                    <TimeTask taskTime='Time' color='white' />

                    <AllTasks tasks={ tasks } />
                </Planner>
            </MainContainer>
        </Wrapper>
    );
}

export default Dashboard;