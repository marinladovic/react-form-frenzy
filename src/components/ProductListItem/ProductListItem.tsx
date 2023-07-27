import { Product } from "@/types/product";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

const ProductListItem: React.FC<Props> = ({ product }) => {
  return (
    <Link
      to={product.id.toString()}
      className="p-2.5 flex w-full h-20 items-center justify-start hover:bg-gray-100"
    >
      <div className="w-[30%]">
        <img src={product.image} alt={product.title} className="w-12 h-12" />
      </div>
      <div className="w-[70%]">
        <span className="block line-clamp-2">{product.title}</span>
        <span className="font-semibold">
          {Intl.NumberFormat("us-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </span>
      </div>
    </Link>
  );
};

export default ProductListItem;
