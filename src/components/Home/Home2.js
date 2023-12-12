import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg"; // Burayı kendi profil resminizin yolu ile değiştirin
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              KENDİMİ <span className="purple"> TANITAYIM </span>
            </h1>
            <p className="home-about-body">
              Yazılım geliştirmeye büyük bir tutkuyla bağlıyım ve sürekli olarak yeni şeyler öğreniyorum... 🤷‍♂️
              <br />
              <br />Özellikle
              <i>
                <b className="purple"> C#, CSS ve Ön Uç Geliştirme </b>
              </i>
              konularında uzmanım.
              <br />
              <br />
              İlgi alanlarım arasında <i>
                <b className="purple">Web Teknolojileri ve Uygulama Geliştirme </b>
              </i>
              bulunmakta.
              <br />
              <br />
              Ayrıca, <b className="purple">React.js</b> ve
              <i>
                <b className="purple">
                  {" "}
                  diğer modern Javascript kütüphane ve çerçeveleri
                </b>
              </i>
              &nbsp; kullanarak ürün geliştirme konusunda da deneyimim var.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>BENİ BURADA BULUN</h1>
            <p>
              Benimle <span className="purple">bağlantı kurmaktan </span> çekinmeyin
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/adilalperenciftci"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/adilalperenciftci"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/adilalperenciftci"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/adilalperenciftci"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
