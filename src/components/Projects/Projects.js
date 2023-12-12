import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import resimGalerisiImg from "../../Assets/Projects/resimGalerisi.png"; // Proje resimlerini buraya ekleyin
import havaDurumuImg from "../../Assets/Projects/havaDurumu.png";
import konyaImg from "../../Assets/Projects/konya.png";
import personalWebsiteImg from "../../Assets/Projects/personalWebsite.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Son <strong className="purple">Çalışmalarım </strong>
        </h1>
        <p style={{ color: "white" }}>
          İşte son zamanlarda üzerinde çalıştığım bazı projeler.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Proje kartları burada yer alacak */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resimGalerisiImg}
              isBlog={false}
              title="Resim Galerisi"
              description="React.js kullanarak geliştirdiğim, API ile resimleri çeken ve gösteren bir galeri uygulaması."
              ghLink="https://github.com/adilalperenciftci/ResimGalerisi"
              // demoLink buraya eklenebilir
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={havaDurumuImg}
              isBlog={false}
              title="Hava Durumu Projesi"
              description="Hava durumu verilerini API'den çekerek gösteren, React.js ile geliştirilmiş bir uygulama."
              ghLink="https://github.com/adilalperenciftci/Hava-Durumu-Projesi"
              // demoLink buraya eklenebilir
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={konyaImg}
              isBlog={false}
              title="Konya Şehir Rehberi"
              description="Konya şehri hakkında bilgiler sunan, React.js tabanlı bir web uygulaması."
              ghLink="https://github.com/adilalperenciftci/KONYA"
              // demoLink buraya eklenebilir
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personalWebsiteImg}
              isBlog={false}
              title="Kişisel Web Sitesi"
              description="Kendi kişisel web sitem, React.js ve modern web teknolojileri kullanılarak geliştirildi."
              ghLink="https://github.com/adilalperenciftci/adilalperenciftci.io"
              // demoLink buraya eklenebilir
            />
          </Col>

          {/* Diğer projelerin kartları buraya eklenebilir */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
