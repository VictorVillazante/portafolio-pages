import '../styled-components/workExperienceSectionCard.css';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const WorkExperienceSectionCard = ({intership})=>{
    const {id,enterpriseName,startDate,endDate,enterprisePhoto,certified,shortDescription}=intership;
    return(
        <div className='work-experience-container'>
            <Link to={`/intership/${id}`}>
                <div  className="work-experience-card">
                    <p>{enterpriseName}</p>
                    <p>{startDate} - {endDate}</p>
                    <p>{shortDescription}</p>
                </div>
                <img src={require(enterprisePhoto+"")} alt=""/>
            </Link>
            
        </div>
    );
}
export default WorkExperienceSectionCard;