import getUserInfo2 from "../../api/getUser2";

const UserCard = ({ userId, idx }) => {
  const user = getUserInfo2(userId);
  console.log(user[idx]);

  // console.log(dahoon);
  return (
    <div>
        <div>userId: {user[idx].id}</div>
        <div>title: {user[idx].title}</div>
    </div>
  );
};

export default UserCard;
