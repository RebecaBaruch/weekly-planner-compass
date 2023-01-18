import React from "react";

import { TimeBox } from './styled';

function TimeTask( { taskTime, color } ) {

    return(
        <TimeBox color={ color }>
            { taskTime }
        </TimeBox>
    );
}

export default TimeTask;