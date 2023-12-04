import React from "react";
import "./about.css";
import About1 from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
  const cvFilePath = "resume.pdf";


  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={About1} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Anand Singh ,Web Developer
              from India.I have rich experience in website design and buliding
              and customization.<p>Also i am good at DataScience,Python,MySql,Php,ReactJs,PhotoShop,VideoEditing,Gaming
              and Football. I Worked as Frontend Developer in 72 Dragons <i class="fa-solid fa-dragon"></i>.</p>
            </p>
             <a href={cvFilePath} download="Anand Resume.pdf" className="btn">
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">
                  Frontend Developement <i class="fa-solid fa-code"></i>
                </h3>
                <span className="skills__number ">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage Frontend"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">
                  UI/UX Design <i class="fa-solid fa-mobile"></i>
                </h3>
                <span className="skills__number">40%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage Design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">
                  Web Developement <i class="fa-brands fa-react"></i>
                </h3>
                <span className="skills__number">65%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage developement"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">
                  PhotoShop <i class="fa-regular fa-image"></i>
                </h3>
                <span className="skills__number">65%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage photo"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">
                  Video Editing <i class="fa-solid fa-video"></i>
                </h3>
                <span className="skills__number">35%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage video"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">
                  Data Science <i class="fa-solid fa-chart-simple"></i>
                </h3>
                <span className="skills__number">71%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage datascience"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">
                  MySql,Php,Django <i class="fa-solid fa-database"></i>
                </h3>
                <span className="skills__number">55%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage database"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">
                  Python <i class="fa-brands fa-python"></i>
                </h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage python"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">
                  JS And It's Librarys <i class="fa-brands fa-js"></i>{" "}
                  <i class="fa-brands fa-react"></i>{" "}
                  <i class="fa-brands fa-node"></i>
                </h3>
                <span className="skills__number">62%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage js"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">CSS And It's Librarys{" "}
                <i class="fa-brands fa-css3"></i>{" "}
                </h3>
                <span className="skills__number">67%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage css"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox/>
    </section>
  );
};

export default About;
