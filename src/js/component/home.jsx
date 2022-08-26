import React from "react";
import NavBar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import CardsContainer from "./CardsContainer.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
		<NavBar/>
		<div className="Container w-75 mx-auto">
			<div>
				<Jumbotron/>
				<CardsContainer/>
			</div>
		</div>
		<Footer/>
		</div>
	);
};



export default Home;
