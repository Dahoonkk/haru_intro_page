import UserCard from "./UserCard";
import { motion } from "framer-motion";

const PositionCard = ({ userPosition, userName, userImg, userUrl }) => {
  return (
    <motion.div
      className="bg-zinc-50 shadow-2xl rounded-xl"
      whileHover={{ scale: 1.2 }}
    >
      <div className="p-8 text-center">
        <h3 className="text-2xl font-bold">{userPosition}</h3>
      </div>
      <UserCard userName={userName} userImg={userImg} userUrl={userUrl} />
    </motion.div>
  );
};

export default PositionCard;
