import { useGetUserByIdQuery } from "@/ducks/endpoints/users-api"
import { FaTrash } from "react-icons/fa6"
import { useParams } from "react-router-dom"

const ProductDetail = () => {
  const params = useParams<{ id: string }>()
  const { data: user } = useGetUserByIdQuery(params.id ?? "")

  return (
    <div className="w-full flex flex-col p-4">
      <div className="w-full flex items-center justify-end gap-4">
        <FaTrash className="text-lg text-red-600 cursor-pointer" />
      </div>
      <span className="block text-2xl font-semibold mb-4">
        {user?.name.toUpperCase()}
      </span>
      <span className="block text-xl mb-4">Username: {user?.username}</span>
      <span className="block text-xl mb-4">Email: {user?.email}</span>
      <span className="block text-xl mb-4">Website: {user?.website}</span>
    </div>
  )
}

export default ProductDetail
