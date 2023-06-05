import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = ({ setEnableShirt, changeBgImage }) => {
  const snap = useSnapshot(state);

  // When the 'Customize It' button is clicked, the intro state is changed and
  // the background image is changed to 'd.png'
  const handleButtonClick = () => {
    state.intro = false;
    changeBgImage("./d.png");
  };

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./logo.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 class="head-text">
                <span class="text-pink">Experience </span>
                <span class="text-white">
                  the <br />
                  future of fashion
                  <br />
                  Personalize your <br />
                  3D
                </span>
                <span class="text-blue"> Tee’s </span>
                <span class="text-white">Today!</span>
                <br className="xl:block hidden" />
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="hero-content-details max-w-md font-normal text-white-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination</strong>{" "}
                and define your own style.
              </p>
            </motion.div>
          </motion.div>
          <motion.div>
            <CustomButton
              type="filled"
              title="Customize It"
              handleClick={handleButtonClick}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
