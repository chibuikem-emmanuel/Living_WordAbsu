import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Contact Us
        </h2>

        <form className="mt-16 space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-slate-800 p-4 rounded-xl"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-slate-800 p-4 rounded-xl"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full bg-slate-800 p-4 rounded-xl"
          />

          <button
            className="bg-yellow-500 text-black px-8 py-4 rounded-full"
          >
            Send Message
          </button>

        </form>

        <div className="flex justify-center gap-6 mt-12 text-3xl">
          <FaFacebook />
          <FaInstagram />
          <FaYoutube />
        </div>

      </div>
    </section>
  );
}