import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center text-center px-4">

      <motion.h1 
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I'm Viraj
      </motion.h1>

      <p className="text-gray-400 mb-6 text-lg">
        Frontend Developer | SPPU Student | React Enthusiast
      </p>

      <div className="flex gap-6 text-3xl mb-6">
        <a href="https://linkedin.com" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com" target="_blank">
          <FaInstagram />
        </a>
      </div>

      <a
        href="/resume.pdf"
        className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600"
      >
        Download Resume
      </a>
    </div>
  );
}