import { FaPencil } from "react-icons/fa6"

import { Product } from "@/types/product"
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
            name="title"
            type="text"
            placeholder="Title"
            value={product.title}
          />
        </>
      </DialogContent>
    </Dialog>
  )
}

export default ProductForm
