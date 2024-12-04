import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import { ARYAN_EMAIL_ID } from "../../utilites/constant";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h1>Contact</h1>
        <p>Ready to get started on your project? </p>
      </header>
      <div className="contacts">
        <div>
          <a href={`mailto:${ARYAN_EMAIL_ID}`}>
            <img src={emailIcon} alt="Email" />
          </a>
          <a href={`mailto:${ARYAN_EMAIL_ID}`}>{ARYAN_EMAIL_ID}</a>
        </div>
      </div>
    </Container>
  );
}
