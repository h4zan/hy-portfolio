// Layout.tsx
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Menu } from "../Menu/Menu";
import { AnimatePresence } from "framer-motion";
import { motion as m } from "framer-motion";
import { Footer } from "../Footer/Footer";
import { Backdrop } from "../Backdrop/Backdrop";

export const Layout = () => {
  const location = useLocation();
  const [menuToggled, setMenuToggled] = useState(false);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);

  const handleMenuToggle = (isToggled: boolean) => {
    setMenuToggled(isToggled);
  };
  useEffect(() => {
    const topElement = document.getElementById("top-of-page");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  useEffect(() => {
    setIsBackdropVisible(true);
    const timer = setTimeout(() => {
      setIsBackdropVisible(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [location.key]);

  return (
    <>
      <AnimatePresence initial={false} mode={"sync"}>
        <div
          key="wrapper"
          className="wrapper absolute h-[calc(95vh)] top-0 left-0 right-0 flex flex-wrap flex-col overflow-y-auto border-neutral-800 border-2 m-5"
        >
          <div id="top-of-page" key="scrollTop" />
          <header key="header" className="">
            <Menu
              onMenuToggle={handleMenuToggle}
              menuToggled={menuToggled}
              key="navigation"
            />
          </header>
          <m.main key={location.pathname} className="mt-2 md:mt-3">
            <Outlet />
            {isBackdropVisible && <Backdrop isVisible={isBackdropVisible} />}
          </m.main>
        </div>
        {!menuToggled && <Footer menuToggled={menuToggled} />}
      </AnimatePresence>
    </>
  );
};
