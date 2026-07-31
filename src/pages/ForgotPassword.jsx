import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);



  function handleSubmit(e) {

    e.preventDefault();


    setLoading(true);

    setMessage("");



    setTimeout(() => {


      setLoading(false);


      setMessage(
        "If this email exists, a password reset link will be sent."
      );



    }, 1500);


  }



  return (

    <div className="auth-page">


      <div className="auth-card">


        <p className="section-label">
          ACCOUNT RECOVERY
        </p>




        <h1>
          Forgot Password?
        </h1>




        <p className="auth-subtitle">

          Enter your email and we will help you recover your account.

        </p>




        {message && (

          <div className="success-message">

            {message}

          </div>

        )}




        <form onSubmit={handleSubmit}>


          <label>
            Email Address
          </label>




          <input

            type="email"

            placeholder="Enter your email"

            value={email}

            onChange={(e) =>
              setEmail(e.target.value)
            }

            required

          />





          <button

            type="submit"

            className="auth-button"

            disabled={loading}

          >

            {

              loading

              ? "Sending..."

              : "Reset Password"

            }


          </button>




        </form>





        <div className="auth-footer">


          Remember your password?



          <Link to="/login">

            {" "}Login

          </Link>




        </div>




      </div>


    </div>

  );

}


export default ForgotPassword;