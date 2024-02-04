import React from "react";
import "./HomePage.scss";
import ImageUpload from "../../ImageUpload/presentation/ImageUpload";

const HomePage = () => {
	return (
		<div className="home-page">
			<div className="home-page-title">VH IMAGE GALLERY</div>

			<div className="home-page-section">
				<div className="home-page-subtitle"></div>
			</div>
			<ImageUpload />
		</div>
	);
};

export default HomePage;
