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

      <div className="text-left p-4 bg-slate-800 rounded-xl border border-orange-100 mt-5">
        <h3 className="font-bold text-orange-400 text-sm mb-2 uppercase tracking-widest">Dev Notes: useNavigate</h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          The <code>useNavigate</code> hook gives you a function to change the URL via code (like after a form submission or a button click) rather than just clicking a <code>Link</code>.
        </p>
      </div>
    </div>
  )
}