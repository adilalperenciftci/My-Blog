import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Yazılım Geliştirici",
          "Freelancer",
          "React.js Uzmanı",
          "Açık Kaynak Katılımcısı",
          "Ön Uç Geliştirici",
          "C# ve .NET ile Backend Geliştirme"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
