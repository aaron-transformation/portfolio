import { Nav, Row, Col, Container, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import clientImg1 from "../assets/AWFY_Logo.png";
import clientImg2 from "../assets/atwork-example.png";
import clientImg3 from "../assets/Liquidware_FInal_Full_Color_Logo.jpg";
import clientImg4 from "../assets/liquidware-example.png";
import clientImg5 from "../assets/seo-logo.jpg";
import clientImg6 from "../assets/seo-example.png";



export const Projects = () => {
    const atwork = [
        {
            title: "AtWork Group",
            description: "Recruiting Agency",
            imgURL: clientImg1,
            url: "https://www.atwork.com/",
        },
        {
            title: "CMS Website Development",
            description: "Developing & Troubleshooting",
            imgURL: clientImg2,
            url: "https://www.atwork.com/",
        },

    ];
    const liquidware = [
        {
            title: "Liquidware",
            description: "Digital Workspace Management",
            imgURL: clientImg3,
            url: "https://www.liquidware.com/",
        },
        {
            title: "Converting Figma Mockups",
            description: "Design & Develop",
            imgURL: clientImg4,
            url: "https://www.liquidware.com/",
        },
    ];
    const seo = [
        {
            title: "SEOLevelUp",
            description: "Web Design SEO Company",
            imgURL: clientImg5,
            url: "https://seolevelup.com/",
        },
        {
            title: "Lift and Shifts",
            description: "Migrating Content",
            imgURL: clientImg6,
            url: "https://seolevelup.com/",
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">AtWork Group</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Liquidware</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">SEOLevelUp</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            atwork.map((client, index) => {
                                                return (
                                                    <ProjectCard key={index}{...client} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <Row>
                                        {
                                            liquidware.map((client, index) => {
                                                return (
                                                    <ProjectCard key={index}{...client} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <Row>
                                        {
                                            seo.map((client, index) => {
                                                return (
                                                    <ProjectCard key={index}{...client} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
} 

export default Projects;