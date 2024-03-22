import { useParams } from "react-router-dom";
import "../styled-components/intershipDetailScreen.css";
import { useState } from "react";
import WorkExperienceSection from "../components/WorkExperienceSection";
import {getIntershipById} from "../services/getIntershipById";
const IntershipDetailScreen=()=>{
    const isSelectedShortVideo=useState(true);
    const buttonTextOption=useState("Ver video largo");
    const { id } = useParams();
    const intershipDetail=getIntershipById(id);

    return(
        <div className="container">
            <div className="intership-detail-container">
                <div className="intership-video">
                    <button>{buttonTextOption}</button>
                </div>
                <div className="intership-info">
                    <div className="intership-activities">
                        <ul>
                            {intershipDetail["activities"].map((activity)=><li>{activity}</li>)}
                        </ul>
                    </div>     
                    <div className="intership-technologies">
                        <ul>
                            {intershipDetail["technologies"].map((technology)=><li>{technology}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <WorkExperienceSection/>
        </div>
        // <div style={{ width: '100vw', height: '100px' }}>
        // </div>
    );
}
export default IntershipDetailScreen;