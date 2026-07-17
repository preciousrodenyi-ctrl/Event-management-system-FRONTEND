function EventCard({event}){


return(

<div className="card">


<img
src={event.image}
alt={event.title}
className="event-image"
/>


<h2>
{event.title}
</h2>


<p>
 {event.location}
</p>


<p>
{event.date}
</p>


<p>
Category: {event.category}
</p>


<button>
Edit
</button>


<button>
Delete
</button>


</div>

)

}


export default EventCard;