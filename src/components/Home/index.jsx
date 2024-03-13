import { motion } from "framer-motion";
import bg from "/haru_bg.png";

const Home = () => {
  return (
    <motion.div
      className="w-full mb-24 relative z-1"
      // initial={{ opacity: 0, scale: 0.5 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{
      //   duration: 0.8,
      //   delay: 0.5,
      //   ease: [0, 0.4, 0.2, 0.8],
      // }}
    >
      <motion.div className="w-full ">
        <img src={bg} className="object-cove h-300" />
      </motion.div>
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h3 className="text-3xl text-white mb-5 md:text-4xl">
          일정을 함께 등록하고 공유해보세요
        </h3>
        <div className="text-center mt-7">
          <h3 className="text-6xl font-bold text-white md:text-7xl">
            HA<a className="text-red-600">R</a>U.
          </h3>
        </div>
      </div> */}
    </motion.div>
  );
};

export default Home;
