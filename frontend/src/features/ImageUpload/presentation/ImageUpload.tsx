import React, { useState } from "react";
import { ImageRepositoryImpl } from "../ImageRepo/ImageRepo";

const ImageUpload = () => {
	const [file, setFile] = useState<File | null>(null);
	const [galleryType, setGalleryType] = useState<string>("");
	const [uploadStatus, setUploadStatus] = useState<string>("");

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (files) {
			setFile(files[0]);
		}
	};

	const handleGalleryTypeChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setGalleryType(event.target.value);
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		if (!file) {
			setUploadStatus("Please select a file to upload.");
			return;
		}

		const repo = new ImageRepositoryImpl();
		try {
			await repo.uploadImage(file, galleryType);
			setUploadStatus("Image uploaded successfully!");
		} catch (error) {
			setUploadStatus("Failed to upload image.");
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label>
						Image File:
						<input type="file" onChange={handleFileChange} />
					</label>
				</div>
				<div>
					<label>
						Gallery Type:
						<input
							type="text"
							value={galleryType}
							onChange={handleGalleryTypeChange}
						/>
					</label>
				</div>
				<button type="submit">Upload Image</button>
			</form>
			{uploadStatus && <p>{uploadStatus}</p>}
		</div>
	);
};

export default ImageUpload;
