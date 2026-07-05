import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { About, Contact, Home, NotFound, Portfolio, ProjectDetail, Viewer } from './pages';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/viewer" element={<Viewer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
