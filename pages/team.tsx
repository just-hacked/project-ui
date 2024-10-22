import Link from "next/link";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reveal } from "../utils/Animation";
import { Frame } from "../components";
import SeoTags from "../components/SeoTags";

const Team = () => {
  const overviews = [
    {
      content: {
        title: "Meet Our Team",
        link: "/",
        status: "",
        description: "While we're still growing, our core team consists of",
        stacks: [
          "• Aryamaan D - Project Lead & Chief Architect",
          "• Naman Arora - Security Expert & Code Reviewer",
          "• Nikhil Furtado - Project Ambassador",
        ],
      },
    },
  ];

  const overviewList = overviews.map((project, index) => (
    <div className="overflow-hidden mt-10" key={index}>
      <a target="_blank" rel="noreferrer noopener">
        <motion.div
          className="flex flex-col transform duration-700 hover:scale-110 hover:text-third"
          variants={text_reveal}
        >
          <div className="mr-2 flex">
            <h1 className="mr-3 mb-8 gradient-text">{project.content.title}</h1>
            <div>{project.content.status}</div>
          </div>
          <h3 className="text-xl mb-2">{project.content.description}</h3>
          <div className="flex flex-wrap w-82">
            {project.content.stacks.map((stack, key) => (
              <div
                key={key}
                className="mr-1 text-gray-400 bg-transparent px-1 my-1 rounded-md block"
              >
                {stack}
              </div>
            ))}
          </div>
        </motion.div>
      </a>
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
        <motion.div variants={container} className="md:w-1/2 lg:pl-36 z-20">
          {overviewList}
        </motion.div>
        <div className="md:static fixed md:block w-1/2">
          <Frame radius="rounded-full " />
        </div>
      </motion.div>
      
      {/* Call-to-Action Section */}
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

export default Team;

Team.Template = PageTemplate;