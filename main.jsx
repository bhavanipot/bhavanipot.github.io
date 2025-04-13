import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Portfolio from "./Portfolio.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);

import React, { useState, useEffect } from "react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="font-[Poppins] bg-[#f2f1e1] dark:bg-gray-900 text-black dark:text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center font-semibold">
        <span className="text-2xl font-bold">Bhavani</span>
        <div className="space-x-4 text-lg hidden md:flex">
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
          <a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400">Education</a>
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
          <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400">Experience</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 text-sm px-3 py-1 rounded border border-gray-400 dark:border-gray-200"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      {/* Header Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#f2f1e1] to-white dark:from-gray-800 dark:to-gray-900 pt-20">
        <h1 className="text-5xl md:text-6xl font-extrabold border-r-4 pr-4 animate-typing whitespace-nowrap overflow-hidden">
          Bhavani Potdar
        </h1>
        <p className="text-lg md:text-xl mt-6 max-w-2xl text-gray-700 dark:text-gray-300">
          Computer Engineering @ University of Waterloo | Passionate about Machine Learning, Computer Research, and Full-Stack. Always exploring new technologies!
        </p>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 md:px-8 py-10 space-y-10">
        <Section id="about" title="About">
          <p>
            I am a Computer Engineering student at the University of Waterloo with a passion for machine learning, embedded systems, and algorithm development. I enjoy solving complex problems at the intersection of technology and real-world impact.
          </p>
        </Section>

        <Section id="education" title="Education">
          <p>
            <strong>University of Waterloo</strong> – Bachelor's of Applied Science in Honors Computer Engineering
          </p>
        </Section>

        <Section id="skills" title="Skills">
          <p><strong>Programming Languages:</strong> Python, C++, Java, JavaScript, HTML5/CSS3</p>
          <p><strong>Frameworks:</strong> React, Flask, TensorFlow, Scikit-learn, Pandas, NumPy, spaCy, NLTK, RESTful APIs</p>
          <p><strong>Platforms & Tools:</strong> Git, GitHub, GitLab, Microsoft Office, Figma, Jupyter Notebooks, VS Code</p>
        </Section>

        <Section id="projects" title="Projects">
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>PlateCheck</strong> – A personalized nutritional app developed during the Women in Engineering (WIE) hackathon, enabling users to scan meals, analyze nutrition, and get health recommendations through a React front-end and Python backend.</li>
            <li><strong>Podcastify</strong> – A full-stack app transforming textbooks to audio podcasts using NLP. Built with Flask and Vue.js, integrating SpaCy, NLTK, and Speechify APIs with chatbot features and interactive file uploads.</li>
            <li><strong>Hypothyroidism Diagnosis</strong> – A machine learning model detecting hypothyroidism with 97.5% accuracy using clinical data and a decision tree classifier. Awarded at the Calgary Youth Science Fair and University of Calgary.</li>
            <li><strong>Text-to-Braille Conversion System</strong> – Created using an STM32 Nucleo64 board with C++ and SPI communication to represent Braille text through dynamic LED displays for visually impaired users.</li>
          </ul>
        </Section>

        <Section id="experience" title="Experience">
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>Hackergal Canada (Student Ambassador)</strong> – Led workshops and webinars to promote coding among girls in Canada, created projects used in the Hackergal curriculum.</li>
            <li><strong>The Junior Academy – NY Academy of Sciences</strong> – Collaborated globally on real-world challenges, gaining insight into STEM research and methodologies.</li>
            <li><strong>AFS & University of Pennsylvania</strong> – Scholar in a global impact program focusing on sustainability and innovation, certified in Global Citizenship for Social Impact.</li>
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p>Email: <strong>bpotdar@uwaterloo.ca</strong></p>
          <p>LinkedIn: <strong><a href="https://linkedin.com/in/bhavani-potdar" target="_blank" className="text-blue-600 hover:underline">linkedin.com/in/bhavani-potdar</a></strong></p>
          <p>GitHub: <strong><a href="https://github.com/bhavanipot" target="_blank" className="text-blue-600 hover:underline">github.com/bhavanipot</a></strong></p>
        </Section>
      </main>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-10 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">{title}</h2>
      <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{children}</div>
    </section>
  );
}
