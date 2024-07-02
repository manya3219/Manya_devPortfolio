import portfolio1 from "../images/portfolio1.jpg";
import portfolio2 from "../images/portfolio2.jpg";
import portfolio3 from "../images/portfolio3.jpg";
import portfolio4 from "../images/portfolio4.jpg";
import portfolio5 from "../images/portfolio5.jpg";
import portfolio6 from "../images/portfolio6.jpg";

const PortfolioProjects = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">     
        LATEST <span>PROJECTS</span>
      </h2>
      <div className="portcontainer">
        <div className="portbox">
          <img src={portfolio1} alt="true" />
          <div className="portlayer">
            <h3>Portfolio</h3>
            <p>
            This is my portfolio autobiography. It is the sum total of your work, your skills, your passions, and your approach to solving problems
            </p>
            <a href="https://github.com/manya3219">
              <i className="bx bx-link-external" />
            </a>
          </div>
        </div>
        <div className="portbox">
          <img src={portfolio2} alt="true" />
          <div className="portlayer">
            <h3>Mern Blog</h3>
            <p>
             This is a Blogging aaplication which is build using MERN . 
            </p>
            <a href="https://github.com/manya3219/mern-blog">
              <i className="bx bx-link-external" />
            </a>
          </div>
        </div>
        <div className="portbox">
          <img src={portfolio3} alt="true" />
          <div className="portlayer">
            <h3>Notes Sharing</h3>
            <p>
              This is Note's Sharing Website.All Notes are store in Cluster From .
            </p>
            <a href="https://github.com/manya3219/MyDev_FIleSharing">
              <i className="bx bx-link-external" />
            </a>
          </div>
        </div>
        <div className="portbox">
          <img src={portfolio4} alt="true" />
          <div className="portlayer">
            <h3>Weather App</h3>
            <p>
              Weather forcasting Website is responsive and build using React.
            </p>
            <a href="https://github.com/manya3219/weathermanya">
              <i className="bx bx-link-external" />
            </a>
          </div>
        </div>
        <div className="portbox">
          <img src={portfolio5} alt="true" />
          <div className="portlayer">
            <h3>Vechicle Rental System</h3>
            <p>
              Vechicle rental system build in C++ . This application is use for booking Car.
            </p>
            <a href="https://github.com/manya3219/Vehicle-rental-system">
              <i className="bx bx-link-external" />
            </a>
          </div>
        </div>
        <div className="portbox">
          <img src={portfolio6} alt="true" />
          <div className="portlayer">
            <h3>Dream Cafe</h3>
            <p>
              This is a Dream Cafe Website which is build using HTML,CSS and JavaScript.
            </p>
            <a href="https://github.com/manya3219/dream-cafe">
              <i className="bx bx-link-external" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjects;