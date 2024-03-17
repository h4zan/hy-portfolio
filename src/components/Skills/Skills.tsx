import htmlIcon from "/assets/html-icon.svg";
import cssIcon from "/assets/css-icon.svg";
import jsIcon from "/assets/js-icon.svg";
import tsIcon from "/assets/ts-icon.svg";
import reactIcon from "/assets/react-icon.svg";
import vueIcon from "/assets/vue-icon.svg";
import scssIcon from "/assets/scss-icon.svg";
import bootstrapIcon from "/assets/bootstrap-icon.svg";
import nodeIcon from "/assets/node-icon.svg";
import gitIcon from "/assets/git-icon.svg";
import cypressIcon from "/assets/cypress-icon.svg";
import jestIcon from "/assets/jest-icon.svg";
import mongodbIcon from "/assets/mongodb-icon.svg";
import graphqlIcon from "/assets/graphql-icon.svg";
import sqliteIcon from "/assets/sqlite-icon.svg";
import postmanIcon from "/assets/postman-icon.svg";
import { PageHeader } from "../PageHeader/PageHeader";

const skillsInfo = [
  { icon: jsIcon, label: "JavaScript" },
  { icon: tsIcon, label: "Typescript" },
  { icon: htmlIcon, label: "HTML" },
  { icon: cssIcon, label: "CSS" },
  { icon: reactIcon, label: "React" },
  { icon: vueIcon, label: "Vue" },
  { icon: scssIcon, label: "Scss" },
  { icon: bootstrapIcon, label: "Bootstrap" },
  { icon: nodeIcon, label: "Node" },
  { icon: gitIcon, label: "Git" },
  { icon: cypressIcon, label: "Cypress" },
  { icon: jestIcon, label: "Jest" },
  { icon: mongodbIcon, label: "MongoDb" },
  { icon: graphqlIcon, label: "GraphQL" },
  { icon: sqliteIcon, label: "SQlite" },
  { icon: postmanIcon, label: "Postman" },
];

export const Skills = () => {
  return (
    <>
      <section className="skills py-12 px-3 md:px-12 lg:px-16 mb-6 ">
        <div className="">
          <PageHeader title="Skills" />
        </div>
        <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-3 md:px-12 ">
          {skillsInfo.map((skill, i) => (
            <div key={i} className=" hover:scale-110 duration-500  ">
              <img
                className="w-12 h-12 md:w-14 2xl:w-16 2xl:h-16 md:h-14 mx-auto"
                src={skill.icon}
                alt={`${skill.label} icon`}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
