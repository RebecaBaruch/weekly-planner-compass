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
    const [filteredTasks, setFilteredTasks] = useState([]);

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

    const FilteringHandler = (day) => {
        setFilteredTasks(tasks.filter((item) => {
            return item.day === day;
        }));
    } 

    return(
        <Wrapper>
           <PlannerHeader />

            <MainContainer>
                <PlannerActions onSaveTaskData={addTaskHandler} deleteDataHandler={deleteAllHandler} />
                <Planner>
                    <CardsWrapper>
                        <Card className='monday' onClick={() => FilteringHandler('monday')}>Monday</Card>
                        <Card className='tuesday' onClick={() => FilteringHandler('tuesday')}>Tuesday</Card>
                        <Card className='wednesday' onClick={() => FilteringHandler('wednesday')}>Wednesday</Card>
                        <Card className='thursday' onClick={() => FilteringHandler('thursday')}>Thursday</Card>
                        <Card className='friday' onClick={() => FilteringHandler('friday')}>Friday</Card>
                        <Card className='saturday' onClick={() => FilteringHandler('saturday')}>Saturday</Card>
                        <Card className='sunday' onClick={() => FilteringHandler('sunday')}>Sunday</Card>
                    </CardsWrapper>
                    <TimeTask taskTime='Time' color='white' />

                    <AllTasks tasks={ filteredTasks } />
                </Planner>
            </MainContainer>
        </Wrapper>
    );
}

export default Dashboard;