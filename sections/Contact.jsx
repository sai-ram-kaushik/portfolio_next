import Image from "next/image";
import contact_vector from "@/public/assets/contact.svg";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("meqyjndb");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div id="contact-me" className="w-full p-5 mt-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h3>
            Contact <span className="font-bold">Me</span>
          </h3>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-16">
          <div>
            <Image src={contact_vector} alt="banner_contact" />
          </div>

          <form className="flex flex-col items-start " onSubmit={handleSubmit}>
            <div className="flex flex-col items-center gap-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                name="your name"
              />
              <input
                type="email"
                placeholder="Enter your email"
                required
                name="email"
              />
              <input
                type="text"
                placeholder="Enter your mobile number"
                required
                name="mobile number"
              />
              <textarea
                placeholder="Your message"
                name="message"
                rows={10}
                cols={10}
                className="p-3 rounded-lg bg-transparent border lg:min-w-[30rem]"
              />

              <button
                className="p-3 rounded-tr-xl rounded-bl-xl bg-primary text-background  border border-primary font-semibold hover:bg-background hover:text-secondary duration-150"
                disabled={state.submitting}>
                Get in Touch
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
