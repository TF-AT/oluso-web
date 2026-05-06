import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Stats from './components/Stats';
import InstallationGuide from './components/InstallationGuide';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: 'var(--background)', color: 'var(--on-background)', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
      <Stats />
      <InstallationGuide />
      <Footer />
    </div>
  );
}

export default App;
