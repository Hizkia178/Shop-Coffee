import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const Home = () => {
    return (
      <>
        <Navbar />
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
