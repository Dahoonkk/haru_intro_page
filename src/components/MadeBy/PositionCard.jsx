import UserCard from "./UserCard";

const PositionCard = ({ userPosition, userName, userImg, userUrl }) => {
  return (
    <div className="bg-zinc-50 shadow-2xl rounded-xl hover:animate-bounce">
      <div className="p-8 text-center">
        <h3 className="text-2xl font-bold">{userPosition}</h3>
      </div>
      <UserCard userName={userName} userImg={userImg} userUrl={userUrl} />
    </div>
  );
};

export default PositionCard;
