import { useMemo } from "react"
import { useGetAllUsersQuery } from "@/ducks/endpoints/users-api"
import { Outlet } from "react-router-dom"

import ScrollArea from "@/components/shared/ScrollArea"

const UsersLayout = () => {
  const { data, isLoading } = useGetAllUsersQuery()

  const users = useMemo(() => data ?? [], [data])

  return (
    <div className="w-full max-h-[35rem] flex flex-row">
      {isLoading && <div>Loading...</div>}
      <ScrollArea className="w-1/3">
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))}
      </ScrollArea>
      <div className="w-2/3 flex flex-col">
        <Outlet />
      </div>
    </div>
  )
}

export default UsersLayout
