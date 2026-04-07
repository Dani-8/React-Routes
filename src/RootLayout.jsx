import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}