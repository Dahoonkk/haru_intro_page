import mainLogo from "../../assets/haru-removebg.svg";
import styled from "styled-components";

const Navbar = ({ show }) => {
  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 50) {
  //       setShow(true);
  //     } else {
  //       setShow(false);
  //     }
  //   });
  //   return () => {
  //     window.removeEventListener("scroll", () => {});
  //   };
  // }, []);

  return (
    <NavWrapper show={show}>
      <nav className="w-screen h-[80px] z-1 fixed drop-shadow-lg">
        <div className="flex items-center justify-between w-full h-full px-10">
          <img className="mr-4 text-3xl" src={mainLogo} alt="haru-logo" />
        </div>
      </nav>
    </NavWrapper>
  );
};

export default Navbar;

const NavWrapper = styled.nav`
  position: fixed;
  background-color: ${(show) => (show ? "#090b13" : "transparent")};
`;
