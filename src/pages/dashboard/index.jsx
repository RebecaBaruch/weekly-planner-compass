import React, { useState, useEffect } from "react";

import { Wrapper, LoadingScreen } from "../../global/globalStyles";
import PlannerHeader from "../../components/PlannerHeader";
import PlannerActions from "../../components/PlannerActions";

import notify from "../../utils/notify";
import PacmanLoader from "react-spinners/PacmanLoader";

import { CardsWrapper, Card, MainContainer, Planner } from "./styled";

import AllTasks from "../../components/AllTasks";
import TimeTask from "../../components/TimeTask";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("monday");
  const [loading, setLoading] = useState(false);

  const token = JSON.parse(localStorage.getItem("isLogged"));

  //get tasks data, api
  const getTaskDataRequest = () => {
    setLoading(true);
    fetch(`https://latam-challenge-2.deta.dev/api/v1/events`, {
      method: "GET",
      headers: {
        "Content-type": `application/json; charset=UTF-8`,
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        if (data.message) {
          console.log("error");
        } else {
          for (const event of data.events) {
            let timeAt = event.createdAt.split("T")[1];
            let time = `${timeAt.split(":")[0]}:${timeAt.split(":")[1]}`;

            const dataTask = {
              id: event._id,
              desc: event.description,
              time: time,
              day: event.dayOfWeek,
              dayColor: event.dayOfWeek,
            };

            addTaskHandler(dataTask);
            notify(data, "success");
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  let newTasks = [];

  useEffect(() => {
    resetState();
  }, []);

  const resetState = () => {
    newTasks = [];
    setTasks([]);
    getTaskDataRequest();
  };

  //function for adding tasks
  const addTaskHandler = (dataTask) => {
    const indexTask = newTasks.findIndex((task) => {
      return task.day === dataTask.day && task.time === dataTask.time;
    });

    indexTask >= 0
      ? newTasks[indexTask].desc.push({
          id: dataTask.id,
          desc: dataTask.desc,
        })
      : newTasks.push({
          id: dataTask.id + 1,
          day: dataTask.day,
          time: dataTask.time,
          desc: [
            {
              id: dataTask.id,
              desc: dataTask.desc,
            },
          ],
        });

    setTasks(newTasks);
  };

  //function to delete specific tasks
  const deleteItem = (id) => {
    fetch(`https://latam-challenge-2.deta.dev/api/v1/events/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then(() => {
        resetState();
      })
      .then((data) => {
        notify(data, "success");
      });
  };

  //function to delete all tasks
  const deleteAllHandler = () => {
    fetch(
      `https://latam-challenge-2.deta.dev/api/v1/events?dayOfWeek=${filter}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      }
    )
      .then(() => {
        resetState();
      })
      .then((data) => {
        notify(data, "success");
      });
  };

  //filter the tasks
  const filteredTasks = tasks.filter((item) => {
    return item.day === filter;
  });

  return (
    <Wrapper>
      <PlannerHeader />

      <MainContainer>
        <PlannerActions
          getTaskDataRequest={getTaskDataRequest}
          onSaveTaskData={addTaskHandler}
          deleteDataHandler={deleteAllHandler}
        />
        <Planner>
          <CardsWrapper>
            <Card className="monday" onClick={() => setFilter("monday")}>
              Monday
            </Card>
            <Card className="tuesday" onClick={() => setFilter("tuesday")}>
              Tuesday
            </Card>
            <Card className="wednesday" onClick={() => setFilter("wednesday")}>
              Wednesday
            </Card>
            <Card className="thursday" onClick={() => setFilter("thursday")}>
              Thursday
            </Card>
            <Card className="friday" onClick={() => setFilter("friday")}>
              Friday
            </Card>
            <Card className="saturday" onClick={() => setFilter("saturday")}>
              Saturday
            </Card>
            <Card className="sunday" onClick={() => setFilter("sunday")}>
              Sunday
            </Card>
          </CardsWrapper>
          <TimeTask taskTime="Time" color="white" />

          {loading && (
            <LoadingScreen bg='task'>
              <PacmanLoader  color="#E9B425" size={20} loading={loading} />
            </LoadingScreen>
          )}
          <AllTasks tasks={filteredTasks} delItem={deleteItem} />
        </Planner>
      </MainContainer>
    </Wrapper>
  );
}

export default Dashboard;
