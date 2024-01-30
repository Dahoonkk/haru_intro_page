import mainLogo from "../../assets/haru-removebg.svg";
// import styled from "styled-components";

const Navbar = ({ show }) => {

  return (
    <nav className="w-screen h-[80px] relative drop-shadow-lg z-2 bg-white">
      <div className="flex items-center justify-between w-full h-full px-10">
        <img className="mr-4 text-3xl" src={mainLogo} alt="haru-logo" />
      </div>
    </nav>
  );
};

export default Navbar;

// const NavWrapper = styled.nav`
//   background-color: ${(show) => (show ? "#090b13" : "transparent")}; 
//   /* background-color: ${(show) => (show ? "#CCCCCC" : "transparent")};  */
// `;
