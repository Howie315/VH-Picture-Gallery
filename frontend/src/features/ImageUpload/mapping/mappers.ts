import { ImageEntity } from "../entity/imageEntity";
import { Image } from "../domain/image";

export const mapImageEntityToImage = (imageEntity: ImageEntity): Image => {
	return {
		id: imageEntity.id,
		imageURL: imageEntity.imageURL,
		galleryType: imageEntity.galleryType,
	};
};
