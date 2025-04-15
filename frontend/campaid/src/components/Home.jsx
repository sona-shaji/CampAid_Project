import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function HomePage() {
  const navigate = useNavigate();

  // Smooth scroll function
  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <div style={styles.body}>
      {/* Navbar */}
      <Navbar expand="lg" style={styles.navbar}>
        <Container>
          <Navbar.Brand href="/" style={styles.brand}>CampAid</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" style={styles.navLink}>Home</Nav.Link>
              <Nav.Link href="#about" style={styles.navLink}>About</Nav.Link>
              <Nav.Link href="/disaster-info" style={styles.navLink}>Disaster Info</Nav.Link>
              <Nav.Link href="/donate" style={styles.navLink}>Donate</Nav.Link>
              <Nav.Link href="/VolunteerReg" style={styles.navLink}>Volunteer</Nav.Link>
              <Nav.Link href="/map" style={styles.navLink}>Relief Map</Nav.Link>
              <Nav.Link href="#contact" style={styles.navLink}>Contact</Nav.Link>
            </Nav>

            <Nav className="ms-3">
             <Button style={styles.loginButton} onClick={() => navigate("/Login")}>Login</Button>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section with Animation */}
      <Container fluid style={styles.heroSection}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={styles.heroContent}
        >
          <h1>CampAid: Empowering Communities, Saving Lives</h1>
          <p>Your all-in-one disaster relief and aid management platform</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={styles.heroButton}
            onClick={() => navigate("/VolunteerReg")}
          >
            Get Involved
          </motion.button>
        </motion.div>
      </Container>

      {/* Public Features */}
      <Container id="public-features" style={styles.section}>
        <h2 style={styles.sectionTitle}>Public Features</h2>
        <Row>
          {[
            { title: "View Disaster Information", text: "Get real-time updates on disasters.", link: "/disaster-info" },
            { title: "Donate", text: "Support relief efforts with donations.", link: "/donate" },
            { title: "Volunteer", text: "Register to help in relief operations.", link: "/VolunteerReg" },
            { title: "Relief Map", text: "Locate relief camps & affected areas.", link: "/map" },
            { title: "Real-Time Updates", text: "Get the latest relief news.", link: "/publicview" }
          ].map((feature, index) => (
            <Col key={index} md={4} className="mb-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card style={styles.card}>
                  <Card.Body className="text-center">
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.text}</Card.Text>
                    <Button style={styles.button} onClick={() => navigate(feature.link)}>
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* About CampAid */}
      <Container id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About CampAid</h2>
        <Row>
          <Col md={6}>
            <p>
              <strong>Our Mission:</strong> CampAid is a disaster relief platform dedicated to coordinating
              aid efforts efficiently. We provide real-time disaster updates, facilitate donations,
              and connect volunteers with relief efforts.
            </p>
          </Col>
          <Col md={6}>
            <p>
              <strong>Our Impact:</strong> CampAid ensures aid reaches those who need it most.
              Whether you want to donate, volunteer, or seek information, CampAid offers the
              tools to make a difference. Join us in bringing relief and hope to affected communities.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Contact Section */}
      <Container id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact Us</h2>
        <Row>
          <Col md={6}>
            <p><strong>Email:</strong> campaid2025@gmail.com</p>
            <p><strong>Phone:</strong> +91 8590902782</p>
            <p><strong>Address:</strong> 123 Disaster Relief St, Humanitarian City</p>
          </Col>
          <Col md={6}>
            <p>
              Have questions or want to get involved? Reach out to us anytime. Whether you're a volunteer,
              donor, or disaster relief official, we're here to help make a difference together.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// Internal CSS Styling
const styles = {
  body: {
    background: "#F4F4F4",
    color: "#333",
    minHeight: "100vh",
  },
  navbar: {
    background: "#2963A2",
  },
  brand: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  navLink: {
    color: "#FFFFFF",
    fontSize: "1.1rem",
  },
  heroSection: {
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#4CAABC",
    textAlign: "center",
    color: "#FFFFFF",
  },
  heroButton: {
    padding: "12px 25px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    borderRadius: "30px",
    background: "#72C2C9",
    color: "#fff",
    border: "none",
  },
  section: {
    background: "#FFFFFF",
    padding: "50px 20px",
    marginTop: "30px",
    borderRadius: "10px",
  },
  sectionTitle: {
    fontSize: "2rem",
    textAlign: "center",
    color: "#2963A2",
  },
  card: {
    background: "#E3F2FD",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
  },
  button: {
    borderRadius: "20px",
    padding: "10px 20px",
    fontWeight: "bold",
    background: "#2963A2",
    color: "#fff",
    border: "none",
  },
};

export default HomePage;
