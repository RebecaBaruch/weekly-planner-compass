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
      desc: ['Teste', 'Teste 01.2'],
      day: 'monday',
      time: '11h24'
    }
  ];

function Dashboard() {
    const [tasks, setTasks] = useState(all_tasks);
    const [filter, setFilter] = useState('monday');

    const addTaskHandler = ({ desc, day, time }) => {
        console.log(desc, day, time);
        let indexTask = tasks.findIndex((task) => {
            return task.day === day && task.time === time;
        });
        
        const newTasks = [...tasks];

        indexTask >= 0 ? 
            newTasks[indexTask].desc.push(desc) : 
            newTasks.push({
                id: newTasks.length + 1,
                day: day,
                time: time,
                desc: [desc]
            });
        
        setTasks(newTasks);
    }

    const deleteItem = (id, index) => {
        const newTasks = [...tasks];

        let indexTask = tasks.findIndex((task) => {
            return task.id === id;
        });

        if(newTasks[indexTask].desc.length === 1) {
            newTasks.splice(indexTask, 1);
        } else {
            newTasks[indexTask].desc.splice(index, 1);
        }

            setTasks(newTasks);
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

                    <AllTasks tasks={ filteredTasks } delItem={deleteItem}/>
                </Planner>
            </MainContainer>
        </Wrapper>
    );
}

export default Dashboard;