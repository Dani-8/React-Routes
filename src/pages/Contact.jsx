import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()

  return (
    <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm text-center">
      <h1 className="text-3xl font-black text-slate-900 mb-2">Get in Touch</h1>
      <p className="text-slate-500 mb-8">Need help? We're just a click away.</p>
      
      <button 
        onClick={() => navigate('/')}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-orange-200 transition-all active:scale-95"
      >
        Go Home
      </button>
    </div>
  )
}