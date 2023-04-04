import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/QDECC.png";
import projImg2 from "../assets/img/BlockBallot.png";
import projImg3 from "../assets/img/Lark.png";
import projImg4 from "../assets/img/Investify.png";
import projImg5 from "../assets/img/Sceptique.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Investify",
      description: "Stock Trading simulator",
      GithubUrl: 'https://github.com/Season-of-Code-2023-MDG-Space/money-mavericks' ,
      imgUrl: projImg4,
    },
    {
      title: "Sceptique",
      description: "Sentiment Analysis and Summarizer",
      GithubUrl: 'https://github.com/corrosivelogic/Sceptique' ,
      imgUrl: projImg5,
    },
    {
      title: "QDECC",
      description: "Quantum Computing & Cyber Security",
      GithubUrl: 'https://github.com/corrosivelogic/TeamCodeBeyond-QDECC' ,
      imgUrl: projImg1,
    },
    {
      title: "Block Ballot",
      description: "Block Chain & Web Development",
      GithubUrl: "https://github.com/corrosivelogic/Reality-warpers",
      imgUrl: projImg2,
    },
    {
      title: "Lark",
      description: "Game Development",
      GithubUrl: "https://github.com/corrosivelogic/Lark",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Below are the projects that I've worked on and contributed to. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>-</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>-</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}