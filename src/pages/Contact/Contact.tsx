import { PageHeader } from "../../components/PageHeader/PageHeader";
import { motion as m } from "framer-motion";
import { ContactForm } from "../../components/ContactForm/ContactForm";

export const Contact = () => {
  return (
    <>
      <div className="contact my-20 mx-auto px-4 md:px-24 2xl:mx-48">
        <PageHeader title="Let's Connect" />
        <div className="flex flex-col justify-around lg:flex-row mt-5 text-base md:text-xl 2xl:text-2xl ">
          <m.div
            key="contact"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            exit={{ opacity: 0 }}
            className="flex flex-col justify-start items-start lg:mr-16 lg:mt-20"
          >
            <p>Questions, feedback, or just want to chat?</p>
            <p className="mb-8 lg:mr-5 max-w-2xl">
              Feel free to contact me. I'm here to help and always open to new
              opportunities.
            </p>
            <h6 className="text-lg font-semibold md:text-xl mb-1 flex flex-row justify-center items-center gap-2">
              <span className="w-2 h-2 block bg-accentColor saturate-50 "></span>
              Social Media:
            </h6>
            <div className="flex flex-row gap-2 ">
              <span>Connect with me on</span>
              <a
                href="https://www.linkedin.com/in/hazany/"
                data-tooltip-target="tooltip-linkedin"
                target="_blank"
                className="font-semibold underline italic hover:decoration-accentColor hover:saturate-50"
              >
                LinkedIn.
              </a>
            </div>
            <p className="mt-2">Looking forward to hearing from you!</p>
          </m.div>
          <m.div
            key="form"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, type: "tween", delay: 0.6 }}
            exit={{ opacity: 0 }}
            className="flex flex-col px-3 py-10 md:justify-center md:items-center "
          >
            <ContactForm />
          </m.div>
        </div>
      </div>
    </>
  );
};
