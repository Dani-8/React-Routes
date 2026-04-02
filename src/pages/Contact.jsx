import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Contact Page</h1>
      <p>useNavigate lets you redirect programmatically.</p>

      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => navigate('/')}
      >
        Go Home
      </button>
    </div>
  )
}