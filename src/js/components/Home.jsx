import React from "react";

//include images into your bundle

import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import Cards from "./Cards";


//create your first component
const Home = () => {
	return (
		<>

			<NavBar />

			<HeroSection />
			<div className="d-flex flex-column flex-lg-row flex-wrap justify-content-center mt-3">
				<Cards image="https://picsum.photos/500/321" title="Card Title1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
				<Cards image="https://picsum.photos/500/322" title="Card Title2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
				<Cards image="https://picsum.photos/500/323" title="Card Title3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
				<Cards image="https://picsum.photos/500/324" title="Card Title4" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
			</div>

			<Footer />
		</>

	);
};

export default Home;