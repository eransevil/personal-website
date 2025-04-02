import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaMoon,
  FaSun,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";
import { pre } from "framer-motion/client";
import { Link } from "react-scroll";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      {/* <Projects /> */}
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

function Header({ darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sections = ["Home", "About", "Experience", "Contact"];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-gray-800 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Eran Sevil
        </motion.a>

        <nav className="hidden md:flex space-x-8">
          {sections.map((item, index) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              spy={true}
              offset={-70} // כדי לקחת בחשבון את ה-navbar
              duration={500}
              onSetActive={() => setActiveSection(item.toLowerCase())}
              className={`text-gray-600 dark:text-gray-300 transition-colors cursor-pointer 
            ${
              activeSection === item.toLowerCase()
                ? "font-bold text-blue-600 dark:text-blue-400"
                : "hover:text-blue-600 dark:hover:text-blue-400"
            }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            onClick={() => setDarkMode((prev) => !prev)}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-800 dark:to-blue-900"></div>

        {/* Animated background shapes */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500 dark:bg-blue-600 opacity-10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4">
            Eran Sevil
          </h1>
          <h3 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-8">
            Full-Stack Developer
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            Full-stack Developer who transforms ideas into stunning
            cross-platform applications
          </p>
          <div className="flex space-x-4">
            {/* <motion.a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work <FaChevronRight className="ml-2" />
            </motion.a> */}
            <motion.a
              href="#contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-md font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React Native",
        "React.js",
        "Vue.js",
        "React Native",
        "Redux/Vuex",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Express", "Django", "RabbitMQ", "Kafka"],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    },
    {
      category: "DevOps",
      items: ["AWS (EC2, RDS, S3)", "Docker", "Nginx", "CI/CD"],
    },
    {
      category: "Networking",
      items: ["Version control (Git)", "HTTP/HTTPS", "WebSockets", "SSL/TLS"],
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a passionate Full-Stack Developer with expertise in building
              mobile and web applications. My journey in the tech industry began
              with a strong foundation in Information Systems and has evolved
              through practical experience at companies like Ideo Digital and
              IDI Venture LTD.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I specialize in cross-platform mobile application development with
              React Native and creating seamless web experiences using modern
              JavaScript frameworks like React.js and Vue.js. On the backend,
              I'm proficient with Node.js and Python Django, with experience in
              both monolithic and microservices architectures.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My approach combines technical expertise with a focus on user
              experience and performance optimization. I'm constantly exploring
              new technologies and best practices to deliver high-quality
              solutions.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
              >
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li
                      key={i}
                      className="text-gray-600 dark:text-gray-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// function Projects() {
//   // Sample projects based on your experience
//   const projects = [
//     {
//       title: "Crypto Trading App",
//       description:
//         "Cross-platform mobile application for Crypto CFDs trading with real-time market data and advanced trading tools.",
//       image: "https://placehold.co/600x400/EEE/31343C",
//       tech: ["React Native", "Node.js", "WebSockets", "Redux"],
//       github: "#",
//       demo: "#",
//     },
//     {
//       title: "Fintech CRM Platform",
//       description:
//         "Scalable CRM web application for financial services with comprehensive customer management and analytics features.",
//       image: "https://placehold.co/600x400/EEE/31343C",
//       tech: ["Python Django", "Vue.js", "PostgreSQL", "AWS"],
//       github: "#",
//       demo: "#",
//     },
//     {
//       title: "Mobile App Marketplace",
//       description:
//         "High-performance, scalable mobile application with optimized UI/UX for marketplace functionality.",
//       image: "https://placehold.co/600x400/EEE/31343C",
//       tech: ["React Native", "Node.js", "MongoDB", "CI/CD"],
//       github: "#",
//       demo: "#",
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-6">
//         <motion.div
//           className="mb-16 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
//             My Projects
//           </h2>
//           <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
//           <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
//             Here are some of the projects I've worked on throughout my career.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover object-center"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex space-x-3">
//                   <a
//                     href={project.github}
//                     className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-sm flex items-center"
//                   >
//                     <FaGithub className="mr-2" /> GitHub
//                   </a>
//                   <a
//                     href={project.demo}
//                     className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm flex items-center"
//                   >
//                     Demo <FaChevronRight className="ml-1" />
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function Experience() {
  const experiences = [
    {
      position: "Full-stack Developer",
      company: "Ideo Digital",
      duration: "2023 - Present",
      description: [
        "Developed and deployed high-performance, scalable mobile applications using React Native, optimizing UI/UX.",
        "Managed the entire app lifecycle, including development, testing, and publication to both the App Store and Google Play.",
      ],
    },
    {
      position: "Full-stack Developer",
      company: "IDI Venture LTD (Fintech)",
      duration: "2021 - 2023",
      description: [
        "Developed and maintained a cross-platform trading app for Crypto CFDs trading, providing real-time market data and advanced trading tools using React Native and Node.",
        "Designed, developed, and maintained a scalable CRM web application using Python (Django) and Vue.js, deployed on an AWS-hosted Ubuntu server.",
      ],
    },
    {
      position: "Internship",
      company: "RED HAT",
      duration: "2020 - 2021",
      description: [
        "Completed a part-time internship as part of an academic excellence program, focusing on Python and AWS.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-10 relative pl-8 border-l-2 border-blue-600 dark:border-blue-400"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {exp.position}
              </h3>
              <div className="flex items-center mb-2">
                <h4 className="text-lg text-blue-600 dark:text-blue-400">
                  {exp.company}
                </h4>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-600 dark:text-gray-300">
                  {exp.duration}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Education
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                B.Sc. Information System
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                The Academic College of Tel Aviv | GPA 86.5 | 2017 - 2020
              </p>
            </div>
            {/* <div>
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                Full Stack Web Coding Bootcamp
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Graduate of the Coding Academy | 2020 - 2021
              </p>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendEmail = () => {
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`New message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:eransevil2@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <motion.button
                type="button"
                onClick={handleSendEmail}
                className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-md mr-4">
                    <FaEnvelope className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Email
                    </h4>
                    <a
                      href="mailto:eransevil2@gmail.com"
                      className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      eransevil2@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-md mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600 dark:text-blue-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1H4v8a1 1 0 001 1h10a1 1 0 001-1V6zM4 4a1 1 0 100 2h12a1 1 0 100-2H4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Phone
                    </h4>
                    <a
                      href="tel:+972548117613"
                      className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      054-8117613
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/eransevil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/eran-sevil-68ba43171/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href="mailto:eransevil2@gmail.com"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaEnvelope />
                  </motion.a>
                </div>
              </div>
            </div>

            <motion.div
              className="bg-blue-600 p-8 rounded-lg shadow-md text-white text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2">
                Looking for a developer?
              </h3>
              <p className="mb-4">
                I'm currently available for freelance work.
              </p>
              <a
                href="https://wa.me/548117613?text=Hello,%20I'm%20interested%20in%20working%20together!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-1 bg-gray-800 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-6">
        <div className="mt-4 text-center">
          <p className="text-gray-400">
            Copyright © 2025 - Crafted by Eran Sevil
          </p>
        </div>
        <div className="mt-4 text-center"></div>
      </div>
    </footer>
  );
}
