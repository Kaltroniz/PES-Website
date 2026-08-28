import React from "react";
import { Link } from "react-router-dom";
import "../styles/componentsStyles/PastTeamsCard.css";

function PastTeamsCard(props){
    return(
        <div className="PastTeamCard">
            <h4>Governing Body <br></br> {props.year}</h4>
            {props.to ? (
                <Link to={props.to}>
                    <button className="PastTeamCardButton" type="button">View</button>
                </Link>
            ) : (
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <button className="PastTeamCardButton" type="button">View</button>
                </a>
            )}
        </div>
    );
}

export default PastTeamsCard;