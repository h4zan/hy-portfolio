import { motion as m } from "framer-motion";

interface BackdropProps {
  isVisible: boolean;
}

export const Backdrop = ({ isVisible }: BackdropProps) => {
  return (
    <div className="backdrop-container">
      {isVisible && (
        <>
          <m.div
            key="primary"
            className="fade-in-backdrop absolute top-0 left-0 w-full h-full bg-neutral-400 saturate-50 opacity-10 origin-left z-50 "
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.36, 1], delay: 0.5 }}
          />
          <m.div
            key="secondary"
            className="fade-out-backdrop absolute top-0 left-0 w-full h-full bg-neutral-400 saturate-50 opacity-10 origin-right z-50 "
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.36, 1], delay: 0.8 }}
          />
        </>
      )}
    </div>
  );
};
