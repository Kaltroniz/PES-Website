import { useState, useEffect } from "react"
import "../styles/pagesStyles/CompetitionsPage.css"
import Hero from '../components/Hero';
import heroImg from '../assets/hero_image2.jpg';
import Events from "../components/Events"

import request from "../request.js";

function CompetitionsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request.get(`${import.meta.env.VITE_API_BASE}/events/list?type=letstalk`)
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        console.log("Let's Talk events fetched successfully");
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false)); 
  }, []);

  return (
    <>
    <Hero
      heroSliderImages={[heroImg]}
      heroHeading="Let's Talk"
    />
      <Events>
        {events.length ? events.map(event => (
          <Events.Tile
            key={event.id}
            title={event.title}
            date={event.date}
            image={event.images}
            description={event.description}
            id={event._id}
          />
        )) : <><br/><br/><h1>No Let's Talk Events available...</h1></>}
      </Events>
      {loading && <><br/><br/><h1>Loading ...</h1></>} 
    </>
  )
}

export default CompetitionsPage