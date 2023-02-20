import React, { useState } from "react";

import { ActionsForm, InputsContainer, ButtonsContainer } from "./styled";

import InputPlanner from "./InputPlanner";
import SelectPlanner from "./SelectPlanner";
import ActionButton from "./ActionButton";

function PlannerAction({ deleteDataHandler, getTaskDataRequest }) {
  const [enteredDesc, setEnteredDesc] = useState("");
  const [enteredDay, setEnteredDay] = useState("monday");
  // const  [enteredTime, setEnteredTime] = useState('');

  const descChangeHandler = (e) => {
    setEnteredDesc(e.target.value);
  };

  const dayChangeHandler = (e) => {
    setEnteredDay(e.target.value);
  };

  //get the user token in the local storage
  const token = JSON.parse(localStorage.getItem("isLogged"));
  console.log(token.token);

  const submitHandler = (e) => {
    e.preventDefault();

    // fetch tasks api
    fetch(`https://latam-challenge-2.deta.dev/api/v1/events`, {
      method: "POST",
      body: JSON.stringify({
        description: enteredDesc,
        dayOfWeek: enteredDay,
      }),
      headers: {
        "Content-type": `application/json; charset=UTF-8`,
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then((res) => {
        getTaskDataRequest();
        console.log(res);
        return res.json();
      })
      .catch((data) => {
        console.log(data);
      });
      setEnteredDay("monday");
      setEnteredDesc('');
      // setEnteredTime('');
    }

  return (
    <ActionsForm onSubmit={submitHandler}>
      <InputsContainer>
        <InputPlanner
          width="64%"
          type="text"
          placeholder="Task or issue"
          value={enteredDesc}
          onChange={descChangeHandler}
        />
        <SelectPlanner
          width="40%"
          value={enteredDay}
          onChange={dayChangeHandler}
        >
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </SelectPlanner>
        {/* <SelectPlanner value={enteredTime} onChange={timeChangeHandler}>
                    <option value='01h32m'>01h 32m</option>
                    <option value='02h32m'>02h 32m</option>
                    <option value='03h32m'>03h 32m</option>
                    <option value='04h32m'>04h 32m</option>
                    <option value='05h32m'>05h 32m</option>
                </SelectPlanner> */}
      </InputsContainer>
      <ButtonsContainer>
        <ActionButton type="submit" color="#00BA88">
          + Add to calendar
        </ActionButton>
        <ActionButton type="button" color="#FF3D1F" onClick={deleteDataHandler}>
          - Delete All
        </ActionButton>
      </ButtonsContainer>
    </ActionsForm>
  );
}

export default PlannerAction;
