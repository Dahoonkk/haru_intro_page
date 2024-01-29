// import getUserInfo2 from "../../api/getUser2";

const UserCard = ({ userImg, userName, userUrl }) => {
  return (
    <div name="user" className="border-5 text-center">
      <h3 className="mb-5 text-xl font-bold text-center">{userName}</h3>
      <a
        href={userUrl}
        target="_black"
        title="github"
        className="border-5 text-center"
      >
        <img src={userImg} className="px-5 pb-5 rounded-full" />
      </a>
    </div>
  );
};

export default UserCard;
