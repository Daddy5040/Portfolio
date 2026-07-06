import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })));
const Portfolio = lazy(() => import('./pages/Portfolio').then((module) => ({ default: module.Portfolio })));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail').then((module) => ({ default: module.ProjectDetail })));
const Services = lazy(() => import('./pages/Services').then((module) => ({ default: module.Services })));
const About = lazy(() => import('./pages/About').then((module) => ({ default: module.About })));
const Contact = lazy(() => import('./pages/Contact').then((module) => ({ default: module.Contact })));
const Viewer = lazy(() => import('./pages/Viewer').then((module) => ({ default: module.Viewer })));
const NotFound = lazy(() => import('./pages/NotFound').then((module) => ({ default: module.NotFound })));

function RouteFallback() {
  return (
    <div className="grid min-h-[55vh] place-items-center px-5 py-20 text-center">
      <div>
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-[#F5A623]/25 border-t-[#F5A623]" />
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A623]">Loading</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/viewer" element={<Viewer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
