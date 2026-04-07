import { Link, useLoaderData } from 'react-router-dom';

export default function ProfilesOverview() {
  const users = useLoaderData();

  return (
    <div className="animate-in fade-in duration-500">
      <h2 className="text-3xl font-extrabold mb-6 text-slate-800">Team Directory</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {users.map((user) => (
          <Link key={user.id} to={`profile/${user.id}`} className="group">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm group-hover:shadow-xl group-hover:border-orange-300 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full mb-4 flex items-center justify-center text-orange-600 font-bold">
                {user.name[0]}
              </div>
              <p className="text-lg font-bold text-slate-900 group-hover:text-orange-600">{user.name}</p>
              <p className="text-slate-500 text-sm uppercase tracking-wider">{user.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Loader function
export const profilesLoader = async () => {
  // Simulate API fetch
  return [
    { id: '1', name: 'Alice', age: 25, role: 'Admin' },
    { id: '2', name: 'Bob', age: 30, role: 'Editor' },
    { id: '3', name: 'Charlie', age: 22, role: 'Viewer' },
  ];
};