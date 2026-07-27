import {
  useEffect,
  useState
} from "react";

import api from "../services/api";


function Dashboard() {

  const [user, setUser] =
    useState(null);


  useEffect(() => {

    async function getUser() {

      try {

        const response =
          await api.get(
            "/check_session"
          );


        setUser(
          response.data.user
        );


      } catch (error) {

        console.error(
          error
        );

      }

    }


    getUser();

  }, []);


  return (

    <div className="dashboard">

      <h1>
        Dashboard
      </h1>


      {user && (

        <h2>

          Welcome,{" "}

          {user.username}

        </h2>

      )}


      <p>

        You are successfully logged in.

      </p>

    </div>

  );

}


export default Dashboard;