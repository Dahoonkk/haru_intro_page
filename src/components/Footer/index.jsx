import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-full px-2 bg-zinc-300 py-y">
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4 ml-20">2024 HARU, LLC. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <a
            href="https://github.com/daily-planner-haru"
            title="github"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
