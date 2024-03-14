interface FooterProps {
  menuToggled: boolean;
}
export const Footer = ({ menuToggled }: FooterProps) => {
  if (menuToggled) {
    return null;
  }
  return (
    <>
      <footer className="socials absolute bottom-28 2xl:bottom-36 -rotate-90 -left-[4.8rem] text-base md:text-lg mb-2 md:pb-4 font-medium">
        <ul className="social-links flex justify-center items-start space-x-1 list-square marker:text-accentColor saturate-50 gap-3">
          <li className="social-link">
            <a
              href="https://github.com/h4zan"
              data-tooltip-target="tooltip-github"
              className="inline-flex justify-center p-2 z-10"
              target="_blank"
              aria-label="Github link"
            >
              <span className="">GitHub</span>
            </a>
          </li>
          <li className="social-link">
            <a
              href="https://www.linkedin.com/in/hazany/"
              data-tooltip-target="tooltip-linkedin"
              className="inline-flex justify-center p-2 z-10"
              target="_blank"
              aria-label="LinkedIn link)"
            >
              <span className=""> LinkedIn</span>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};
