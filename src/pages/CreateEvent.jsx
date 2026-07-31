import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";


function CreateEvent() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({

    title:"",
    description:"",
    location:"",
    date:"",
    category:""

  });


  const [error,setError] = useState("");

  const [loading,setLoading] = useState(false);



  function handleChange(e){

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  }



  async function handleSubmit(e){

    e.preventDefault();

    setLoading(true);

    setError("");

    try{

      await api.post(
        "/events",
        formData
      );


      navigate("/events");


    }catch(err){

      console.log(err);


      setError(
        err.response?.data?.error ||
        "Unable to create event"
      );


    }finally{

      setLoading(false);

    }

  }



  return (

    <div className="form-page">


      <Link 
        to="/events"
        className="back-link"
      >
        ← Back to Events
      </Link>



      <div className="event-form">


        <div className="form-header">

          <h1>
            🎉 Create New Event
          </h1>

          <p>
            Add your event details and share it with your audience.
          </p>

        </div>



        {
          error && (

            <div className="error-message">

              {error}

            </div>

          )
        }



        <form onSubmit={handleSubmit}>


          <label>
            Event Title
          </label>


          <input

            type="text"

            name="title"

            placeholder="Example: Tech Conference 2026"

            value={formData.title}

            onChange={handleChange}

            required

          />



          <label>
            Description
          </label>


          <textarea

            name="description"

            placeholder="Tell people about your event..."

            rows="5"

            value={formData.description}

            onChange={handleChange}

            required

          />



          <label>
            Location
          </label>


          <input

            type="text"

            name="location"

            placeholder="Example: Nairobi Convention Centre"

            value={formData.location}

            onChange={handleChange}

            required

          />



          <label>
            Event Date
          </label>


          <input

            type="date"

            name="date"

            value={formData.date}

            onChange={handleChange}

            required

          />



          <label>
            Category
          </label>


          <select

            name="category"

            value={formData.category}

            onChange={handleChange}

            required

          >

            <option value="">
              Choose category
            </option>

            <option>
              Conference
            </option>

            <option>
              Wedding
            </option>

            <option>
              Birthday
            </option>

            <option>
              Concert
            </option>

            <option>
              Sports
            </option>

            <option>
              Workshop
            </option>


          </select>




          <button

            className="primary-btn"

            disabled={loading}

          >

            {
              loading
              ?
              "Creating Event..."
              :
              "Create Event 🚀"
            }


          </button>



        </form>


      </div>


    </div>

  );

}


export default CreateEvent;