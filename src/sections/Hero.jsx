{/* HERO */}
<section
  id="home"
  className="relative min-h-screen flex flex-col justify-center items-center text-center pt-24 px-6 overflow-hidden"
>
  {/* Split Background */}
  <div className="absolute inset-0 flex -z-10">
    <div className="w-1/2 bg-purple-700"></div>
    <div className="w-1/2 bg-pink-600"></div>
  </div>

  <motion.img
    src="/profile.png"
    className="w-52 md:w-60 rounded-full border-4 border-white shadow-2xl mb-6"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  />

  <motion.h1
    className="text-3xl md:text-5xl font-extrabold text-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    Hi, I'm Viraj Dhaigude
  </motion.h1>

  <p className="mt-4 text-lg md:text-xl text-white/80">
    S.E Student | Python & DSA | Future Software Engineer 🚀
  </p>

  <a
    href="/resume.pdf"
    download
    className="mt-6 px-6 py-3 bg-white text-purple-700 rounded-lg font-semibold hover:scale-105 transition"
  >
    Download Resume
  </a>
</section>