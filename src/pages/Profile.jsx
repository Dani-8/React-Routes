import { useLoaderData, useNavigate } from 'react-router-dom';

export default function Profile() {
  const user = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-orange-500"></div>
      <button onClick={() => navigate(-1)} className="mb-6 text-sm font-semibold text-orange-600 hover:underline">
        ← Back to list
      </button>

      <h2 className="text-2xl font-black text-slate-900 mb-4">{user.name}'s Profile</h2>
      
      <div className="space-y-3">
        <p className="flex justify-between border-b pb-2"><span className="text-slate-500">Age</span> <b>{user.age}</b></p>
        <p className="flex justify-between border-b pb-2"><span className="text-slate-500">Position</span> <b>{user.role}</b></p>
      </div>
    </div>
  );
}

export const profileLoader = async ({ params }) => {
  const users = {
    '1': { name: 'Alice', age: 25, role: 'Admin' },
    '2': { name: 'Bob', age: 30, role: 'Editor' },
    '3': { name: 'Charlie', age: 22, role: 'Viewer' },
  };
  
  const user = users[params.id];
  if (!user) throw new Response("Not Found", { status: 404 });
  return user;
};