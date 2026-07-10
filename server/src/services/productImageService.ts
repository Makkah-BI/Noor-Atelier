import cloudinary from "../config/cloudinary";

import productImageRepository from "../repositories/productImageRepository";

class ProductImageService {
  async upload(file: Express.Multer.File, productId: string) {
    const result = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "noor-atelier/products",
          },
          (error, result) => {
            if (error) return reject(error);

            resolve(result);
          },
        )
        .end(file.buffer);
    });

    return productImageRepository.create({
      url: result.secure_url,
      productId,
    });
  }
}

export default new ProductImageService();
