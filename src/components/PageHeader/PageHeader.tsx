import { motion as m } from "framer-motion";
import { useLocation } from "react-router-dom";

interface pageHeaderProps {
  title?: string;
}
export const PageHeader = ({ title }: pageHeaderProps) => {
  const location = useLocation();
  const pathname =
    location.pathname.slice(1).charAt(0).toUpperCase() +
    location.pathname.slice(1).slice(1);
  return (
    <>
      <div className="page-header flex flex-row items-center gap-5 ">
        <m.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          exit={{ opacity: 0 }}
          key="title"
          className=" font-extrabold text-2xl 2xl:text-3xl"
        >
          <span className="text-accentColor saturate-50">{" > "}</span>
          {title ? title : pathname}
        </m.span>
        <m.span
          key="line"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          exit={{ opacity: 0 }}
          className="h-px flex-1 bg-neutral-800"
        ></m.span>
      </div>
    </>
  );
};
