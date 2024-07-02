import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import my from "../images/my.png";

const Home = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const dataa = {
      strings: [
        "FullStack Developer",
        "FullStack Developer",
        "FullStack Developer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    };

    const typed = new Typed(typingRef.current, dataa);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Manya Yadav</h1>
        <h3>
          And I'm a <span ref={typingRef} className="mutiple-text" />
        </h3>
        <p>
          Hello,I am Manya. I am a kind of an
          extrovert person who is full of confidence. I'm always being energetic
          and action oriented.{" "}
        </p>
        <div className="social-media">
           
          <a href="https://twitter.com/manya3219">
            <i className="bx bxl-twitter" />
          </a>
          <a href="https://github.com/manya3219">
          <i class='bx bxl-github'></i>
          </a>
          <a href="https://www.linkedin.com/in/manya-yadav-550157247/">
            <i className="bx bxl-linkedin" />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1Rfw730PeqEIH5YddmLQFeHIAIiabE9VS/view"
          className="btn"
        >
          Download CV
        </a>
      </div>
      <div className="home-img">
        <img src={my} alt="true" loading="lazy" />
      </div>
    </section>
  );
};

export default Home;
