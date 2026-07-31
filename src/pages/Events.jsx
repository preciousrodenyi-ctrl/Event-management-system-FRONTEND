import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaArrowRight
} from "react-icons/fa";


function Events() {


  const [events,setEvents] = useState([]);

  const [loading,setLoading] = useState(true);




  useEffect(()=>{

    fetchEvents();

  },[]);





  async function fetchEvents(){

    try{


      const response = await api.get(
        "/events"
      );


      setEvents(response.data);



    }catch(error){

      console.log(error);


    }finally{

      setLoading(false);

    }

  }





  if(loading){

    return(

      <div className="loading-page">

        <div className="loading-spinner"></div>

        <p>
          Finding amazing events...
        </p>

      </div>

    );

  }





  return(


    <div className="events-page">



      <div className="events-header">


        <div>


          <span className="section-label">

            DISCOVER EVENTS

          </span>


          <h1>

            Upcoming Experiences 

          </h1>


          <p>

            Find conferences, weddings, concerts,
            workshops and more.

          </p>


        </div>




        <Link

          to="/create-event"

          className="primary-button"

        >

          + Create Event

        </Link>



      </div>







      {
        events.length === 0 ?


        (

          <div className="empty-state">


            <h2>

              No Events Available

            </h2>


            <p>

              Be the first person to create an amazing event.

            </p>



            <Link

              to="/create-event"

              className="primary-button"

            >

              Create First Event

            </Link>



          </div>


        )


        :


        (


          <div className="events-grid">


          {

            events.map((event)=>(



              <div

                className="event-card"

                key={event.id}

              >



                <div className="event-card-banner">


                  


                </div>





                <div className="event-card-content">



                  <span className="event-category">


                    {event.category || "General"}


                  </span>





                  <h2>

                    {event.title}

                  </h2>





                  <p className="event-description">


                    {
                      event.description.length > 120

                      ?

                      event.description.substring(0,120)
                      + "..."

                      :

                      event.description
                    }


                  </p>






                  <div className="event-info">


                    <FaCalendarAlt/>


                    <span>

                      {event.date}

                    </span>


                  </div>






                  <div className="event-info">


                    <FaMapMarkerAlt/>


                    <span>

                      {event.location}

                    </span>


                  </div>






                  <Link

                    to={`/events/${event.id}`}

                    className="event-details-link"

                  >

                    View Event

                    <FaArrowRight/>

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