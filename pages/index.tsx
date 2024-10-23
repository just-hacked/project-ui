import Link from "next/link";
import SeoTags from "../components/SeoTags";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reveal, text_reveal_fade } from "../utils/Animation";
import { Frame } from "../components";

const Home = () => {
  const texts = [{ content: "Welcome to ShieldCubed!" }];

  const textList = texts.map((text, index) => (
    <div className="overflow-hidden" key={index}>
      <motion.div
        style={{ fontSize: "5rem" }}
        className="mb-8 gradient-text"
        variants={text_reveal}
      >
        {text.content}
      </motion.div>
    </div>
  ));

  return (
    <>
      <SeoTags />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex"
      >
        <motion.div variants={container} className="md:w-1/2 lg:pl-36">
          {textList}
          <motion.p
            variants={text_reveal_fade}
            style={{ lineHeight: "2.1rem", fontSize: "17px" }}
          >
            ShieldCubed is an exciting new project dedicated to enhancing the security of Linux systems
            including Ubuntu, Arch Linux, Zorin, Ubuntu Server, Rocky Linux and so on. Our mission is
            to create a powerful, open-source tool that protects your Linux computer from various types
            of malware {" "}
            <span className="gradient-text">
            e.g. worms, ransomware, botnets, viruses
            </span>{" "}
            and other {" "}
            <span className="underline-span">malware agents</span> .
          </motion.p>
        </motion.div>
        <div className="md:static fixed md:block w-1/2">
          <Frame radius="rounded-md" />
        </div>
      </motion.div>

        <div className="flex items-center justify-center  p-6 rounded-lg mt-10">
    <h2 className="text-2xl font-bold mr-4">🚀 Wanna Join Us?</h2>
    <Link href="/partnerships" passHref>
      <a className="bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300">
        Join Our Adventure
      </a>
    </Link>
  </div>

    </>
  );
};

export default Home;

Home.Template = PageTemplate;
