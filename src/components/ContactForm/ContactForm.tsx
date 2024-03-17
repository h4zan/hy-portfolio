import { ChangeEvent, useState } from "react";
import { IForm, defaultIForm } from "../../models/Form";

export const ContactForm = () => {
  const [formData, setFormData] = useState<IForm>(defaultIForm);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    setFormData({ ...formData, [name]: e.target.value });
  };

  grecaptcha.ready(function () {
    grecaptcha
      .execute("6Ld7iHYpAAAAAKnd1aoBgEURwIt-YJiMsu-MsD-l", {
        action: "homepage",
      })
      .then(function (token) {
        const captchaResponseElement = document.getElementById(
          "captchaResponse"
        ) as HTMLInputElement;
        if (captchaResponseElement) {
          captchaResponseElement.value = token;
        } else {
          console.error("captchaResponse not found");
        }
      });
  });
  return (
    <>
      <div className="contact-form relative py-3">
        <div className="hidden md:block absolute inset-0 transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-lg border-2 border-neutral-700 shadow-[3px_3px_0_0_rgba(0,0,0,1)] shadow-accentColor saturate-50 bg-accentBackground"></div>

        <div className="relative w-full">
          <section className="bg-primaryColor">
            <div className="border-2 rounded-lg border-neutral-800 shadow-[6px_6px_0_0_#0c0c0c] shadow-neutral-700/100 p-2 md:p-12 lg:-p-5 flex flex-col items-center justify-center">
              <form
                action="https://getform.io/f/7230c610-1d21-477c-a7a0-9813c9b45406"
                method="POST"
                acceptCharset="UTF-8"
                encType="multipart/form-data"
                className="flex flex-col rounded-lg overflow-hidden shadow-inset-custom px-2 pt-6 pb-2"
              >
                <h6 className="text-lg font-semibold mb-4">Contact me</h6>
                <div className="mb-4">
                  <label
                    htmlFor="userName"
                    className="block text-base font-medium mb-2"
                  >
                    Name <span className="text-accentColor saturate-50">*</span>
                  </label>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    value={formData.userName}
                    placeholder="Enter your name."
                    required
                    autoComplete="off"
                    onChange={handleInputChange}
                    className="hover:shadow bg-transparent border-b-2 border-neutral-800"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-base font-medium mb-2"
                  >
                    Email{" "}
                    <span className="text-accentColor saturate-50">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    placeholder="Enter your email."
                    required
                    autoComplete="off"
                    onChange={handleInputChange}
                    className="hover:shadow bg-transparent border-b-2 border-neutral-800"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-base font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    placeholder="Enter your message here."
                    onChange={handleInputChange}
                    className="hover:shadow bg-transparent border-b-2 border-neutral-800"
                    rows={4}
                  />
                </div>
                <input
                  type="hidden"
                  id="captchaResponse"
                  name="g-recaptcha-response"
                />
                <input
                  type="hidden"
                  name="_gotcha"
                  className="display:none !important !hidden"
                />
                <button
                  type="submit"
                  className="w-fit mb-3 border-b-2 border-neutral-800 hover:border-accentColor hover:saturate-50"
                >
                  Send
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
