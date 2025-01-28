"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A fully interactive and responsive portfolio website built with next.js and framer-motion.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  // {
  //   id: 2,
  //   title: "E-commerce Website",
  //   description: "Project 2 description",
  //   image: "/images/projects/2.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 3,
    title: "Spotify API web application",
    description: "Nostalgiwrap uses the spotify API to create a nostalgic user experience of their music taste from the past(Fully Responsive).",
    image: "/images/projects/Nostalgiwrap.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KVAcodes/Nostalgiwrap-too",
    previewUrl: "https://www.youtube.com/watch?v=X9H0OGu4dh0",
  },
  {
    id: 4,
    title: "The Slope Deflector",
    description: "An entirely client-side web application that analyses continuous beams(fully responsive).",
    image: "/images/projects/slopeDef.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KVAcodes/The-Slope-Deflector",
    previewUrl: "https://kvacodes.github.io/The-Slope-Deflector/#",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
e        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
