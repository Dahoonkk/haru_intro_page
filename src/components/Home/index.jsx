import plan_bg from "/plan_bg.jpg";
import todo_bg from "/todo_bg.jpg";

const Home = () => {

  return (
    <div className="w-full mb-24 relative z-2">
      <div className="w-full ">
        <img src={plan_bg} className="brightness-50 object-cover" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h3 className="text-3xl text-white mb-5 md:text-4xl">
          일정을 함께 등록하고 공유해보세요
        </h3>
        <div className="text-center mt-7">
          <h3 className="text-6xl font-bold text-white md:text-7xl">
            HA<a className="text-red-600">R</a>U.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
