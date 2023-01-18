import React from "react";
import { Wrapper } from '../../global/globalStyles';
import PlannerHeader from "../../components/PlannerHeader";
import PlannerActions from "../../components/PlannerActions";

function Dashboard() {
    return(
        <Wrapper>
           <PlannerHeader />

           <PlannerActions />
        </Wrapper>
    );
}

export default Dashboard;