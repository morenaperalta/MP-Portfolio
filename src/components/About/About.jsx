import { Container, Row, Col, Button } from "react-bootstrap";
import picture from "../../assets/home-main.png";
import Type from "./Type";
import { AiOutlineDownload } from "react-icons/ai";

const pdf = "https://drive.google.com/file/d/1dp7W53DgRceOHZuIDWvO2X2CiWatEQVu/view?usp=drive_link";

function About() {
  return (
    <section className="home-section">
      <Container fluid className="home-content">
        <Container>
          <Row>
            <Col md={8} className="about-header">
              <h1 style={{ paddingBottom: 8 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'm
                <strong> MORENA PERALTA</strong>
              </h1>
              <div style={{ padding: 5, textAlign: "left" }}>
                <Type />
              </div>
              <p className="about-about-body">
                <br />I'm a professional based in 📍
                <i>
                  <b className="aqua">Valencia, España</b>
                </i>. I have a strong focus on creating tech solutions that improve people's lives. While my expertise lies in building dynamic and functional web applications, I always keep usability and the end-user experience at the forefront of my work.
                <br />
                <br />
                What defines me?
                <br />
                <br />
                💡 <b className="aqua">Creativity and curiosity:</b> I love finding original and effective solutions to the problems I encounter, always exploring new ways to improve.
                <br />
                <br />
                📚 <b className="aqua">Commitment to learning:</b> I’m constantly evolving, seeking out new tools, languages, and technologies to sharpen my skills.
                <br />
                <br />
                🤝 <b className="aqua">Teamwork:</b> I believe that a diversity of ideas and perspectives enriches projects, which is why I enjoy working in collaborative environments.
              </p>
          
            </Col>
            <Col md={4} className="d-flex justify-content-center align-items-center" style={{ paddingTop: 110, paddingLeft: 70, paddingRight: 70 }}>
              <img
                src={picture}
                alt="about pic"
                className="profile-img img-fluid z-index-12 neon-border"
                style={{ maxHeight: "350px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default About;

