import AppRoutes from "./AppRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
