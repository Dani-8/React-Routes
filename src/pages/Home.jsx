export default function Home() {
  return (
    <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
      <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
        Welcome <span className="text-orange-500">Home</span>
      </h1>
      
      {/* Dev Notes Section */}
      <div className="mt-8 p-4 bg-slate-800 rounded-xl border border-orange-100">
        <h3 className="font-bold text-orange-400 text-sm mb-2 uppercase tracking-widest">Notes: Routing</h3>
        <p className="text-slate-300 text-sm">
          This is a <b>Static Route</b>. In <code>App.jsx</code>, it uses <code>index</code> or <code>path="/"</code>. 
          When the URL matches exactly, this component is mounted into the <code>Outlet</code>.
        </p>
      </div>
    </div>
  )
}