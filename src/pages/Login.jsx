import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    username: "",
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
        "/login",
        formData
      );



      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );



      alert(`Welcome back, ${response.data.user.username}! 🎉`);



      navigate("/dashboard");



    } catch (err) {


      console.error(
        err.response?.data || err.message
      );



      setError(

        err.response?.data?.error ||

        "Invalid username or password."

      );


    } finally {


      setLoading(false);


    }

  }





  return (

    <div className="auth-page">


      <div className="auth-card">


        <p className="section-label">
          EVENTHUB LOGIN
        </p>




        <h1>
          👋 Welcome Back
        </h1>




        <p className="auth-subtitle">

          Login to manage your events.

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

            placeholder="Enter your username"

            value={formData.username}

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

              placeholder="Enter your password"

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

              ? "Logging in..."

              : "Login"

            }


          </button>




        </form>





        <div className="auth-footer">


          <Link to="/forgot-password">

            Forgot Password?

          </Link>




          <br />
          <br />



          Don't have an account?



          <Link to="/signup">

            {" "}Create Account

          </Link>




        </div>




      </div>


    </div>

  );

}


export default Login;