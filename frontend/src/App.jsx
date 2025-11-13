import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import RecentReports from './components/RecentReports';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const isLoggedIn = false;

  return (
    <div className="min-h-screen bg-cream">
      <Header isLoggedIn={isLoggedIn} />
      <Hero />
      <Features />
      <RecentReports />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
