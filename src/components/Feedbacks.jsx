import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

// --- INITIAL MOCK DATA ---
const initialTestimonials = [
  {
    id: "NODE-01",
    ip: "192.168.1.104",
    latency: "12ms",
    testimonial:
      "Naveen's ability to architect complex web environments is outstanding. The Study Mate system operates with perfect stability.",
    name: "Dr. A. Perera",
    designation: "Senior Lecturer",
    company: "OUSL",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: "NODE-02",
    ip: "10.0.0.55",
    latency: "8ms",
    testimonial:
      "The ICT Broadcast Node he set up is phenomenal. He took complex tech concepts and made them highly accessible for Grade 6-11 kids.",
    name: "S. Fernando",
    designation: "Coordinator",
    company: "ICT with Naveen",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: "NODE-03",
    ip: "172.16.254.1",
    latency: "15ms",
    testimonial:
      "Flawless execution on the frontend matrix. His React and Three.js integration runs at 60FPS. A true fullstack operative.",
    name: "K. Silva",
    designation: "Lead Dev",
    company: "Tech Nexus",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
];

// --- SMALLER, COMPACT NETWORK NODE ---
const NetworkNode = ({
  id,
  ip,
  latency,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <div className="relative pl-8 sm:pl-12 w-full group mb-6 last:mb-0">
    <div className="absolute left-[-4px] sm:left-[-5px] top-5 w-2.5 h-2.5 rounded-full bg-black border-2 border-[#915eff] group-hover:border-[#00f7ff] group-hover:shadow-[0_0_10px_#00f7ff] transition-all duration-300 z-10"></div>
    <div className="absolute left-1 sm:left-0 top-[23px] w-6 sm:w-10 h-[1px] bg-[#915eff]/40 group-hover:bg-[#00f7ff]/70 transition-colors duration-300 z-0"></div>

    <div className="bg-black/60 border border-gray-800 group-hover:border-[#00f7ff]/50 p-4 rounded-md backdrop-blur-md shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-all duration-300 relative overflow-hidden animate-pulse-once">
      <div className="flex justify-between items-center mb-2 border-b border-gray-800 pb-1">
        <div className="flex gap-3">
          <span className="font-mono text-[9px] text-[#00f7ff] tracking-widest">
            {id}
          </span>
          <span className="font-mono text-[9px] text-gray-500 hidden sm:block">
            IP: {ip}
          </span>
        </div>
        <span className="font-mono text-[9px] text-green-400">
          PING: {latency}
        </span>
      </div>

      <div className="mb-3">
        <p className="text-gray-300 font-mono text-[11px] sm:text-[12px] leading-relaxed">
          &gt; "{testimonial}"
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-sm overflow-hidden border border-[#915eff]/50 group-hover:border-[#00f7ff] transition-colors relative bg-gray-900">
          <div className="absolute inset-0 bg-[#00f7ff]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover grayscale contrast-125"
          />
        </div>
        <div className="flex-1 font-mono">
          <p className="text-white text-[12px] font-bold group-hover:text-[#00f7ff] transition-colors">
            {name}
          </p>
          <p className="text-gray-500 text-[9px] uppercase">
            {designation} {company && `// `}
            <span className="text-[#915eff]">{company}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Feedbacks = () => {
  // We start with an empty array. Firebase will fill it instantly.
  const [feedbacks, setFeedbacks] = useState([]);
  const [form, setForm] = useState({ name: "", role: "", message: "" });
  const [isTransmitting, setIsTransmitting] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // 2. FETCH DATA IN REAL-TIME
  useEffect(() => {
    // Query the "feedbacks" collection, ordered by newest first
    const q = query(collection(db, "feedbacks"), orderBy("createdAt", "desc"));

    // onSnapshot listens for live updates. If someone adds feedback, this triggers instantly.
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const liveData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeedbacks(liveData);
    });

    return () => unsubscribe(); // Cleanup connection when component unmounts
  }, []);

  // 3. PUSH DATA TO FIREBASE
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;

    setIsTransmitting(true);

    try {
      // Build the payload
      const newPayload = {
        // Firebase generates a unique ID, but we keep your visual ID logic for the UI
        visualId: `NODE-${Math.floor(Math.random() * 1000)}`,
        ip: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
        latency: `${Math.floor(Math.random() * 30) + 2}ms`,
        testimonial: form.message,
        name: form.name,
        designation: form.role.split("@")[0]?.trim() || "Guest_User",
        company: form.role.split("@")[1]?.trim() || "Unknown_Network",
        image: "https://api.dicebear.com/7.x/bottts/svg?seed=" + form.name,
        createdAt: serverTimestamp(), // Tells Firebase to stamp the exact server time
      };

      // Push to the 'feedbacks' collection in Firestore
      await addDoc(collection(db, "feedbacks"), newPayload);

      // Clear the form
      setForm({ name: "", role: "", message: "" });
    } catch (error) {
      console.error("Transmission Error:", error);
      alert("[ERROR] Failed to connect to server.");
    } finally {
      setIsTransmitting(false);
    }
  };
  return (
    <section className="w-full relative z-0 py-10 pb-20  mx-auto max-w-7xl px-6 sm:px-12 lg:px-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-10 flex flex-col lg:items-end text-left lg:text-right"
      >
        <h2
          className={`${styles.sectionHeadText} uppercase flex items-center justify-start lg:justify-end gap-3`}
        >
          <span className="w-4 h-8 bg-[#00f7ff] animate-pulse hidden lg:block"></span>
          Feedback reply
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between items-start">
        {/* --- LEFT COLUMN: ADD FEEDBACK FORM --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full lg:w-[40%] bg-black/40 border border-[#00f7ff]/30 p-6 rounded-lg backdrop-blur-sm shadow-[0_0_15px_rgba(0,247,255,0.05)]"
        >
          <div className="mb-4 border-b border-gray-700 pb-2">
            <h3 className="text-[#00f7ff] font-mono text-sm tracking-widest flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
              TRANSMIT_ENDORSEMENT
            </h3>
          </div>

          {/* Added onSubmit handler here */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 font-mono text-sm"
          >
            <label className="flex flex-col">
              <span className="text-gray-400 mb-1 text-xs">
                ID_DESIGNATION (Name)
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="bg-black/50 border border-gray-700 focus:border-[#00f7ff] outline-none text-white px-3 py-2 rounded-sm"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-gray-400 mb-1 text-xs">
                NETWORK_ROLE (Title @ Company)
              </span>
              <input
                type="text"
                name="role"
                value={form.role}
                onChange={handleChange}
                placeholder="e.g. Lead Dev @ TechCorp"
                className="bg-black/50 border border-gray-700 focus:border-[#00f7ff] outline-none text-white px-3 py-2 rounded-sm"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-gray-400 mb-1 text-xs">
                PAYLOAD (Message)
              </span>
              <textarea
                rows="3"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Input feedback..."
                className="bg-black/50 border border-gray-700 focus:border-[#00f7ff] outline-none text-white px-3 py-2 rounded-sm resize-none custom-scrollbar"
              ></textarea>
            </label>

            <button
              type="submit"
              disabled={isTransmitting}
              className="mt-2 bg-transparent border border-[#00f7ff] text-[#00f7ff] hover:bg-[#00f7ff]/10 py-2 rounded-sm uppercase tracking-widest transition-colors shadow-[0_0_10px_rgba(0,247,255,0.2)] hover:shadow-[0_0_15px_rgba(0,247,255,0.5)] disabled:opacity-50"
            >
              {isTransmitting ? "UPLOADING..." : "Send_Packet"}
            </button>
          </form>
        </motion.div>

        {/* --- RIGHT COLUMN: SCROLLABLE TIMELINE --- */}
        <div className="w-full lg:w-[50%] relative lg:mr-10">
          <div className="absolute left-0 sm:left-[-1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#915eff]/50 via-gray-800 to-transparent z-0"></div>

          <div className="h-[340px] overflow-y-auto pr-2 sm:pr-4 custom-scrollbar relative z-10 flex flex-col">
            {feedbacks.length === 0 ? (
              <p className="text-gray-500 font-mono text-xs pl-10 mt-5 animate-pulse">
                Waiting for inbound transmissions...
              </p>
            ) : (
              feedbacks.map((testimonial, index) => (
                <NetworkNode
                  key={testimonial.id}
                  index={index}
                  id={testimonial.visualId}
                  {...testimonial}
                />
              ))
            )}
          </div>

          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black to-transparent pointer-events-none z-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
