import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import {
  ARYAN_GITHUB_PROFILE,
  ARYAN_LINKEDIN_PROFILE,
} from "../../utilites/constant";

export function Footer() {
  return (
    <Container className="footer">
      {/* <a href="https://aryan.github.in" className="logo">
        <span>https://aryan.github.in</span>
      </a> */}
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
        </p>
      </div>
      <div className="social-media">
        <a href={ARYAN_LINKEDIN_PROFILE} target="_blank" rel="noreferrer">
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a href={ARYAN_GITHUB_PROFILE} target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  );
}
