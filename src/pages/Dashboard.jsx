import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>This page uses <b>Outlet</b> to render nested routes below.</p>

      <div className="mt-4 p-4 border rounded-2xl bg-white">
        <Outlet />
      </div>
    </div>
  )
}