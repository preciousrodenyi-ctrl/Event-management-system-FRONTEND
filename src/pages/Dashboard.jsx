import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>Dashboard</h1>

        <h3>Welcome to EventHub Planner!</h3>

        <p>Manage your personal events from one place.</p>
      </div>
    </>
  );
}

export default Dashboard;