import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // emailjs.send(serviceID, templateID, templateParams, publicKey)
    emailjs
      .send(
        "service_5r9br3j", //Service ID from EmailJS
        "template_wq6ior6", // Template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "MxMPiXfLmufnbLeDK", //  Public Key
      )
      .then(
        () => {
          setLoading(false);
          alert("[SYSTEM] Transmission Sent Successfully.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("Transmission Error:", error);
          alert("[SYSTEM ERROR] Connection failed. Please try again.");
        },
      );
  };

  return (
    <section className="relative w-full z-0  bg-black overflow-hidden flex flex-col min-h-screen justify-between">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#915eff]/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full flex-grow relative z-10">
        {/* === SECTION HEADER (Anchored in place) === */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2
            className={`${styles.sectionHeadText} uppercase flex items-center gap-3`}
          >
            <span className="w-4 h-8 bg-[#00f7ff] animate-pulse hidden lg:block"></span>
            Comm_Link
          </h2>
        </motion.div>

        {/* === TWO COLUMN LAYOUT === */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between items-start">
          {/* --- RIGHT SIDE: CLEARER CONTACT INFO & DIAGNOSTICS --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-[50%] flex flex-col justify-center gap-8"
          >
            {/* Main Contact Details Box */}
            <div className="border-l-2 border-[#00f7ff] pl-6 py-2 relative">
              <div className="absolute top-0 left-[-5px] w-2 h-2 bg-[#00f7ff] rounded-full animate-pulse"></div>
              <h3 className="text-white text-2xl font-bold uppercase tracking-wide mb-6">
                Direct <span className="text-[#00f7ff]">Connection</span>
              </h3>

              <div className="flex flex-col gap-5 font-mono text-sm">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs mb-1">
                    // DIRECT_INBOX
                  </span>
                  <a
                    href="mailto:naveenoshada@example.com"
                    className="text-gray-200 hover:text-[#00f7ff] text-base transition-colors"
                  >
                    naveenoshada15@gmail.com{" "}
                  </a>
                </div>

                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs mb-1">
                    // SECURE_LINE
                  </span>
                  <a
                    href="tel:+94700000000"
                    className="text-gray-200 hover:text-[#00f7ff] text-base transition-colors"
                  >
                    +94 750 463 043
                  </a>
                </div>

                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs mb-1">
                    // BASE_COORDINATES
                  </span>
                  <p className="text-gray-200 text-base">
                    KAndy, Central Province, Sri Lanka
                  </p>
                </div>

                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs mb-1">
                    // BROADCAST_CHANNEL
                  </span>
                  <a
                    href="https://youtube.com/@ICTwithNaveen"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#915eff] hover:text-white text-base transition-colors flex items-center gap-2"
                  >
                    ICT with Naveen{" "}
                    <span className="text-[10px] bg-[#915eff]/20 border border-[#915eff]/50 px-2 py-0.5 rounded-sm">
                      YOUTUBE
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links Network */}
            <div className="bg-black/40 border border-gray-800 p-4 rounded-md backdrop-blur-md">
              <p className="text-gray-500 font-mono text-xs mb-3">
                // EXTERNAL_NODES
              </p>
              <div className="flex gap-4 font-mono text-sm">
                <a
                  href="https://github.com/naveen076960"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 border border-gray-700 text-gray-400 hover:border-[#00f7ff] hover:text-[#00f7ff] transition-all bg-black/60 rounded-sm"
                >
                  GITHUB
                </a>
                <a
                  href="https://linkedin.com/in/www.linkedin.com/in/naveen-oshada-9747a92b4"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 border border-gray-700 text-gray-400 hover:border-[#915eff] hover:text-[#915eff] transition-all bg-black/60 rounded-sm"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
          </motion.div>
          {/* --- LEFT SIDE: COMPACT COMM-LINK FORM --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-[45%]" // Made smaller (was 55%)
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 bg-black/40 border border-[#915eff]/30 p-6 rounded-lg backdrop-blur-md shadow-[0_0_20px_rgba(145,94,255,0.05)]"
            >
              <label className="flex flex-col font-mono">
                <span className="text-gray-400 mb-2 text-xs tracking-widest uppercase">
                  &gt; [SENDER_ID]
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name / Designation"
                  className="bg-black/60 border border-gray-700 py-2.5 px-4 text-white text-sm rounded-sm outline-none font-sans focus:border-[#915eff] transition-colors"
                />
              </label>

              <label className="flex flex-col font-mono">
                <span className="text-gray-400 mb-2 text-xs tracking-widest uppercase">
                  &gt; [RETURN_ADDRESS]
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email Address"
                  className="bg-black/60 border border-gray-700 py-2.5 px-4 text-white text-sm rounded-sm outline-none font-sans focus:border-[#915eff] transition-colors"
                />
              </label>

              <label className="flex flex-col font-mono">
                <span className="text-gray-400 mb-2 text-xs tracking-widest uppercase">
                  &gt; [ENCRYPTED_PAYLOAD]
                </span>
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Type your message here..."
                  className="bg-black/60 border border-gray-700 py-2.5 px-4 text-white text-sm rounded-sm outline-none font-sans focus:border-[#915eff] transition-colors resize-none custom-scrollbar"
                />
              </label>

              <button
                type="submit"
                className="bg-transparent border border-[#915eff] text-[#915eff] hover:bg-[#915eff]/10 py-2.5 px-6 rounded-sm font-bold shadow-[0_0_10px_rgba(145,94,255,0.2)] hover:shadow-[0_0_20px_rgba(145,94,255,0.6)] w-fit uppercase font-mono text-sm tracking-widest transition-all mt-2 flex items-center gap-2 group"
              >
                {loading ? "TRANSMITTING..." : "INITIATE_HANDSHAKE"}
                {!loading && (
                  <span className="w-2 h-2 bg-[#915eff] rounded-full animate-ping group-hover:bg-white"></span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* === GLOBAL FOOTER === */}
      <div className="w-full mt-20 border-t border-gray-800 bg-black py-4 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-16 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-mono text-[10px] sm:text-[12px] uppercase">
            &copy; {new Date().getFullYear()} NAVEEN OSHADA //
            ALL_RIGHTS_RESERVED
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_green] animate-pulse"></span>
            <p className="text-green-500 font-mono text-[10px] tracking-widest">
              SYS_CONNECTION_STABLE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
