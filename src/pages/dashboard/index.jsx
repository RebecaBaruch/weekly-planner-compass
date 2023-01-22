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
    const [filter, setFilter] = useState([]);

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
        setTasks(prevTasks => {
            return [...prevTasks].filter((item) => {
                return item.day !== filter;
            })
        });
    }

    const filteredTasks = [...tasks].filter((item) => {
            return item.day === filter;
    });
    

    return(
        <Wrapper>
           <PlannerHeader />

            <MainContainer>
                <PlannerActions onSaveTaskData={addTaskHandler} deleteDataHandler={deleteAllHandler} />
                <Planner>
                    <CardsWrapper>
                        <Card className='monday' onClick={() => setFilter('monday')}>Monday</Card>
                        <Card className='tuesday' onClick={() =>  setFilter('tuesday')}>Tuesday</Card>
                        <Card className='wednesday' onClick={() =>  setFilter('wednesday')}>Wednesday</Card>
                        <Card className='thursday' onClick={() =>  setFilter('thursday')}>Thursday</Card>
                        <Card className='friday' onClick={() =>  setFilter('friday')}>Friday</Card>
                        <Card className='saturday' onClick={() =>  setFilter('saturday')}>Saturday</Card>
                        <Card className='sunday' onClick={() =>  setFilter('sunday')}>Sunday</Card>
                    </CardsWrapper>
                    <TimeTask taskTime='Time' color='white' />

                    <AllTasks tasks={ filteredTasks } />
                </Planner>
            </MainContainer>
        </Wrapper>
    );
}

export default Dashboard;