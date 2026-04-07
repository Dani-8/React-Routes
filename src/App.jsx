import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import ProfilesOverview, { profilesLoader } from './pages/ProfilesOverview';
import Profile, { profileLoader } from './pages/Profile';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<ProfilesOverview />} loader={profilesLoader} />
        <Route path="profile/:id" element={<Profile />} loader={profileLoader} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}