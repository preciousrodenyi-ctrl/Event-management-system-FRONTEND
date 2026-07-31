import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { FaCalendarAlt, FaMapMarkerAlt, FaTag } from "react-icons/fa";


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


    }finally{

      setLoading(false);

    }

  }





  async function deleteEvent(){


    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );


    if(!confirmDelete) return;



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
          Loading event...
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
          Back To Events
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
        ← Back to Events
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

              <div>

                <strong>
                  Date
                </strong>

                <p>
                  {event.date}
                </p>

              </div>

            </div>




            <div>

              <FaMapMarkerAlt />

              <div>

                <strong>
                  Location
                </strong>

                <p>
                  {event.location}
                </p>

              </div>

            </div>





            <div>

              <FaTag />

              <div>

                <strong>
                  Category
                </strong>

                <p>
                  {event.category}
                </p>

              </div>

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