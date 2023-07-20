import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar  from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx"
import Footer from "./footer.jsx"
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar/>
			<Jumbotron/>
			<div className="container-fluid d-flex justify-content-center">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
