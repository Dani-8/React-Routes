export default function Home() {
  return (
    <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
      <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
        Welcome <span className="text-orange-500">Home</span>
      </h1>
      <p className="text-slate-600 mb-8">This app is a demo of how modern React Routing works.</p>
      

      {/* App.jsx Explanation */}
      <div className="space-y-4">
        <div className="p-5 bg-slate-900 rounded-2xl border-l-6 border-orange-500 shadow-xl">
          <h3 className="font-bold text-orange-400 text-xs uppercase tracking-widest mb-3">
            How the Brain (App.jsx) Works
          </h3>
          
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex gap-2">
              <span className="text-orange-500 font-bold">1.</span>
              <span><b>The Map:</b> <code>createBrowserRouter</code> creates a list of every page in our app.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-orange-500 font-bold">2.</span>
              <span><b>Pre-Loading:</b> Each route has a <code>loader</code>. It grabs the data <i>before</i> the page shows up, so there's no "flicker" or empty screens.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-orange-500 font-bold">3.</span>
              <span><b>The Doorway:</b> <code>RouterProvider</code> is the main engine that makes the whole navigation system run.</span>
            </li>
          </ul>
        </div>


        <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
          <p className="text-orange-800 text-sm">
            <b>Current Page Note:</b> This Home page is marked as <code>index</code> in the code, meaning it's the "default" page you see when you first open the site.
          </p>
        </div>
      </div>
    </div>
  )
}