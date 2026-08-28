import { Link } from 'react-router-dom';
import "../styles/pagesStyles/OurTeamPage.css";
import TeamsCard from "../components/TeamsCard";

import directorPic from "../assets/patronAndMentor/rajeev_sir.jpeg";
import pps_sir from "../assets/patronAndMentor/pps_sir.jpeg";
import harpreet_sir from "../assets/patronAndMentor/harpreet_sir.jpg";

import sonaliPic from "../assets/governingbody/Sonali.png";
import riyaPic from "../assets/governingbody/Riya.png";
import divyanshuPic from "../assets/governingbody/Divyanshu.png";
import surbhiPic from "../assets/governingbody/Surbhi.png";
import ankitPic from "../assets/governingbody/Ankit.png";
import divanshuRathorPic from "../assets/governingbody/Divanshu_Rathor.png";
import vedPic from "../assets/governingbody/Ved.png";
import nikhilPic from "../assets/governingbody/Nikhil.png";
import namanPic from "../assets/governingbody/Naman.png";
import anitaPic from "../assets/governingbody/Anita.png";
import adityaPic from "../assets/governingbody/Aditya.png";
import shivamPic from "../assets/governingbody/Shivam.png";
import priyanshuPic from "../assets/governingbody/Priyanshu.png";

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

function OurTeamPage(){
    return(
        <>  
            <PageHeader
                title = "Our Team"
                image = {HeaderImage}
            />

            <div className="TeamPage">
                <section className="PatronAndMentor OurTeam">
                    <h1>Patron and Mentors</h1>
                    <div className="Cards">
                        <TeamsCard
                            img = {directorPic}
                            name = "Prof. Rajeev Ahuja"
                            designation = "Director, IIT Ropar"
                        />
                        <TeamsCard
                            img = {pps_sir}
                            name = "Dr. Pushpendra P. Singh"
                            designation = "Associate Professor, IIT Ropar"
                        />
                        <TeamsCard
                            img = {harpreet_sir}
                            name = "Prof. Harpreet Singh"
                            designation = "Professor, IIT Ropar"
                        />
                    </div>
                </section>

                <section className="GoverningBody OurTeam">
                    <h1>Governing Body</h1>
                    <div className="Cards">
                        <TeamsCard
                            img = {sonaliPic}
                            name = "Sonali Dehariya"
                            designation = "President"
                        />
                        <TeamsCard
                            img = {riyaPic}
                            name = "Riya Thakur"
                            designation = "Vice President"
                        />
                        <TeamsCard
                            img = {divyanshuPic}
                            name = "Divyanshu Raghav"
                            designation = "Secretary- 1"
                        />
                        <TeamsCard
                            img = {surbhiPic}
                            name = "Surbhi Goyal"
                            designation = "Secretary- 2"
                        />
                        <TeamsCard
                            img = {ankitPic}
                            name = "Ankit Raj"
                            designation = "Treasurer"
                        />
                        <TeamsCard
                            img = {divanshuRathorPic}
                            name = "Divanshu Rathor"
                            designation = "Member"
                        />
                        <TeamsCard
                            img = {vedPic}
                            name = "Ved Gupta"
                            designation = "Member"
                        />
                        <TeamsCard
                            img = {nikhilPic}
                            name = "Nikhil Singh Rajpoot"
                            designation = "Member"
                        />
                        <TeamsCard
                            img = {namanPic}
                            name = "Naman Kapoor"
                            designation = "Member"
                        />
                        <TeamsCard
                            img = {anitaPic}
                            name = "Anita Layal"
                            designation = "Member"
                        />
                        <TeamsCard
                            img = {adityaPic}
                            name = "Aditya Gupta"
                            designation = "Member"
                        />
                        <TeamsCard
                            img = {shivamPic}
                            name = "Shivam Pal"
                            designation = "Member"
                        />
                        <TeamsCard
                            img = {priyanshuPic}
                            name = "Priyanshu Devrani"
                            designation = "Member"
                        />
                    </div>
                </section>

                <section className="Web-developer OurTeam">
                    <h1>Web Developers</h1>
                    <div className="Cards">
                        <TeamsCard
                            img = {paragGuptaPic}
                            name = "Parag Gupta"
                            designation = "Front-end Lead"
                            email = "2025chb1137@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {webdev_1}
                            name = "Krishan Kant"
                            designation = "Front-end Lead"
                            email = "2021meb1293@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {webdev_2}
                            name = "Meriga.Sai Lahari "
                            designation = "Back-end Lead"
                            email = "2023eem1006@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {webdev_3}
                            name = "Upasna"
                            designation = "Back-end Team"
                            email = "2021csz0002@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {webdev_4}
                            name = "Harshit Kumar"
                            designation = "Back-end Team"
                            email = "2021csb1093@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {webdev_5}
                            name = "Gopi Varshini"
                            designation = "Front-end Team"
                            email = "2022mcb1264@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {webdev_6}
                            name = "Jay Goel"
                            designation = "Front-end Team"
                            email = "2022eeb1178@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {webdev_7}
                            name = "Nalin Angrish"
                            designation = "Back-end Team"
                            email = "2023meb1360@iitrpr.ac.in"
                        />
                    </div>
                </section>

                <Link className='LinkForPastTeams' to="/pastteams">
                    <button type="button" className="PastTeamsButton"><b>Past Teams</b> &#10148;</button>
                </Link>
            </div>
        </>
    );
}

export default OurTeamPage;
