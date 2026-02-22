import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("skills");
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const skills = [
    { name: "Python", percent: 90 },
    { name: "DSA", percent: 80 },
    { name: "React", percent: 85 },
    { name: "Tailwind", percent: 80 },
  ];

  const projects = [
    { title: "Portfolio Website", image: "/p1.png", link: "#" },
    { title: "Time Nest Article", image: "/p2.jpeg", link: "https://www.ijert.org/review-paper-on-application-timenest" },
    { title: "React UI Project", image: "/p3.png", link: "#" },
  ];

  const certifications = [
    {
      title: "DS & ML Foundation",
      link: "https://www.guvi.in/share-certificate/92869A7Ciyk443z1Q6",
    },
    {
      title: "Frontend Development",
      link: "https://oneroadmap.io/skills/frontend/certificate/CERT-6F85FF44",
    },
    {
      title: "Power BI",
      link: "https://verify.skillnation.ai/certificate?certificate_id=6887003894730109c25a828b",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "certs", "contact"];
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollY + windowH / 2 >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }

      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((scrollY / docHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const bgMain = darkMode ? "bg-black text-white" : "bg-white text-black";
  const cardBg = darkMode ? "bg-gray-900" : "bg-gray-100";
  const textSub = darkMode ? "text-gray-400" : "text-gray-600";

  return (
    <div className={`min-h-screen relative font-sans overflow-x-hidden ${bgMain} transition-all duration-500`}>
      
      {/* Scroll Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-purple-500 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: darkMode ? "#000" : "#ffffff" },
          particles: {
            color: { value: "#9333ea" },
            links: { enable: true, color: "#9333ea" },
            move: { enable: true, speed: 1 },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center">
        <h1
          className="text-xl font-bold text-purple-500 cursor-pointer"
          onClick={() => handleNavClick("home")}
        >
          Viraj Dhiagude
        </h1>

        <div className="hidden md:flex gap-6 font-semibold">
          {["Home","About","Skills","Projects","Certifications","Contact"].map(
            (label, i) => {
              const ids = ["home","about","skills","projects","certs","contact"];
              return (
                <button
                  key={i}
                  onClick={() => handleNavClick(ids[i])}
                  className={`hover:text-purple-500 ${
                    activeSection === ids[i] ? "text-purple-400 underline" : ""
                  }`}
                >
                  {label}
                </button>
              );
            }
          )}
        </div>

        {/* Dark Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl text-purple-400"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center pt-24 px-6">
        <motion.img
          src="/profile.png"
          className="w-60 rounded-full border-4 border-purple-500 shadow-xl mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Hi, I'm Viraj Dhaigude
        </motion.h1>

        <p className={`mt-4 text-xl ${textSub}`}>
          S.E Student | Python & DSA | Future Software Engineer 🚀
        </p>

        <a
          href="/resume.pdf"
          download
          className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold"
        >
          Download Resume
        </a>

        <div className="flex gap-6 mt-6 text-2xl text-purple-400">
          <a href="https://www.linkedin.com/in/viraj-dhaigude-7a0089333/" target="_blank"><FaLinkedin/></a>
          <a href="https://www.instagram.com/theviraj.dhaigude/" target="_blank"><FaInstagram/></a>
          <a href="https://github.com/" target="_blank"><FaGithub/></a>
          <a href="mailto:vdhaigude507@gmail.com"><FaEnvelope/></a>
        </div>
      </section>

      {/* ABOUT */}
<section id="about" className="py-20 max-w-6xl mx-auto px-6">
  <h2 className="text-3xl md:text-4xl font-bold text-purple-500 text-center mb-10">
    About Me
  </h2>

  <div className="grid md:grid-cols-2 gap-10 items-center">
    
    {/* Left Content */}
    <div>
      <p className={`text-lg leading-relaxed ${textSub}`}>
        I am a Second Year Engineering student from SPPU with a strong passion 
        for Data Structures & Algorithms and Frontend Development.
      </p>

      <p className={`mt-4 ${textSub}`}>
        I focus on building responsive React applications, solving DSA problems 
        daily in Python, and continuously improving my problem-solving skills.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative border-l-2 border-purple-500 pl-6 space-y-6">
      <div>
        <h4 className="font-semibold text-purple-400">2023 - Present</h4>
        <p>B.E Computer Engineering (SPPU)</p>
      </div>

      <div>
        <h4 className="font-semibold text-purple-400">2022</h4>
        <p>Higher Secondary Education</p>
      </div>

      <div>
        <h4 className="font-semibold text-purple-400">Skills Development</h4>
        <p>React, Tailwind, Python, DSA, Power BI</p>
      </div>
    </div>

  </div>
</section>

      {/* SKILLS */}
      <section id="skills" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-purple-500 text-center mb-10">Skills</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div key={i} className={`${cardBg} p-6 rounded-xl`}>
              <p className="font-semibold mb-2">{skill.name}</p>
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <div className="bg-purple-500 h-2 rounded-full" style={{width:`${skill.percent}%`}}/>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-purple-500 text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <a key={i} href={proj.link} target="_blank" className={`${cardBg} p-6 rounded-xl hover:scale-105 transition`}>
              <img src={proj.image} className="rounded mb-4"/>
              <h3 className="text-xl font-semibold">{proj.title}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certs" className="py-20 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-500 mb-10">Certifications</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert,i)=>(
            <a key={i} href={cert.link} target="_blank" className={`${cardBg} p-6 rounded-xl w-64 hover:scale-105 transition`}>
              {cert.title}
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
<section id="contact" className="py-20 px-6 text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-8">
    Contact Me
  </h2>

  <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
    
    <div className={`${cardBg} p-6 rounded-xl`}>
      <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
      <p>Email: vdhaigude507@gmail.com</p>
      <p>Location: Pune, Maharashtra</p>
      <p>Available for: Internships & Projects</p>

      <div className="flex justify-center gap-6 mt-6 text-2xl text-purple-400">
        <a href="https://www.linkedin.com/in/viraj-dhaigude-7a0089333/" target="_blank"><FaLinkedin/></a>
        <a href="https://www.instagram.com/theviraj.dhaigude/" target="_blank"><FaInstagram/></a>
        <a href="https://github.com/" target="_blank"><FaGithub/></a>
        <a href="mailto:vdhaigude507@gmail.com"><FaEnvelope/></a>
      </div>
    </div>

    <div className={`${cardBg} p-6 rounded-xl`}>
      <h3 className="text-xl font-semibold mb-4">Send Message</h3>
      <input className="w-full p-2 mb-3 rounded bg-gray-800" placeholder="Your Name" />
      <input className="w-full p-2 mb-3 rounded bg-gray-800" placeholder="Your Email" />
      <textarea className="w-full p-2 mb-3 rounded bg-gray-800" placeholder="Your Message" />
      <button className="w-full bg-purple-600 py-2 rounded hover:bg-purple-700">
        Send Message
      </button>
    </div>

  </div>
</section>

      <p className="text-sm text-gray-400">
  © 2026 Viraj Dhaigude. Built with React & Tailwind CSS.
</p>
    </div>
  );
}