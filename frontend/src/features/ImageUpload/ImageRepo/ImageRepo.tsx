import { Image } from "../domain/image";
import { ImageEntity } from "../entity/imageEntity";
import { mapImageEntityToImage } from "../mapping/mappers";

export interface ImageRepository {
	fetchImages(): Promise<Image[]>;
	uploadImage(imageFile: File, galleryType: string): Promise<Image>;
}

export class ImageRepositoryImpl implements ImageRepository {
	async fetchImages(): Promise<Image[]> {
		const response = await fetch("/api/images");
		const imageEntities: ImageEntity[] = await response.json();
		return imageEntities.map(mapImageEntityToImage);
	}

	async uploadImage(imageFile: File, galleryType: string): Promise<Image> {
		const formData = new FormData();
		formData.append("image", imageFile);
		formData.append("galleryType", galleryType);

		const response = await fetch("/api/images", {
			method: "POST",
			body: formData,
		});

		if (!response.ok) {
			throw new Error("Image upload failed");
		}

		const imageEntity: ImageEntity = await response.json();
		return mapImageEntityToImage(imageEntity);
	}
}
