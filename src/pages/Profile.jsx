import { useParams } from 'react-router-dom'

const users = {
  1: { name: 'Alice', age: 25, role: 'Admin' },
  2: { name: 'Bob', age: 30, role: 'Editor' },
  3: { name: 'Charlie', age: 22, role: 'Viewer' },
}

export default function Profile() {
  const { id } = useParams()
  const user = users[id]

  if (!user) return <p className="p-4 text-red-500">User not found</p>

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Profile Page</h2>
      <p>This uses <b>useParams</b> to get dynamic URL data.</p>

      <div className="mt-4 p-4 border rounded-2xl bg-white">
        <p><b>Name:</b> {user.name}</p>
        <p><b>Age:</b> {user.age}</p>
        <p><b>Role:</b> {user.role}</p>
      </div>
    </div>
  )
}