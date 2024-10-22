import SeoTags from "../components/SeoTags";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reveal, text_reveal_fade } from "../utils/Animation";
import { Frame } from "../components";

const About = () => {
  const missionText = "Our Mission";
  const smallText = "At ShieldCubed, \nwe're passionate about keeping your Linux system secure."; 

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
          <div className="overflow-hidden">
            <motion.div
              style={{ fontSize: "5rem" }}
              className="mb-8 gradient-text"
              variants={text_reveal}
            >
              {missionText}
              
            </motion.div>
          </div>
          <motion.div 
          className="text-lg text-gray-600"
          variants={text_reveal_fade}
          >
            <p className="mb-4">{smallText}</p>
          </motion.div>
          <motion.p
            variants={text_reveal_fade}
            style={{ lineHeight: "2.1rem", fontSize: "17px" }}
          >
            To develop and maintain a robust, open-source malware protection system specifically
            tailored for Linux users. We want every Linux enthusiast to feel confident in their system's
            safety. {" "}
            {/* <span className="gradient-text">
            e.g. worms, ransomware, botnets, viruses
            </span>{" "} */}
            </motion.p>
            <motion.p
  variants={text_reveal_fade}
  style={{ lineHeight: "2.1rem", fontSize: "17px" }}
>
            click here to {" "}
            <a href="/team" className="underline-span">Meet our Team</a> .
          </motion.p>
        </motion.div>
        <div className="md:static fixed md:block w-1/2">
          <Frame radius="rounded-md" />
        </div>
      </motion.div>
    </>
  );
};

export default About;

About.Template = PageTemplate;