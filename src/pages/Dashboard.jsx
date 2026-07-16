import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Dashboard</h1>

        <br />

        <div className="card">
          <h2>Welcome to EventHub Planner</h2>

          <p>Manage all your personal events in one place.</p>

          <br />

          <h3>Quick Stats</h3>

          <p>Upcoming Events: 2</p>
          <p>Completed Events: 5</p>
          <p>Cancelled Events: 1</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;