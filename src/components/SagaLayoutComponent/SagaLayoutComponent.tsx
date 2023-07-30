import { useEffect } from "react"
import { productActions } from "@/ducks/products/actions"
import { getProducts } from "@/ducks/products/selectors"
import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"

import { Product } from "@/types/product"
import ScrollArea from "@/components/shared/ScrollArea"

import ProductListItem from "../ProductListItem/ProductListItem"

const SagaFormComponent = () => {
  const dispatch = useDispatch()
  const products = useSelector(getProducts)

  useEffect(() => {
    dispatch(productActions.getProducts())
  }, [dispatch])

  return (
    <div className="w-full max-h-[35rem] flex flex-row">
      <ScrollArea className="w-1/3">
        {(products ?? []).map((product: Product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </ScrollArea>
      <div className="w-2/3 flex flex-col">
        <Outlet />
      </div>
    </div>
  )
}

export default SagaFormComponent
