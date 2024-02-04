import React from "react";
import "./HomePage.scss";
import ImageUpload from "../../ImageUpload/presentation/ImageUpload";

const HomePage = () => {
	return (
		<div className="home-page">
			<h1>Welcome to the Home Page</h1>
			<p>This is the starting point of our awesome React application.</p>

			<ImageUpload />
		</div>
	);
};

export default HomePage;
