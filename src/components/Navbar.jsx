import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkStyle = ({ isActive }) => 
    `px-4 py-2 rounded-lg transition-all ${isActive ? 'bg-orange-500 text-white shadow-md' : 'hover:bg-orange-100 text-orange-900'}`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-orange-100 py-4 px-8 flex justify-between items-center">
      <h1 className="font-black text-xl tracking-tight text-orange-600">Routing</h1>
      
      <div className="flex gap-2 font-medium">
        <NavLink to="/" className={linkStyle}>Home</NavLink>
        <NavLink to="/about" className={linkStyle}>About</NavLink>
        <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
        <NavLink to="/dashboard" className={linkStyle}>Dashboard</NavLink>
      </div>
    </nav>
  );
}