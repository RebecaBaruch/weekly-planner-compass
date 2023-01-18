import styled from "styled-components";

export const TimeBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 85px;
    height: 85px;
    font-weight: bold;

    background: #FF0024;
    border-bottom: 1px solid #DCDFE3;
    border-radius: 10px;

`

function TimeTask() {
    
    return(
        <TimeBox>
            10h30m
        </TimeBox>
    );
}

export default TimeTask;