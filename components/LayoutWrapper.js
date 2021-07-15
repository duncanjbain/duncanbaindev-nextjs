import Footer from './Footer';
import Header from './Header';

const LayoutWrapper = ({ children }) => (
  <div className="container mx-auto md:w-1/2">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default LayoutWrapper;
