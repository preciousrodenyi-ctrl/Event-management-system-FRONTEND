import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTag,
  FaArrowLeft
} from "react-icons/fa";


function EventDetails() {


  const { id } = useParams();

  const navigate = useNavigate();


  const [event,setEvent] = useState(null);

  const [loading,setLoading] = useState(true);



  useEffect(()=>{

    getEvent();

  },[]);



  async function getEvent(){

    try{

      const response = await api.get(
        `/events/${id}`
      );

      setEvent(response.data);


    }catch(error){

      console.log(error);

    }
    finally{

      setLoading(false);

    }

  }



  async function deleteEvent(){


    const confirmDelete = window.confirm(
      "Delete this event permanently?"
    );


    if(!confirmDelete)
      return;



    try{

      await api.delete(
        `/events/${id}`
      );


      navigate("/events");


    }catch(error){

      console.log(error);

    }

  }




  if(loading){

    return(

      <div className="loading-page">

        <div className="loading-spinner"></div>

        <p>
          Loading event details...
        </p>

      </div>

    );

  }





  if(!event){

    return(

      <div className="empty-state">

        <h2>
          Event Not Found
        </h2>


        <Link
          to="/events"
          className="primary-button"
        >

          View Events

        </Link>


      </div>

    );

  }




  return(


    <div className="event-details-page">


      <Link
        to="/events"
        className="back-link"
      >

        <FaArrowLeft /> 
        Back to Events

      </Link>





      <div className="event-details-card">



        <div className="event-details-banner">

          

        </div>




        <div className="event-details-content">



          <span className="event-category">

            {event.category || "General"}

          </span>





          <h1>

            {event.title}

          </h1>





          <div className="event-details-info">



            <div>

              <FaCalendarAlt />

              <section>

                <strong>
                  Date
                </strong>

                <p>
                  {event.date}
                </p>

              </section>

            </div>





            <div>

              <FaMapMarkerAlt />

              <section>

                <strong>
                  Location
                </strong>

                <p>
                  {event.location}
                </p>

              </section>

            </div>





            <div>

              <FaTag />

              <section>

                <strong>
                  Category
                </strong>

                <p>
                  {event.category}
                </p>

              </section>

            </div>



          </div>






          <div className="event-description">


            <h2>
              About This Event
            </h2>


            <p>
              {event.description}
            </p>


          </div>






          <div className="event-actions">


            <Link

              to={`/events/${event.id}/edit`}

              className="edit-button"

            >

               Edit Event

            </Link>





            <button

              onClick={deleteEvent}

              className="delete-button"

            >

               Delete Event

            </button>


          </div>



        </div>



      </div>



    </div>


  );

}


export default EventDetails;