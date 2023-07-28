import { useEffect, useState } from "react";
import Modal from "@/components/shared/Modal/Modal";
import { FaPencil } from "react-icons/fa6";
import { Category, Product } from "@/types/product";

type Props = {
  product: Product;
};

const ProductForm: React.FC<Props> = ({ product }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(Category.Electronics);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const onCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCategory(e.target.value as Category);

  const onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);

  const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPrice(Number(e.target.value));

  useEffect(() => {
    if (!product) return;
    setTitle(product.title);
    setCategory(product.category);
    setDescription(product.description);
    setPrice(product.price);
  }, [product]);

  const onConfirm = () => {
    const updatedProduct = {
      ...product,
      title,
      category,
      description,
      price,
    };
    console.log(updatedProduct);
  };

  return (
    <Modal
      icon={<FaPencil className="text-lg cursor-pointer" />}
      title="Edit Product"
      onConfirm={onConfirm}
      open={isModalOpen}
      toggleModal={toggleModal}
    >
      <Fieldset name="title" value={title} onChange={onTitleChange} />
      <Fieldset name="category" value={category} onChange={onCategoryChange} />
      <Fieldset
        name="description"
        value={description}
        onChange={onDescriptionChange}
      />
      <Fieldset name="price" value={price} onChange={onPriceChange} />
    </Modal>
  );
};

export default ProductForm;

type FielsetProps = {
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Fieldset: React.FC<FielsetProps> = ({ name, value, onChange }) => {
  return (
    <fieldset className="flex items-center mb-4">
      <label htmlFor={name} className="w-2/6">
        {name.toUpperCase()}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="w-4/6 py-0.5 px-2 ring ring-slate-300 focus:ring-indigo-400 focus:ring-opacity-50 focus:shadow-sm rounded-md"
      />
    </fieldset>
  );
};
