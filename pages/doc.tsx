import Link from "next/link";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reveal , text_reveal_fade} from "../utils/Animation";
import { Frame } from "../components";
import SeoTags from "../components/SeoTags";


const Documentation = () => {
  const overviews = [
    {
      content: {
        title: "Getting Started!  🚀",
        link: "https://github.com/ShieldCubed/shell",
        status: "",
        description: "",
        stacks: [
          "1. Visit our GitHub repository and  download the latest version of ShieldCubed.",
          "2. Unzip the file to a convenient location on your system.",
          "3. Open a terminal, navigate to the unzipped folder, and run:",
          "4. Type 'sudo ./install.sh' ",
        ],
      },
    },
  ];

  const overviewList = overviews.map((project, index) => (
    <div className="overflow-hidden mt-10" key={index}>
      <Link href={project.content.link}>      
        <a target="_blank" rel="noreferrer noopener">
          <motion.div
            className="flex flex-col transform duration-700 hover:scale-110 hover:text-third"
            variants={text_reveal}
          >
            <div className="mr-2 flex">
              <h1 className="mr-3">{project.content.title}</h1>
              
              <div>{project.content.status}</div>
            </div>
            
            <h3 className="text-xl mb-2">{project.content.description}</h3>
            <div className="flex flex-wrap w-80">
              {project.content.stacks.map((stack, key) => (
                <div
                  key={key}
                  className="mr-1 text-gray-400 bg-transparent px-1 my-1 rounded-md"
                >
                  {stack}
                </div>
              ))}
            </div>
          

          </motion.div>
        </a>
        </Link>
        <motion.p
            variants={text_reveal_fade}
            style={{ lineHeight: "2.1rem", fontSize: "17px" }}
          >
                        <a href="/doc-p2" className="underline-span">configure</a> .
                        </motion.p>
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
    </>
  );
};

export default Documentation;

Documentation.Template = PageTemplate;
