export interface CreateProductDTO {
  name: string;
  slug: string;
  description: string;

  price: number;
  discountPrice?: number;

  sku: string;

  material?: string;

  categoryId: string;

  isFeatured?: boolean;
}

export interface UpdateProductDTO {
  name?: string;
  slug?: string;
  description?: string;

  price?: number;
  discountPrice?: number;

  sku?: string;

  material?: string;

  categoryId?: string;

  isFeatured?: boolean;
}
