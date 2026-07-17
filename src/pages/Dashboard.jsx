import Navbar from "../components/Navbar";
import Hero from "../components/Hero";


function Dashboard(){

return (

<>

<Navbar/>


<div className="container">


<h1>
EventHub Dashboard
</h1>


<div className="stats">


<div className="stat-card">

<h2>0</h2>

<p>
My Events
</p>

</div>



<div className="stat-card">

<h2>0</h2>

<p>
Upcoming
</p>

</div>



<div className="stat-card">

<h2>0</h2>

<p>
Completed
</p>

</div>


</div>


</div>

</>

)

}


export default Dashboard;