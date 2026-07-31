import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });


  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");



  function handleChange(e) {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  }




  async function handleSubmit(e) {

    e.preventDefault();

    setLoading(true);

    setError("");



    try {


      const response = await api.post(
        "/signup",
        formData
      );



      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );



      alert("🎉 Account created successfully!");



      navigate("/dashboard");



    } catch (err) {


      console.error(
        err.response?.data || err.message
      );



      setError(

        err.response?.data?.error ||

        "Signup failed. Please try again."

      );


    } finally {


      setLoading(false);


    }

  }



  return (

    <div className="auth-page">


      <div className="auth-card">


        <p className="section-label">
          JOIN EVENTHUB
        </p>



        <h1>
          Create Account
        </h1>



        <p className="auth-subtitle">
          Create your account and start managing events.
        </p>




        {error && (

          <div className="error-message">

            {error}

          </div>

        )}





        <form onSubmit={handleSubmit}>



          <label>
            Username
          </label>


          <input

            type="text"

            name="username"

            placeholder="Choose a username"

            value={formData.username}

            onChange={handleChange}

            required

          />




          <label>
            Email
          </label>


          <input

            type="email"

            name="email"

            placeholder="Enter your email"

            value={formData.email}

            onChange={handleChange}

            required

          />




          <label>
            Password
          </label>



          <div className="password-container">


            <input

              type={
                showPassword
                ? "text"
                : "password"
              }

              name="password"

              placeholder="Create a password"

              value={formData.password}

              onChange={handleChange}

              minLength="6"

              required

            />



            <button

              type="button"

              onClick={() =>
                setShowPassword(!showPassword)
              }

            >

              {
                showPassword
                ? "Hide"
                : "Show"
              }

            </button>


          </div>




          <button

            type="submit"

            className="auth-button"

            disabled={loading}

          >

            {

              loading

              ? "Creating Account..."

              : "Sign Up"

            }


          </button>



        </form>




        <div className="auth-footer">


          Already have an account?


          <Link to="/login">

            {" "}Login

          </Link>



        </div>



      </div>


    </div>

  );

}


export default Signup;