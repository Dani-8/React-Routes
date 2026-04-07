import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-9xl font-black text-orange-100">404</h1>
      <div className="absolute">
        <h2 className="text-2xl font-bold text-slate-800">Page Not Found</h2>
        <p className="text-slate-500 mb-6">The link you followed might be broken.</p>
        <Link to="/" className="text-orange-500 font-bold hover:underline">Return Home</Link>
      </div>
    </div>
  )
} 