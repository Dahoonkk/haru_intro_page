import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MadeBy from "./components/MadeBy";
import Navbar from "./components/Navbar";
import AboutApp from "./components/AboutApp";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        console.log("true scroll")
        setShow(true);
      } else {
        setShow(false);
        console.log("false scroll")
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      <Navbar show={show} />
      <Home />
      <AboutApp/>
      <MadeBy />
      <Footer />
    </>
  );
}

export default App;
