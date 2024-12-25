import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Profil from "./pages/Profil";
import VisiMisi from "./pages/VisiMisi";
import TasWanita from "./pages/product/TasWanita";
import TasPesta from "./pages/product/TasPesta";
import TasPria from "./pages/product/TasPria";
import Dompet from "./pages/product/Dompet";
import TasSekolah from "./pages/product/TasSekolah";
import Kontak from "./pages/Kontak";
import Pertanyaan from "./pages/Pertanyaan";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import { AnimatePresence } from "framer-motion";
import 'animate.css';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="profil"
          element={
            <PageTransition>
              <Profil />
            </PageTransition>
          }
        />
        <Route
          path="visi-misi"
          element={
            <PageTransition>
              <VisiMisi />
            </PageTransition>
          }
        />
        <Route
          path="tas-wanita"
          element={
            <PageTransition>
              <TasWanita />
            </PageTransition>
          }
        />
        <Route
          path="tas-pesta"
          element={
            <PageTransition>
              <TasPesta />
            </PageTransition>
          }
        />
        <Route
          path="tas-pria"
          element={
            <PageTransition>
              <TasPria />
            </PageTransition>
          }
        />
        <Route
          path="dompet"
          element={
            <PageTransition>
              <Dompet />
            </PageTransition>
          }
        />
        <Route
          path="tas-sekolah"
          element={
            <PageTransition>
              <TasSekolah />
            </PageTransition>
          }
        />
        <Route
          path="kontak-kami"
          element={
            <PageTransition>
              <Kontak />
            </PageTransition>
          }
        />
        <Route
          path="pertanyaan"
          element={
            <PageTransition>
              <Pertanyaan />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
