import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "@/ducks/products/actions";
import { getProduct } from "@/ducks/products/selectors";
import { useEffect } from "react";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const params = useParams<{ id: string }>();
  const product = useSelector(getProduct);

  useEffect(() => {
    if (!params.id) return;
    dispatch(productActions.getProduct(params.id));
  }, [dispatch, params.id]);

  return (
    <div className="w-full flex flex-col p-4">
      <span className="block text-xs font-semibold tracking-wider">
        {product.category.toUpperCase()}
      </span>
      <span className="block text-2xl font-semibold mb-4">
        {product?.title.toUpperCase()}
      </span>
      <span className=" block font-bold text-2xl mb-12">
        {Intl.NumberFormat("us-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
      </span>
      <div className="flex flex-row items-center px-16 gap-16">
        <img src={product?.image} alt={product?.title} className="w-1/4" />
        <span className="block line-clamp-8">{product?.description}</span>
      </div>
    </div>
  );
};

export default ProductDetail;
