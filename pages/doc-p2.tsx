import Link from "next/link";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reveal } from "../utils/Animation";
import { Frame } from "../components";
import SeoTags from "../components/SeoTags";

const docp2 = () => {
  const overviews = [
    {
      content: {
        title: "Configuring!  :)",
        link: "/",
        status: "",
        description: "Once installed, you can customize ShieldCubed to fit your needs:",
        sample : "",
        stacks: [
          "• Real-time Scanning: Keep your system constantly protected",
          "• Scheduled Checks: Set up regular deep scans",
          "• Network Guard: Block suspicious connections automatically",
          "• Quarantine Management: Decide how to handle detected threats",
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
          <h4 className="text-xs mb-7 text-gray-400">{project.content.sample}</h4>
          <div className="flex flex-wrap w-82 mb-7">
            {project.content.stacks.map((stack, key) => (
              <div
                key={key}
                className="mr-1 text-gray-400 bg-transparent px-1 my-1 rounded-md block "
              >
                {stack}
              </div>
            ))}
          </div>
          <h4 className="text-gray-400 mb-7">Need help setting these up? Check our detailed guide for step-by-step instructions.</h4>
          <h4 className="text-gray-400 mb-7">Remember, ShieldCubed is a community-driven project. Your feedback and contributions are
          invaluable to us!</h4>
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
      
      {/* Call-to-Action Section
      <div className="flex items-center justify-center  p-6 rounded-lg mt-10">
        <h2 className="text-2xl font-bold mr-4">🚀 Wanna Join Us?</h2>
        <Link href="/partnerships" passHref>
          <a className="bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300">
            Join Our Adventure
          </a>
        </Link>
      </div> */}
    </>
  );
};

export default docp2;

docp2.Template = PageTemplate;