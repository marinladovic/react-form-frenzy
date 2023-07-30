import { Outlet } from "react-router-dom"

import ScrollArea from "@/components/shared/ScrollArea"

const UsersLayout = () => {
  return (
    <div className="w-full max-h-[35rem] flex flex-row">
      <ScrollArea className="w-1/3">Hello</ScrollArea>
      <div className="w-2/3 flex flex-col">
        <Outlet />
      </div>
    </div>
  )
}

export default UsersLayout
