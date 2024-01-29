import dh from "../../../public/dahoon.jpg";
import bh from "../../../public/yangbh.png";
import ws from "../../../public/songusika.jpg";
import dc from "../../../public/kdc.png";
import dk from "../../../public/dukh.jpg";
import calendar_bg from "../../../public/calendar_background.jpg";
import PositionCard from "./PositionCard";

const MadeBy = () => {
  return (
    <div name="Made_Info" className="w-full my-24">
      <div className="w-full h-[700px] bg-slage-900/90 absolute">
        <img
          className="brightness-50 opacity-75 object-cover w-full h-full"
          src={calendar_bg}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-black relative">
        <div className="px-4 py-12">
          <h3 className="pt-8 text-3xl text-center uppercase text-zinc-200 font-bold">
            Who made the HARU
          </h3>
        </div>
        <div className="px-4 py-10">
          <h2 className="pt-4 text-2xl text-center text-zinc-200 font-bold">
            These are the people who made HARU.
            <br />A total of 5 people worked hard to create it according to
            their respective roles.
          </h2>
        </div>
        <div className="grid grid-cols-1 px-4 pt-12 text-black lg:grid-cols-5 gap-x-8 gap-y-16 sm:pt-20">
          <PositionCard
            userPosition={"👨🏻‍💼 PM"}
            userName={"권대철"}
            userImg={dc}
            userUrl={"https://github.com/kdc1"}
          />
          <PositionCard
            userPosition={"👨‍💻 BackEnd"}
            userName={"송우석"}
            userImg={ws}
            userUrl={"https://github.com/Songusika"}
          />
          <PositionCard
            userPosition={"🌐 FrontEnd"}
            userName={"김덕형"}
            userImg={dk}
            userUrl={"https://github.com/devdukh"}
          />
          <PositionCard
            userPosition={"📱 Android"}
            userImg={dh}
            userName={"구다훈"}
            userUrl={"https://github.com/Dahoonkk"}
          />
          <PositionCard
            userPosition={"📱 Android"}
            userImg={bh}
            userName={"양병헌"}
            userUrl={"https://github.com/YangBH-0"}
          />
        </div>
      </div>
    </div>
  );
};

export default MadeBy;
