import plan_bg from "../../../public/plan_bg.jpg";

const Home = () => {
  return (
    <div className="w-full mb-24 relative">
      <div className="w-full ">
        <img src={plan_bg} className="brightness-50 opacity-80 object-cover" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h3 className="text-3xl text-bold text-white mb-5">
          일정 관리의 새로운 패러다임
        </h3>
        <div className="text-center">
          <h3 className="text-7xl text-bold text-white ">
            HA<a className="text-red-600">R</a>U
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
