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
    </div>
  )
}