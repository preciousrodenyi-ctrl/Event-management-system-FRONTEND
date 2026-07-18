import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import CreateEvent from "./pages/CreateEvent";
import EditEvent from "./pages/EditEvent";

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/events"
        element={<Events />}
      />

      <Route
        path="/events/:id"
        element={<EventDetails />}
      />

      <Route
        path="/create-event"
        element={<CreateEvent />}
      />

      <Route
        path="/edit-event/:id"
        element={<EditEvent />}
      />

    </Routes>

  );

}

export default App;