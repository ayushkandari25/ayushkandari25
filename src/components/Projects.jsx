import React from "react";
import GitHubCalendar from "react-github-calendar";

const Projects = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const projects = [
    {
      id: 1,
      title: "VIBESTREEM.COM",
      image: "/Vibestream.png",
      description:
        "Vibestream is a sleek and user-friendly music streaming platform designed for music lovers who enjoy seamless access to their favorite tracks, artists, and playlists.",
      techStack: "HTML | CSS | React",
      features: "Navbar, Admin Panel, Music Playing, Login, SignUp, etc.",
      githubLink:
        "https://github.com/saurabhshambharkar/B41_WEB_006_UI-UX-Unleashed",
      liveLink: "https://warm-cheesecake-8bfc28.netlify.app/",
    },
    {
      id: 2,
      title: "Rent Easy",
      image: "/RentEasy.png",
      description:
        "Rent Easy is a tenant-landlord communication platform with features like property listings, rent tracking, real-time messaging, and maintenance request management.",
      techStack: "HTML | React | Firebase | Tailwind CSS",
      features:
        "Property Listings, Tenant-Landlord Messaging, Rent Payment Tracking, Maintenance Requests, Role-based Authentication.",
      githubLink: "https://github.com/ayushkandari25/RentEasy",
      liveLink: "https://rent-easy-project.netlify.app/",
    },
  ];

  return (
    <div id="projects" className="py-16 px-6 dark:bg-gray-900">
      <h1 className="text-center text-4xl font-semibold mb-12 dark:text-white">
        My Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden max-w-md transform transition-transform hover:scale-105"
          >
            <div className="w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
              />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">
                Title: <span className="text-red-500">{project.title}</span>
              </h2>

              <h3 className="text-lg font-medium dark:text-gray-300">
                Description:
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              <h3 className="text-lg font-medium mt-4 dark:text-gray-300">
                Tech stack:
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.techStack}
              </p>

              <h3 className="text-lg font-medium mt-4 dark:text-gray-300">
                Features:
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.features}
              </p>

              <div className="mt-6 flex gap-4">
                <button
                  onClick={() => openInNewTab(project.githubLink)}
                  className="flex-1 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  GitHub
                </button>
                <button
                  onClick={() => openInNewTab(project.liveLink)}
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-500 transition"
                >
                  Visit Site
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-center text-3xl font-semibold mb-12 dark:text-white">
          GitHub Contributions
        </h2>

        <div className="flex justify-center mb-12">
          <GitHubCalendar
            username="ayushkandari25"
            colorScheme="dark"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex justify-center w-full m-6">
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=ayushkandari25&theme=github_dark"
              alt="Contribution Graph"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>

          <div className="flex justify-center w-full">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=ayushkandari25&layout=compact&theme=radical"
              alt="Most Used Languages"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
