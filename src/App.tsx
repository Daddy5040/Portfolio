import { lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { premiumEase } from './lib/animations';

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
      <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, ease: premiumEase }}>
        <div className="loading-orb mx-auto h-12 w-12 rounded-full bg-[#050505] ring-1 ring-[#F5A623]/35" />
        <motion.p
          className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#F5A623]"
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          Loading experience
        </motion.p>
      </motion.div>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <Layout>
      <Suspense fallback={<RouteFallback />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/viewer" element={<Viewer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </Layout>
  );
}
