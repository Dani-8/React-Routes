import { Link } from 'react-router-dom'

const users = {
  1: { name: 'Alice', age: 25, role: 'Admin' },
  2: { name: 'Bob', age: 30, role: 'Editor' },
  3: { name: 'Charlie', age: 22, role: 'Viewer' },
}

export default function ProfilesOverview() {
  return (
    <div className="p-6">

      <h2 className="text-2xl font-bold mb-4">All Profiles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.entries(users).map(([id, user]) => (
          <Link key={id} to={`/dashboard/profile/${id}`}>
            <div className="p-4 border border-pink-700 rounded bg-white hover:bg-pink-50 cursor-pointer">
              <p className='text-pink-600'><b>{user.name}</b></p>
              <p>{user.role}</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}
