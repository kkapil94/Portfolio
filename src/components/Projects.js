import React, { useState } from "react";
import "./Projects.css";
import projects from "../Projects.json";
import { motion } from "framer-motion";

function Projects() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="project-container">
      <div className="project-wrapper">
        <div
          className="Project-head"
          style={{
            color: "white",
            backgroundColor: "#3b82f6",
            fontSize: "2rem",
            fontWeight: "bold",
            letterSpacing: ".25rem",
            display: "inline",
            borderRadius: ".7rem",
            padding: ".5rem .5rem .5rem 0.5rem",
          }}
        >
          Projects
        </div>
        <motion.div
          className="card-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {projects &&
            projects.map((e, id) => {
              if (filter === "collab") {
                if (e.colloborated === true) {
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{
                        transition: {
                          type: "spring",
                          bounce: 0.4,
                          duration: 0.8,
                        },
                        opacity: 1,
                      }}
                      id={id}
                      key={id}
                      className="card-box"
                    >
                      <div className="card-skeleton">
                        <img src={e.src} alt="disney" />
                        <div className="content">
                          <h2>{e.name}</h2>
                          <p>{e.Description}</p>
                          <a href={e.href} target="_blank">
                            <button className="card-button">Watch Live</button>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                }
              } else {
                return (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    id={id}
                    key={id}
                    className="card-box"
                  >
                    <div className="card-skeleton">
                      <img src={e.src} alt="disney" />
                      <div className="content">
                        <h2>{e.name}</h2>
                        <p>{e.Description}</p>
                        <a href={e.href} target="_blank" rel="noreferrer">
                          <button>Watch Live</button>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              }
            })}
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
