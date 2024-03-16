interface FooterProps {
  menuToggled: boolean;
}
export const Footer = ({ menuToggled }: FooterProps) => {
  if (menuToggled) {
    return null;
  }
  return (
    <>
      <footer className="socials absolute bottom-32 md:bttom-36 2xl:bottom-36 -rotate-90 -left-[4.8rem] text-base md:text-lg mb-2 md:pb-4 font-medium">
        <ul className="social-links flex justify-center items-start space-x-1 gap-3">
          <li className="social-link flex flex-row items-center justify-center">
            <span className="social-link-bullet w-1.5 h-1.5 md:w-2 md:h-2 inline-block bg-accentColor saturate-50 "></span>
            <a
              href="https://github.com/h4zan"
              data-tooltip-target="tooltip-github"
              className="inline-flex justify-center p-2 z-10"
              target="_blank"
              aria-label="Github link"
            >
              {" "}
              <span className=""> GitHub</span>
            </a>
          </li>
          <li className="social-link flex flex-row items-center justify-center">
            <span className="social-link-bullet w-1.5 h-1.5 md:w-2 md:h-2 inline-block bg-accentColor saturate-50 "></span>

            <a
              href="https://www.linkedin.com/in/hazany/"
              data-tooltip-target="tooltip-linkedin"
              className="inline-flex justify-center p-2 z-10"
              target="_blank"
              aria-label="LinkedIn link)"
            >
              {" "}
              <span className="">LinkedIn</span>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};
