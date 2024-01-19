import mainLogo from '../../assets/haru-removebg.svg'

const Navbar = () => {
  return (
    <nav className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="flex items-center justify-between w-full h-full px-10">
        <img className="mr-4 text-3xl" src={mainLogo} alt="haru-logo"/>
      </div>
    </nav>
  )
}

export default Navbar