import React from 'react';
import "./testimonials.css";
import Image1 from "../../assets/avatar-3.svg";
import Image3 from "../../assets/avatar-4.svg";
import Image5 from "../../assets/avatar-5.svg";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: Image1,
    title: "NullClass",
    subtitle: "Web Developer Intern",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "Bharat-Intern",
    subtitle: "Frontend Developer Intern",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 3,  // Make sure each item has a unique id
    image: Image5,
    title: "72 Dragons",
    subtitle: "Frontend Developer",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className='section__title'>Clients & Reviews</h2>

      <Swiper
        className="testimonials__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => (
          <SwiperSlide className="testimonials__items" key={id}>
            <div className="thumb">
              <img src={image} alt="" />
            </div>
            <h3 className="testimonial__title">{title}</h3>
            <span className="subtitle">{subtitle}</span>
            <div className="comment">{comment}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="more">Swipe For More <i className="fa-solid fa-caret-right"></i></div> */}
    </section>
  );
}

export default Testimonials;