import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import { FaMapMarkerAlt, FaCalendar } from "react-icons/fa";


function Events() {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {

    fetchEvents();

  }, []);



  async function fetchEvents(){

    try {

      const response = await api.get("/events");

      setEvents(response.data);

    } catch(error){

      console.log(error);

    } finally {

      setLoading(false);

    }

  }



  if(loading){

    return (

      <div className="loading-page">

        <div className="loading-spinner"></div>

        <p>
          Loading events...
        </p>

      </div>

    );

  }



  return (

    <div className="events-page">


      {/* HEADER */}

      <div className="events-header">

        <div>

          <span className="section-label">
            EVENT DISCOVERY
          </span>


          <h1>
            Explore Events
          </h1>


          <p>
            Discover exciting events happening around you.
          </p>


        </div>



        <Link
          to="/create-event"
          className="primary-button"
        >
          + Create Event
        </Link>


      </div>




      {/* EVENTS GRID */}


      {

        events.length === 0 ? (

          <div className="empty-state">

            <h2>
              No Events Yet
            </h2>

            <p>
              Create your first event and start building experiences.
            </p>


            <Link
              to="/create-event"
              className="primary-button"
            >
              Create Event
            </Link>


          </div>


        ) : (


          <div className="events-grid">


          {

            events.map((event)=>(


              <div
                className="event-card"
                key={event.id}
              >


                <div className="event-image">

                  🎉

                </div>




                <div className="event-content">


                  <span className="event-category">

                    {event.category || "General"}

                  </span>



                  <h2>

                    {event.title}

                  </h2>



                  <p>

                    {event.description}

                  </p>



                  <div className="event-info">

                    <FaCalendar />

                    {event.date}


                  </div>



                  <div className="event-info">

                    <FaMapMarkerAlt />

                    {event.location}


                  </div>



                  <Link

                    to={`/events/${event.id}`}

                    className="event-details-link"

                  >

                    View Details →

                  </Link>



                </div>


              </div>


            ))

          }


          </div>


        )

      }



    </div>


  );

}


export default Events;