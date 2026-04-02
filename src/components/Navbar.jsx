import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-pink-700 py-4 px-6 text-white flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  )
}