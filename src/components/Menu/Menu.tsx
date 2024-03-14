import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion as m, useAnimation } from "framer-motion";

interface MenuProps {
  onMenuToggle: (isToggled: boolean) => void;
  menuToggled: boolean;
}

const pages = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/projects", name: "Projects" },
  { path: "/contact", name: "Contact" },
];

const menuVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    delay: 0.2,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 1,
      duration: 4,
      ease: [0.455, 0.03, 0.515, 0.955],
    },
  },
};
const menuItemVariant = { hidden: { opacity: 0 }, show: { opacity: 1 } };

export const Menu = ({ onMenuToggle, menuToggled }: MenuProps) => {
  const [activePage, setActivePage] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const location = useLocation();
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = (pageName: string) => {
    setActivePage(pageName);
    onMenuToggle(false);
  };
  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);
  useEffect(() => {
    controls.start({
      borderColor:
        activePage === location.pathname ? "accentColor" : "transparent",
      transition: { duration: 0.3 },
    });
  }, [activePage, location.pathname, controls]);
  return (
    <>
      <nav className="menu fixed top-0 left-0 right-0 px-8 pt-4 z-30 lg:text-xl 2xl:text-2xl">
        <div className="flex flex-wrap items-center justify-between mx-auto mt-2 p-1 bg-primaryColor">
          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="z-50 self-center text-3xl font-semibold whitespace-nowrap">
              hy
              <span className="text-accentColor saturate-50 text-4xl">.</span>
            </span>
          </Link>
          <button
            type="button"
            className="z-50 inline-flex items-center p-2 w-12 h-12 justify-center text-sm rounded-lg md:hidden active:bg-neutral-200 transition-colors duration-300"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => onMenuToggle(!menuToggled)}
          >
            <span className="sr-only">
              {menuToggled ? "Close menu" : "Open main menu"}
            </span>
            {menuToggled ? (
              <svg
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          {(menuToggled || !isMobile) && (
            <m.div
              key="nav"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`menu-items w-screen h-screen fixed overflow-y-hidden md:relative top-1 md:top-0 left-0 md:block md:w-auto md:mt-0 md:h-fit bg-primaryColor md:bg-transparent`}
            >
              <m.ul
                key="menuItems"
                variants={menuVariant}
                className="font-semibold text-2xl md:text-xl 2xl:text-2xl block mx-6 md:m-0 md:items-center md:justify-start flex-wrap md:flex flex-col whitespace-nowrap justify-center p-4 mt-24 md:mt-0 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse xl:mr-2"
                initial="hidden"
                animate="show"
              >
                {pages.map((page) => (
                  <m.li
                    key={page.path}
                    variants={menuItemVariant}
                    className={`block py-2 px-3 md:p-0 md:hover:bg-transparent pl-0 border-b-2 hover:border-neutral-800 ${
                      activePage === page.path
                        ? "border-accentColor saturate-50"
                        : "border-transparent"
                    }`}
                  >
                    <Link
                      to={page.path}
                      onClick={() => handleLinkClick(page.path)}
                      className=""
                    >
                      {page.name}
                    </Link>
                  </m.li>
                ))}
              </m.ul>
            </m.div>
          )}
        </div>
      </nav>
    </>
  );
};
