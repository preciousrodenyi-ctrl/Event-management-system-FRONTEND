import { useState } from "react";
import { useNavigate } from "react-router-dom";
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


      <div className="event-form">


        <h1>
          Create New Event 🎉
        </h1>


        <p>
          Add your event details and share it with your audience.
        </p>



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

            placeholder="Enter event name"

            value={formData.title}

            onChange={handleChange}

            required

          />




          <label>
            Description
          </label>


          <textarea

            name="description"

            placeholder="Describe your event"

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

            placeholder="Event location"

            value={formData.location}

            onChange={handleChange}

            required

          />





          <label>
            Date
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
              Select category
            </option>


            <option value="Conference">
              Conference
            </option>


            <option value="Wedding">
              Wedding
            </option>


            <option value="Birthday">
              Birthday
            </option>


            <option value="Concert">
              Concert
            </option>


            <option value="Sports">
              Sports
            </option>


          </select>





          <button
            disabled={loading}
          >

            {
              loading
              ?
              "Creating..."
              :
              "Create Event"
            }


          </button>



        </form>


      </div>


    </div>


  );

}


export default CreateEvent;