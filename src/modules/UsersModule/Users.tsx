import UsersLayout from "@/components/UsersLayout/UsersLayout"

const Users = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-6xl mx-auto">
      <h2 className="text-2xl text-center font-semibold mb-8 mt-4">
        Using @reduxjs/toolkit to Simplify Redux Development
      </h2>
      <UsersLayout />
    </div>
  )
}

export default Users
