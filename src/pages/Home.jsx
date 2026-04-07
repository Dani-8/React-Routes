export default function Home() {
  return (
    <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
      <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
        Welcome <span className="text-orange-500">Home</span>
      </h1>
      <p className="text-slate-600 text-lg leading-relaxed">
        This is your main dashboard entry point. Everything starts here.
      </p>
    </div>
  )
}