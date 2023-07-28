import { useEffect, useState } from "react"
import { FaPencil } from "react-icons/fa6"

import { Category, Product } from "@/types/product"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/Dialog/Dialog"
import Input from "@/components/shared/Input/Input"
import Label from "@/components/shared/Label/Label"

type Props = {
  product: Product
}

const ProductForm: React.FC<Props> = ({ product }) => {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState(Category.Electronics)
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleModal = () => setIsModalOpen((prev) => !prev)

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value)

  const onCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCategory(e.target.value as Category)

  const onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value)

  const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPrice(Number(e.target.value))

  useEffect(() => {
    if (!product) return
    setTitle(product.title)
    setCategory(product.category)
    setDescription(product.description)
    setPrice(product.price)
  }, [product])

  // const onConfirm = () => {
  //   const updatedProduct = {
  //     ...product,
  //     title,
  //     category,
  //     description,
  //     price,
  //   };
  //   console.log(updatedProduct);
  // };

  return (
    <Dialog>
      <DialogTrigger>
        <FaPencil className="w-4 h-4" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={onTitleChange}
          />
        </>
      </DialogContent>
    </Dialog>
  )
}

export default ProductForm
