import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Loading from './components/common/Loading';
import PageTransition from './components/common/PageTransition';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Cases = lazy(() => import('./pages/Cases'));
const News = lazy(() => import('./pages/News'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Suspense fallback={<Loading />}>
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cases" element={<Cases />} />
                <Route path="/news" element={<News />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </PageTransition>
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
