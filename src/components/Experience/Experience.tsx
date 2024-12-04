import React from "react";
import { Container } from "./style";
import ScrollAnimation from "react-animate-on-scroll";

interface Experience {
  role: string;
  company: string;
  companyUrl: string;
  startDate: string;
  endDate?: string; // Optional for current positions
  overview: string;
  technologies: string[];
}

interface WorkExperienceProps {
  experiences: Experience[];
}

const WorkExperienceCard: React.FC<{ experience: Experience }> = ({
  experience,
}) => {
  return (
    <a
      href={experience?.companyUrl}
      target="_blank"
      className="experience-card"
      rel="noreferrer"
    >
      <div className="experience-header">
        <div>
          <h3>{experience.role}</h3>
          <h4>{experience.company}</h4>
        </div>
        <p className="duration">
          {experience.startDate} - {experience.endDate || "Present"}
        </p>
      </div>
      <div className="experience-overview">
        <p>{experience.overview}</p>
      </div>
      <div className="experience-technologies">
        <ul>
          {experience.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};

const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => {
  return (
    <Container className="work-experience">
      <h1>Work Experience</h1>
      {experiences.map((experience, index) => (
        <ScrollAnimation animateIn="flipInY">
          <WorkExperienceCard key={index} experience={experience} />
        </ScrollAnimation>
      ))}
    </Container>
  );
};

export default WorkExperience;
