import login_page from "/login_page.jpg";
import page_home from "/page_home.jpg";
import page_cal from "/page_cal.jpg";
import page_add from "/page_add.jpg";
import page_friend from "/page_friend.jpg";
import { motion } from 'framer-motion';

const AboutApp = () => {
  return (
    <div className="bg-white mb-25 ">
      <div className="flex w-full bg-white my-10 scale-75">
        <motion.div className="grid md:grid-cols-2 max-w-[1240px] m-auto" whileHover={{ scale: 1.2 }}>
          <div className="flex flex-col justify-center w-full px-2 py-8 md:item-start">
            <h1 className="py-3 text-3xl font-bold md:text-5xl">
              간편한 로그인
            </h1>
            <h3 className="mt-5 text-2xl md:text-3xl ">
              카카오톡 로그인을 통해 간편하게
              <br />
              회원가입 및 로그인이 가능합니다.
            </h3>
          </div>
          <div className="flex flex-col justify-center ml-10">
            <div className="flex flex-row flex-wrap px-10 mt-6 sm:mt-10">
              <img src={login_page} />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex w-full bg-white my-10 scale-75">
        <motion.div className="grid md:grid-cols-2 max-w-[1240px] m-auto" whileHover={{ scale: 1.2 }}>
          <div className="flex flex-col justify-center ml-10">
            <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
              <img src={page_home} className="h-427 w-252" />
            </div>
          </div>
          <div className="flex flex-col justify-center w-full px-2 py-8 md:item-start">
            <h1 className="py-3 text-3xl font-bold md:text-5xl">
              사용자의 To Do
            </h1>
            <h3 className="mt-5 text-2xl md:text-3xl ">
              사용자별 To Do를 관리할 수 있으며
              <br />
              달성률도 확인해보세요.
            </h3>
          </div>
        </motion.div>
      </div>

      <div className="flex w-full bg-white my-10 scale-75" >
        <motion.div className="grid md:grid-cols-2 max-w-[1240px] m-auto" whileHover={{ scale: 1.2 }}>
          <div className="flex flex-col justify-center w-full px-2 py-8 md:item-start">
            <h1 className="py-3 text-3xl font-bold md:text-5xl">
              날짜별 일정 확인
            </h1>
            <h3 className="mt-5 text-2xl md:text-3xl ">
              날짜별로 등록한 일정을 확인해보세요.
              <br />
              보기 쉽게 확인 가능합니다.
            </h3>
          </div>
          <div className="flex flex-col justify-center ml-10">
            <div className="flex flex-row flex-wrap px-10 mt-6 sm:mt-10">
              <img src={page_cal} />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex w-full bg-white my-10 scale-75">
        <motion.div className="grid md:grid-cols-2 max-w-[1240px] m-auto" whileHover={{ scale: 1.2 }}>
          <div className="flex flex-col justify-center ml-10">
            <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
              <img src={page_add} className="h-427 w-252" />
            </div>
          </div>
          <div className="flex flex-col justify-center w-full px-2 py-8 md:item-start">
            <h1 className="py-3 text-3xl font-bold md:text-5xl">
              개인 & 공동 일정 등록
            </h1>
            <h3 className="mt-5 text-2xl md:text-3xl ">
              개인 일정을 등록해보세요.
              <br/>
              친구들과 함께 일정도 공유 가능합니다.
            </h3>
          </div>
        </motion.div>
      </div>

      <div className="flex w-full bg-white my-10 scale-75">
        <motion.div className="grid md:grid-cols-2 max-w-[1240px] m-auto" whileHover={{ scale: 1.2 }}>
          <div className="flex flex-col justify-center w-full px-2 py-8 md:item-start">
            <h1 className="py-3 text-3xl font-bold md:text-5xl">
              친구들 Following
            </h1>
            <h3 className="mt-5 text-2xl md:text-3xl ">
              친구들과 함께 팔로워를 늘려보세요.
              <br/>
              서로 팔로우 한 친구들과 일정 공유가 가능합니다.
            </h3>
          </div>
          <div className="flex flex-col justify-center ml-10">
            <div className="flex flex-row flex-wrap px-10 mt-6 sm:mt-10">
              <img src={page_friend} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutApp;
