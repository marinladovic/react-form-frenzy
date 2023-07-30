import ProductLayout from "@/components/ProductLayout/ProductLayout"

const Product = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-6xl mx-auto">
      <h2 className="text-2xl text-center font-semibold mb-8 mt-4">
        Taming Forms with Redux Sagas: An Unconventional Dance of Actions and
        Effects
      </h2>
      <ProductLayout />
    </div>
  )
}

export default Product
