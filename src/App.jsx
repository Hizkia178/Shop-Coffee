import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  const Home = () => {
    return (
      <>
        <Navbar />
        <Header />
        <Footer />
        <ScrollToTop />
      </>
    );
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
