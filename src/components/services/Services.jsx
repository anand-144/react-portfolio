import React from "react";
import "./services.css";
import Image1 from "../../assets/frontend.svg";
import Image2 from "../../assets/ui-ux.svg";
import Image3 from "../../assets/web-development.svg";
import Image4 from "../../assets/photoshop.svg";
import Image5 from "../../assets/video.svg";
import Image6 from "../../assets/chart.svg";
import Image7 from "../../assets/database.svg";
import Image8 from "../../assets/python.svg";
import Image9 from "../../assets/javascript.svg";
import Image10 from "../../assets/css.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Frontend Development",
    description:
      "Where code meets creativity to craft visually appealing, user-centric interfaces that leave a lasting impression. Proficient in HTML, CSS, and JavaScript, I bring a passion for seamless design and cutting-edge technologies to every project.",
  },
  {
    id: 2,
    image: Image2,
    title: "UI/UX Design",
    description:
      "Shaping digital interactions with a blend of artistry and functionality, I specialize in UI/UX design. Transforming concepts into visually stunning and intuitively navigable experiences, I create designs that captivate users and elevate the overall digital journey..",
  },
  {
    id: 3,
    image: Image3,
    title: "Web-Development",
    description:
      "Empowering businesses with dynamic web solutions, I specialize in web development. From robust backend functionality to engaging frontend interfaces, I craft responsive and scalable websites that align seamlessly with client objectives. Let's build your digital presence with innovative and efficient web development.",
  },
  {
    id: 4,
    image: Image4,
    title: "PhotoShop",
    description:
      "From intricate photo retouching to compelling graphic design, I leverage Photoshop's versatility to deliver visually stunning and polished digital assets that captivate and resonate.",
  },
  {
    id: 5,
    image: Image5,
    title: "Video Editing",
    description:
      " Let's turn your footage into a cinematic experience that resonates with your audience.      ",
  },
  {
    id: 6,
    image: Image6,
    title: "Data-Science",
    description:
      "My expertise in data science transforms raw information into actionable intelligence, driving informed decision-making and innovation.",
  },
  {
    id: 7,
    image: Image7,
    title: "BackEnd",
    description:
      "I architect the foundation that powers robust and scalable web applications. Proficient in languages like MySql, Php, and Django, I design efficient server-side systems, manage databases, and ensure seamless communication between the frontend and backend components.",
  },
  {
    id: 8,
    image: Image8,
    title: "Python",
    description:
      "My proficiency in Python allows me to craft elegant and efficient solutions that align with diverse project needs. Let's bring your ideas to life with the flexibility and robustness of Python programming.",
  },
  {
    id: 9,
    image: Image9,
    title: "javaScript And Librarys",
    description:
      "I specialize in JavaScript and its rich ecosystem of libraries and frameworks. From crafting interactive and dynamic user interfaces with libraries like React.js to building scalable server-side applications with Node.js",
  },
  {
    id: 10,
    image: Image10,
    title: "Css3 And Librarys",
    description:
      "Proficient in CSS3, I bring style and responsiveness to web development, ensuring visually stunning and user-friendly interfaces. Paired with popular CSS libraries like Bootstrap or Tailwind CSS.  Let's enhance your web presence with the latest in CSS3 and its complementary libraries for a polished and engaging user experience.",
  },
];

const Services = () => {
  return (
    <section className="services container section " id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
