import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-pink-700 p-4 text-white flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/dashboard/profile/1">Profile 1</Link>
    </nav>
  )
}