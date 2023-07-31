import { Link } from "react-router-dom"

import { UserType } from "@/types/user"

type Props = {
  user: UserType
}

const UserListItem: React.FC<Props> = ({ user }) => {
  return (
    <Link
      to={user.id.toString()}
      className="p-2.5 flex w-full h-20 items-center justify-start hover:bg-gray-100 border border-2 border-b-gray-200"
    >
      <div className="w-full">
        <span className="block">Name: {user.name}</span>
        <span className="block font-semibold">Username: {user.username}</span>
        <span className="block">Email: {user.email}</span>
      </div>
    </Link>
  )
}

export default UserListItem
