import { Project } from "../../models/Project";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <>
      <div className="project-card relative " key="project-card">
        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-neutral-800 rounded-lg"></span>
        <div className="flex flex-col relative overflow-hidden shadow-lg  bg-neutral-100 border-2 border-neutral-800 rounded-lg hover:scale-105 hover:border-accentColor hover:saturate-50 transition duration-500">
          <div className="m-2 ">
            <img
              src={project.projectImg}
              alt={project.projectInfo}
              className="w-full h-[225px] rounded-lg saturate-50  "
            />
          </div>
          <div className="flex flex-col rounded-lg overflow-hidden max-w-xs ">
            <div className="px-6 py-4 mb-auto">
              <h4 className="text-lg font-semibold w-fit truncate capitalize border-b-2 border-neutral-800">
                {project.projectTitle}
              </h4>
              <div className="px-2 py-3 flex flex-row items-center justify-between ">
                {project.projectLive && (
                  <a
                    href={project.projectLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1 text-xs font-regular mr-1 flex flex-row items-center border-b-2 border-transparent  hover:border-accentColor "
                  >
                    <svg
                      width="13px"
                      height="13px"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                      strokeWidth="3"
                      stroke="#000000"
                      fill="none"
                    >
                      <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6" />
                      <path d="M37.86,51.1A47,47,0,0,1,32,56.7" />
                      <path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85" />
                      <path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24" />
                      <line x1="10.37" y1="19.9" x2="53.75" y2="19.9" />
                      <line x1="32" y1="6.99" x2="32" y2="56.7" />
                      <line x1="11.05" y1="45.48" x2="37.04" y2="45.48" />
                      <line x1="7.14" y1="32.46" x2="56.86" y2="31.85" />
                      <path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z" />
                    </svg>
                    <span className="ml-1 font-medium ">Live</span>
                  </a>
                )}
                <a
                  href={project.projectOnGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 text-xs font-regular  mr-1 flex flex-row items-center border-b-2 border-transparent hover:border-accentColor"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13px"
                    height="13px"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    viewBox="0 0 640 640"
                  >
                    <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
                  </svg>
                  <span className="ml-1 font-medium">Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
