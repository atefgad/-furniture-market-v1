import { Container } from "reactstrap";
import "../../../styles/CommonSection.css";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container>
        <ScrollAnimation animate="fade" duration={200}>
          <div className="text-center">
            <h1>{title}</h1>
          </div>
        </ScrollAnimation>
      </Container>
    </section>
  );
};

export default CommonSection;
