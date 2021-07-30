import Footer from './Footer';
import Header from './Header';

const LayoutWrapper = ({ children }) => (
  <div className="container mx-auto xl:w-1/2">
    <Header />
    <main className="px-8">{children}</main>
    <Footer />
  </div>
);

export default LayoutWrapper;
