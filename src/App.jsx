import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MadeBy from "./components/MadeBy";
import Navbar from "./components/Navbar";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [window.scrollY]);

  return (
    <>
      <Navbar show={show.toString()} />
      <Home />
      <br />
      <br />
      {/* <MadeBy /> */}
      <h1 className="text-7xl">Hello</h1>
      <h1 className="text-7xl">Hello</h1>
      <h1 className="text-7xl">Hello</h1>
      <h1 className="text-7xl">Hello</h1>
      <h1 className="text-7xl">Hello</h1>
      <h1 className="text-7xl">Hello</h1>
      <h1 className="text-7xl">Hello</h1>
      <h1 className="text-7xl">Hello</h1>
      <h1 className="text-7xl">Hello</h1>
      <Footer />
    </>
  );
}

export default App;
