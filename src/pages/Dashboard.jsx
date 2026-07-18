import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    ) || {
      username: "User",
    };

  return (

    <>

      <Navbar />

      <main className="dashboard-page">

        <section className="dashboard-header">

          <div>

            <h1>
              Welcome back, {user.username}! 
            </h1>

            <p>
              Manage your events and discover new experiences.
            </p>

          </div>

          <Link to="/create-event">

            <button>
              + Create Event
            </button>

          </Link>

        </section>


        <section className="stats">

          <div className="stat-card">

            <span className="stat-icon">
              
            </span>

            <h2>
              7
            </h2>

            <p>
              Total Events
            </p>

          </div>


          <div className="stat-card">

            <span className="stat-icon">
              
            </span>

            <h2>
              4
            </h2>

            <p>
              Upcoming Events
            </p>

          </div>


          <div className="stat-card">

            <span className="stat-icon">
              
            </span>

            <h2>
              12
            </h2>

            <p>
              Events Attended
            </p>

          </div>

        </section>


        <section className="dashboard-section">

          <div className="section-heading">

            <h2>
              Quick Actions
            </h2>

          </div>


          <div className="quick-actions">

            <Link to="/events">

              <div className="quick-card">

                <span>
                  🔍
                </span>

                <h3>
                  Explore Events
                </h3>

                <p>
                  Discover exciting events.
                </p>

              </div>

            </Link>


            <Link to="/create-event">

              <div className="quick-card">

                <span>
                  
                </span>

                <h3>
                  Create Event
                </h3>

                <p>
                  Organize your own event.
                </p>

              </div>

            </Link>

          </div>

        </section>

      </main>

    </>

  );

}

export default Dashboard;