import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FaPencil } from "react-icons/fa6"
import * as z from "zod"

import { Product } from "@/types/product"
import Button from "@/components/shared/Button/Button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/Dialog/Dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shared/Form/Form"
import Input from "@/components/shared/Input/Input"

type Props = {
  product: Product
}

const ProductForm: React.FC<Props> = ({ product }) => {
  const formSchema = z.object({
    title: z
      .string()
      .min(3, {
        message: "Title must be at least 3 characters long",
      })
      .max(30, {
        message: "Title must be at most 30 characters long",
      }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: product.title,
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <Dialog>
      <DialogTrigger>
        <FaPencil className="w-4 h-4" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default ProductForm
