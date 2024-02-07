import React, { useState } from "react";
import "./HomePage.scss";
import ImageUpload from "../../ImageUpload/presentation/ImageUpload";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import pic from "../../../imgs/home-pic.jpeg";

const HomePage = () => {
	const theme = createTheme({
		palette: {
			primary: {
				main: "#1a1a1a", //Primary Color
			},
			secondary: {
				main: "#F9F6F5", //Sufrace color
			},
		},
	});
	const [showModal, setShowModal] = useState(false);

	const handleOpenModal = () => {
		setShowModal(true);
	};

	return (
		<div className="home-page">
			<div className="home-page-title">VH IMAGE GALLERY</div>

			<div className="home-page-section">
				<div className="home-page-subtitle">
					Explore the World of Art: Discover, Categorize, and Embrace Diversity
					in Creativity
				</div>
				<div className="paragraph">
					Simply upload your artwork, and our advanced system will categorize it
					into the appropriate gallery based on its style and theme. Explore,
					share, and experience the diverse world of art, all at your
					fingertips.
				</div>
				<button className="image-upload-button" onClick={handleOpenModal}>
					Press Here
				</button>
			</div>
			<ThemeProvider theme={theme}>
				{showModal && <ImageUpload onClose={() => setShowModal(false)} />}
			</ThemeProvider>
		</div>
	);
};

export default HomePage;
