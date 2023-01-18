import React, { useState } from "react";

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
      day: '11/08/2003',
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
            return [task, ...prevTasks]
        });
    }

    const deleteAllHandler = () => {
        setTasks('');
    }

    // const [filteredYear, setFilteredYear] = useState('2020');

    // const filterChangeHandler = (selectedYear) => {
    //     setFilteredYear(selectedYear);
    //     console.log(selectedYear);
    // }

    // const filteredExpenses = props.items.filter(expense => {
    //     return expense.date.getFullYear().toString() === filteredYear;
    // }); 

    const showMondayHandler = (e) => {
        console.log(e.target.classList);
    };


    return(
        <Wrapper>
           <PlannerHeader />

            <MainContainer>
                <PlannerActions onSaveTaskData={addTaskHandler} deleteDataHandler={deleteAllHandler} />
                <Planner>
                    <CardsWrapper>
                        <Card className='monday' onChange={showMondayHandler}>Monday</Card>
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