import { Category } from "@/constants/CategoryEnum"
import { z } from "zod"

export const CategoryEnum = z.nativeEnum(Category)

export const ratingSchema = z.object({
  rate: z.number(),
  count: z.number(),
})

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: CategoryEnum,
  image: z.string(),
  rating: ratingSchema,
})

export const productStateSchema = z.object({
  products: z.array(productSchema),
  product: productSchema,
})

export type Product = z.infer<typeof productSchema>
export type ProductState = z.infer<typeof productStateSchema>
