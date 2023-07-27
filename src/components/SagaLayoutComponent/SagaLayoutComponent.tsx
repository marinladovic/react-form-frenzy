import { useEffect } from "react";
import { getProducts } from "@/ducks/products/selectors";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "@/ducks/products/actions";
import ProductListItem from "../ProductListItem/ProductListItem";
import { Product } from "@/types/product";
import { Outlet } from "react-router-dom";

const SagaFormComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  useEffect(() => {
    dispatch(productActions.getProducts());
  }, [dispatch]);

  return (
    <div className="w-full max-h-[30rem] flex flex-row">
      <div className="w-1/3 flex flex-col overflow-scroll">
        {(products ?? []).map((product: Product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </div>
      <div className="w-2/3 flex flex-col">
        <Outlet />
      </div>
    </div>
  );
};

export default SagaFormComponent;
