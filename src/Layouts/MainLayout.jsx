import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';
const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <header>
        <Navbar />
      </header>
      <main className="min-h-96">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
