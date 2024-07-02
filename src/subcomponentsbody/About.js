import my from "../images/my.png";

const About = () => {
  return (
    
    
      
    <section className="about" id="about">
      <div className="about-img">
        <img src={my} alt="true" />
      </div>
      <div className="about-more">
        <h2 className="heading">
          ABOUT <span>ME</span>
        </h2>
        <h3>Frontened Developer</h3>
        <p>
        Hello, I'm Manya, a passionate Web developer with a keen eye for MERN
          Stack . With a background in CS, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        
       
      </div>
    </section>
  );
};

export default About;
