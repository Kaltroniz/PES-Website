import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/pagesStyles/OurTeamPage.css";
import TeamsCard from "../components/TeamsCard";

import Saikat from "../assets/governingbody/Saikat.jpeg";
import agrasen from "../assets/governingbody/Agrasen.jpg";
import brajesh from "../assets/governingbody/Brajesh.jpeg";
import Vipul from "../assets/governingbody/Vipul.jpeg";
import Dhruv from "../assets/governingbody/Dhruv.jpeg";
import madhav from "../assets/governingbody/madhav.jpeg";
import Muskan from "../assets/governingbody/Muskan.jpeg";
import Pooja from "../assets/governingbody/Pooja.jpeg";
import shiva from "../assets/governingbody/shiva.jpg";
import Vivek from "../assets/governingbody/Vivek.jpeg";

import directorPic from "../assets/patronAndMentor/rajeev_sir.jpeg";
import pps_sir from "../assets/patronAndMentor/pps_sir.jpeg";
import harpreet_sir from "../assets/patronAndMentor/harpreet_sir.jpg";

import paragGuptaPic from "../assets/webdevelopers/parag_gupta.jpg";
import webdev_1 from "../assets/webdevelopers/webdev_1.jpg";
import webdev_2 from "../assets/webdevelopers/webdev_2.jpg";
import webdev_3 from "../assets/webdevelopers/webdev_3.jpg";
import webdev_4 from "../assets/webdevelopers/webdev_4.jpg";
import webdev_5 from "../assets/webdevelopers/webdev_5.jpg";
import webdev_6 from "../assets/webdevelopers/webdev_6.jpg";
import webdev_7 from "../assets/webdevelopers/webdev_7.jpg";

import PageHeader from '../components/PageHeader';
import HeaderImage from "../assets/header-testing.jpg";

function PastTeam2025_2026() {
    return (
        <>
            <PageHeader
                title="Team 2025-2026"
                image={HeaderImage}
            />

            <div className="TeamPage">
                <section className="PatronAndMentor OurTeam">
                    <h1>Patron and Mentors</h1>
                    <div className="Cards">
                        <TeamsCard
                            img={directorPic}
                            name="Prof. Rajeev Ahuja"
                            designation="Director, IIT Ropar"
                            email="2021meb1322@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img={pps_sir}
                            name="Dr. Pushpendra P. Singh"
                            designation="Associate Professor, IIT Ropar"
                            email="2021csb1137@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img={harpreet_sir}
                            name="Prof. Harpreet Singh"
                            designation="Professor, IIT Ropar"
                            email="2021eeb1204@iitrpr.ac.in"
                        />
                    </div>
                </section>

                <section className="GoverningBody OurTeam">
                    <h1>Governing Body (2025 - 2026)</h1>
                    <div className="Cards">
                        <TeamsCard
                            img={brajesh}
                            name="Brajesh Khokad"
                            designation="President"
                            email="2023csb1111@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img={Saikat}
                            name="Saikat Biswas"
                            designation="Vice President"
                            email="saikat.23mez0016@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img={shiva}
                            name="Shiva Kumar"
                            designation="Secretary-1"
                            email="2023eeb1244@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img={Pooja}
                            name="Pooja Pachar"
                            designation="Secretary-2"
                            email="2023meb1367@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img={agrasen}
                            name="Agrasen Yadav"
                            designation="Treasurer"
                            email="2023meb1327@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img={Muskan}
                            name="Muskan Yadav"
                            designation="Paathshala Lead"
                            email="2024bbm1003@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img={Vipul}
                            name="Vipul Kumar"
                            designation="Office Team Lead"
                            email="2023eeb1254@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img={Vivek}
                            name="Vivek C K"
                            designation="Social Media Lead"
                            email="2023eeb1255@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img={madhav}
                            name="Madhav Kundnani"
                            designation="Outreach Lead"
                            email="2024epb1272@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img={Dhruv}
                            name="Dhruv Sharma"
                            designation="PR and Sponsorship Lead"
                            email="2024bbm1001@iitrpr.ac.in"
                        />
                    </div>
                </section>

                <section className="Web-developer OurTeam">
                    <h1>Web Developers (2025 - 2026)</h1>
                    <div className="Cards">
                        <TeamsCard
                            img={paragGuptaPic}
                            name="Parag Gupta"
                            designation="Front-end Lead"
                            email="2025chb1137@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img={webdev_1}
                            name="Krishan Kant"
                            designation="Front-end Lead"
                            email="2021meb1293@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img={webdev_2}
                            name="Meriga.Sai Lahari "
                            designation="Back-end Lead"
                            email="2023eem1006@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img={webdev_3}
                            name="Upasna"
                            designation="Back-end Team"
                            email="2021csz0002@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img={webdev_4}
                            name="Harshit Kumar"
                            designation="Back-end Team"
                            email="2021csb1093@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img={webdev_5}
                            name="Gopi Varshini"
                            designation="Front-end Team"
                            email="2022mcb1264@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img={webdev_6}
                            name="Jay Goel"
                            designation="Front-end Team"
                            email="2022eeb1178@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img={webdev_7}
                            name="Nalin Angrish"
                            designation="Back-end Team"
                            email="2023meb1360@iitrpr.ac.in"
                        />
                    </div>
                </section>

                <div style={{ textAlign: "center", margin: "30px 0" }}>
                    <Link className='LinkForPastTeams' to="/pastteams">
                        <button type="button" className="PastTeamsButton"><b>&larr; Back to Past Teams</b></button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default PastTeam2025_2026;
