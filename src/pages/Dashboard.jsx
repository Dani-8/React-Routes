import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="p-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
        <h1 className="text-3xl font-black text-slate-900">Dashboard</h1>
      </div>

      <div className="p-2 bg-slate-100/50 rounded-[2rem]">
        <div className="bg-white p-6 rounded-[1.8rem] border border-slate-200 shadow-sm">
          <Outlet />
        </div>
      </div>

      <div className="p-4 bg-slate-800 rounded-xl text-white mt-5">
        <h3 className="font-bold text-orange-400 text-sm mb-2 uppercase tracking-widest">Notes: Outlet</h3>
        <p className="text-slate-300 text-sm">
          The <code>&lt;Outlet /&gt;</code> is a placeholder. It tells React Router: "If a nested child route (like Profile) is active, put its component right here."
        </p>
      </div>
    </div>
  )
}