import React, { useState } from "react";
import { ImageRepositoryImpl } from "../ImageRepo/ImageRepo";
import {
	Button,
	TextField,
	CircularProgress,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
} from "@mui/material";

const ImageUpload = ({ onClose }: { onClose: () => void }) => {
	const [file, setFile] = useState<File | null>(null);
	const [galleryType, setGalleryType] = useState<string>("");
	const [uploadStatus, setUploadStatus] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFile(event.target.files ? event.target.files[0] : null);
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		if (!file) {
			setUploadStatus("Please select a file to upload.");
			return;
		}

		setIsLoading(true);
		const repo = new ImageRepositoryImpl();

		try {
			await repo.uploadImage(file, galleryType);
			setUploadStatus("Image uploaded successfully!");
			onClose();
		} catch (error) {
			setUploadStatus("Failed to upload image.");
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<Dialog open={true} onClose={onClose} className="image-upload-dialog">
			<DialogTitle>Upload Image</DialogTitle>
			<DialogContent>
				<div className="file-upload">
					<input
						type="file"
						className="file-input"
						onChange={handleFileChange}
						id="file-input"
					/>
				</div>

				<TextField
					label="Gallery Type"
					variant="outlined"
					value={galleryType}
					onChange={(e) => setGalleryType(e.target.value)}
					fullWidth
					margin="normal"
				/>
				{uploadStatus && <p>{uploadStatus}</p>}
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} color="primary">
					Cancel
				</Button>
				<Button
					onClick={handleSubmit}
					color="primary"
					disabled={isLoading}
					startIcon={isLoading && <CircularProgress size={20} />}
				>
					{isLoading ? "Uploading..." : "Upload"}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ImageUpload;
