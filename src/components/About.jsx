const About = () => {
  return (
    <div name="about" className="max-w-7xl mx-auto py-40">
      <h2 className="text-4xl font-bold mb-12 text-center relative pb-4">
        About Me
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-500 to-red-700"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start ">
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-4 hover:translate-x-2 transition-transform dark:text-white">
            <strong className="text-red-500">Name:</strong> Ayush Kandari
          </p>
          <p className="text-lg text-gray-700 mb-4 hover:translate-x-2 transition-transform dark:text-white">
            <strong className="text-red-500">Higher Education:</strong> Bachelor
            of Technology (Civil Engineering)
          </p>
          <p className="text-lg text-gray-700 mb-4 hover:translate-x-2 transition-transform dark:text-white">
            <strong className="text-red-500">Address:</strong> Uttarakhand,
            India.
          </p>
        </div>

        <div className="p-4 animate-fadeIn delay-400">
          <p className="text-lg text-gray-600 dark:text-white leading-relaxed text-justify">
            Hi, I’m Ayush Kandari, a passionate Front-End Developer dedicated to
            creating responsive and visually engaging websites. My journey into
            web development began last year when I discovered coding and was
            inspired by the creativity behind building digital experiences.
          </p>
          <p className="text-lg text-gray-600 dark:text-white leading-relaxed text-justify mt-6">
            I specialize in HTML, CSS, JavaScript, React.js, Redux, and modern
            front-end tools, focusing on clean design and user-friendly
            interfaces. I’m always eager to learn, explore new technologies, and
            bring ideas to life through code. Let’s collaborate to create
            something amazing!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
