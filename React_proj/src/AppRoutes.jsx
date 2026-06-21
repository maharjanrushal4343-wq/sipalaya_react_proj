import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Menu,
  Services,
  PageNotFound,
  AllergyAdvice,
  MenuDetail,
  Cart
} from "./pages";
import Payment from "./pages/Payment";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/allergy-advice" element={<AllergyAdvice />} />
      <Route path="/menu-detail/:id" element={<MenuDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
