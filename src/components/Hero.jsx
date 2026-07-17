import heroImage from "../assets/hero.jpg";


function Hero(){

return (

<section className="hero">

<div className="hero-text">

<h1>
Plan Your Events Easily
</h1>

<p>
Create, manage and organize your events in one place.
</p>

<button>
Get Started
</button>

</div>


<img 
src={heroImage}
alt="events"
/>


</section>

)

}


export default Hero;