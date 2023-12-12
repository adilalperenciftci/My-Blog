import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Merhaba Herkese, ben <span className="orange-text">Adil Alperen Çiftçi </span>
            <span className="orange-text"> Konya, Türkiye'denim.</span>
            <br />
            Şu anda bir yazılım geliştirici olarak çalışıyorum.
            <br />
            Selçuk Üniversitesi'nde Biyoteknoloji alanında lisans eğitimimi sürdürüyorum.
            <br />
            <br />
            Kodlama dışında yapmaktan hoşlandığım bazı aktiviteler!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Oyun Oynamak
            </li>
            <li className="about-activity">
              <ImPointRight /> Teknoloji Blogları Okumak
            </li>
            <li className="about-activity">
              <ImPointRight /> Seyahat Etmek
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Fark yaratan şeyler inşa etmeye çalışın!"{" "}
          </p>
          <footer className="blockquote-footer">Adil Alperen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
