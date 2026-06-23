import AppRoutes from "./AppRoutes";
import Footer from "./components/Footer";
import GlobalSEO from "./components/GlobalSeo";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <>
      <HelmetProvider>
        <GlobalSEO />
        <Navbar />
        <AppRoutes />
        <Footer />
        <ScrollToTop />
      </HelmetProvider>
    </>
  );
};

export default App;
