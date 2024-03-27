import { useParams } from "react-router-dom";
import "styled-components/intershipDetailScreen.css";
import { useState } from "react";
import WorkExperienceSection from "../components/WorkExperienceSection";
import {getIntershipById} from "../services/getIntershipById";
import React from "react";
import { Link } from "react-router-dom"
const IntershipDetailScreen=()=>{
    const isSelectedShortVideo=useState(true);
    const buttonTextOption=useState("Show large video");
    const { id } = useParams();
    const intershipDetail=getIntershipById(id);
   
    return(
        <div className="container">
            <Link to={`/home`}>
                <div className="go-home">
                    <i class="fa-solid fa-arrow-left"></i>
                    <p>Go to home</p>
                </div>
            </Link>
           
            <div>
                <div className="font-text-important">
                    <img src={`${process.env.PUBLIC_URL}/${intershipDetail["enterprisePhoto"]}`} alt=""/>
                    <h3>{intershipDetail["enterpriseName"]} Intership</h3>
                </div>
                <div className="period-intership">
                    <i class="fa-solid fa-calendar"></i>
                    <p>{intershipDetail["startDate"] } - {intershipDetail["endDate"]}</p>
                </div>
                <p className="intership-large-description">{intershipDetail["largeDescription"]}</p>
            </div>
            <div className="intership-show-certified">
                <button className="button-primary">Email to show certified</button>
            </div>
            <div className="intership-detail-container">
                <div className="intership-video">
                    <iframe
                        width="100%"
                        height="90%"
                        src={intershipDetail["shortVideoUrl"]}
                        title="Video"
                        allowFullScreen
                        id="video"
                        onLoad={() => {}}
                    />
                    <button className="button-primary">{buttonTextOption}</button>
                </div>
                <div className="intership-info">
                    <div className="intership-activities">
                        <h4>Activities</h4>
                        <ul>
                            {intershipDetail["activities"].map((activity)=><li key={activity}>{activity}</li>)}
                        </ul>
                    </div>     
                    <div className="intership-technologies">
                        <h4>Technologies</h4>
                        <ul>
                            {intershipDetail["technologies"].map((technology)=><li key={technology}>{technology}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <WorkExperienceSection />

        </div>        
    );
}
export default IntershipDetailScreen;