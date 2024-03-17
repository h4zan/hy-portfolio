import { Skills } from "../../components/Skills/Skills";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import hy from "../../assets/hy.webp";
const transition = {
  duration: 0.8,
  ease: [0.43, 0.13, 0.23, 0.96],
};
export const About = () => {
  return (
    <>
      <m.div
        key="about"
        className="about pt-16 mx-auto px-2 max-w-[1900px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition}
      >
        <article>
          <m.section
            key="aboutWrapper"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              ease: [0.455, 0.03, 0.515, 0.955],
              duration: 0.85,
            }}
            className="mx-auto flex flex-col px-5 md:px-14 lg:px-40 2xl:px-52 py-5 md:flex-row items-center md:items-start"
          >
            <m.div
              key="imgWrapper"
              whileHover={{ scale: 1.1 }}
              transition={transition}
              className="w-44 md:w-11/12 xl:w-5/6 2xl:w-3/6 inline-block p-1 border-2 border-gray-900 rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-m uppercase tracking-wider relative my-3 mb-10 "
            >
              <img src={hy} alt="Hazan Yigit" className="w-full" />
              <div className="m-1 absolute top-1/2 left-1/2 w-full h-full border-2 border-neutral-800 transform -translate-x-1/2 -translate-y-1/2 scale-1015 rotate-0.5 rounded-tl-lg rounded-tr-md rounded-bl-md rounded-br-lg "></div>
            </m.div>
            <div className="md:pl-10">
              <div>
                <PageHeader title="Hello world" />
              </div>
              <m.div
                key="bio"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 1.2,
                  ease: [0.555, 0.04, 0.615, 0.955],
                  duration: 0.85,
                }}
                className="lg:flex-grow flex flex-col md:items-start md:text-left text-start mt-3 md:pl-4"
              >
                <h1 className="text-base md:text-xl 2xl:text-2xl mb-4">
                  Welcome to my corner of the digital universe. My name is Hazan
                  Yigit, and I am a Front End Developer based in Stockholm.
                </h1>
                <p className="text-base md:text-xl 2xl:text-2xl mb-4 ">
                  To me, web development is like solving a puzzle. Each line of
                  code is a piece, and as we fit them together, we reveal new
                  levels of functionality and interactivity, unlocking a world
                  of endless possibilities.
                </p>
                <p className="text-base md:text-xl 2xl:text-2xl mb-4 ">
                  As I embark on this journey, I'm excited about the
                  opportunities that lie ahead and the chance to make a
                  meaningful impact in the world of web development. With a keen
                  eye for detail and a drive for excellence, I'm determined to
                  push boundaries and continually grow as a developer.
                </p>
                <p className="text-base md:text-xl 2xl:text-2xl mb-4 ">
                  I'm currently seeking opportunities to further my skills and
                  contribute to projects. If you're looking for a motivated and
                  detail-oriented developer to join your team, I'd love to
                  <span>
                    <Link
                      to="/contact"
                      className=" w-full py-1 font-semibold underline italic mx-1 hover:decoration-accentColor hover:saturate-50 "
                      aria-label="Connect with Hazan Yigit"
                    >
                      connect
                    </Link>
                  </span>
                  and explore how I can add value.
                </p>
              </m.div>
            </div>
          </m.section>

          <m.div
            key="tech"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="lg:px-12 xl:px-24 2xl:px-52"
          >
            <Skills />
          </m.div>
        </article>
      </m.div>
    </>
  );
};
