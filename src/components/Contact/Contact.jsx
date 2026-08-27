import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);

    try {
      const result = await emailjs.sendForm(
        "service_0nen6lj",
        "template_bmlax1f",
        form.current,
        {
          publicKey: "TEgIS9zH7Emu-uIhZ",
        },
      );

      console.log("EmailJS Success:", result.status, result.text);

      toast.success("Message sent successfully! ✅", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });

      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      console.error("Status:", error?.status);
      console.error("Text:", error?.text);

      toast.error(error?.text || "Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-24 px-6 md:px-[7vw] lg:px-[15vw]"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white">CONTACT</h2>

        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-5 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Have an opportunity, project, or question?
          <br />
          Feel free to get in touch with me.
        </p>
      </div>

      {/* Contact Card */}
      <div
        className="
          w-full
          max-w-2xl
          bg-[#0d081f]
          border
          border-purple-500/30
          rounded-2xl
          p-6
          sm:p-8
          md:p-10
          shadow-[0_0_35px_rgba(130,69,236,0.15)]
        "
      >
        {/* Card Heading */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Let's Connect
            <span className="ml-2">🚀</span>
          </h3>

          <p className="text-gray-400 text-sm md:text-base mt-2">
            Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          {/* Name */}
          <div>
            <label
              htmlFor="user_name"
              className="block text-gray-300 font-semibold mb-2"
            >
              Name
            </label>

            <input
              id="user_name"
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
              autoComplete="name"
              className="
                w-full
                px-4
                py-3
                rounded-xl
                bg-[#131025]
                text-white
                placeholder-gray-500
                border
                border-gray-700
                outline-none
                transition
                focus:border-purple-500
                focus:ring-2
                focus:ring-purple-500/20
              "
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="user_email"
              className="block text-gray-300 font-semibold mb-2"
            >
              Email
            </label>

            <input
              id="user_email"
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
              autoComplete="email"
              className="
                w-full
                px-4
                py-3
                rounded-xl
                bg-[#131025]
                text-white
                placeholder-gray-500
                border
                border-gray-700
                outline-none
                transition
                focus:border-purple-500
                focus:ring-2
                focus:ring-purple-500/20
              "
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-gray-300 font-semibold mb-2"
            >
              Subject
            </label>

            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Enter subject"
              required
              className="
                w-full
                px-4
                py-3
                rounded-xl
                bg-[#131025]
                text-white
                placeholder-gray-500
                border
                border-gray-700
                outline-none
                transition
                focus:border-purple-500
                focus:ring-2
                focus:ring-purple-500/20
              "
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-300 font-semibold mb-2"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              rows="6"
              required
              className="
                w-full
                px-4
                py-3
                rounded-xl
                bg-[#131025]
                text-white
                placeholder-gray-500
                border
                border-gray-700
                outline-none
                transition
                focus:border-purple-500
                focus:ring-2
                focus:ring-purple-500/20
                resize-none
              "
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSending}
            className={`
              w-full
              py-3.5
              rounded-xl
              text-white
              font-bold
              text-lg
              transition-all
              duration-300
              ${
                isSending
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:-translate-y-0.5"
              }
            `}
          >
            {isSending ? "Sending..." : "Send Message 🚀"}
          </button>
        </form>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
