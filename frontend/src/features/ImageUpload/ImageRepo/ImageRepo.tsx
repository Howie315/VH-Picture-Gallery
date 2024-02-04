import { Image } from "../domain/image";
import { ImageEntity } from "../entity/imageEntity";
import { mapImageEntityToImage } from "../mapping/mappers";

export interface ImageRepository {
	fetchImages(): Promise<Image[]>;
	uploadImage(imageFile: File, galleryType: string): Promise<Image>;
}

export class ImageRepositoryImpl implements ImageRepository {
	baseUrl = "http://localhost:8000";
	async fetchImages(): Promise<Image[]> {
		const response = await fetch(`${this.baseUrl}/api/images`);
		const imageEntities: ImageEntity[] = await response.json();
		return imageEntities.map(mapImageEntityToImage);
	}

	async uploadImage(imageFile: File, galleryType: string): Promise<Image> {
		const formData = new FormData();
		formData.append("imageURL", imageFile); // Ensure 'imageURL' matches the field name in Django
		formData.append("galleryType", galleryType);

		const response = await fetch(`${this.baseUrl}/api/images`, {
			method: "POST",
			body: formData,
		});

		if (!response.ok) {
			throw new Error("Image upload failed: " + response.statusText);
		}

		const imageEntity: ImageEntity = await response.json();
		return mapImageEntityToImage(imageEntity);
	}
}
