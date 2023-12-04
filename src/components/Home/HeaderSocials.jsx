import React from 'react'
import "./socailIcon.css";


const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="https://www.instagram.com/_anand.402/" className="home__socials-link" target='_blank'>
        <i class="fa-brands fa-instagram insta"></i>
        </a>

        <a href="https://twitter.com/AnandSi27483134/" className="home__socials-link" target='_blank'>
        <i class="fa-brands fa-x-twitter twwit"></i>
        </a>

        <a href="https://www.facebook.com/profile.php?id=100048465709682" className="home__socials-link" target='_blank'>
        <i class="fa-brands fa-facebook face"></i>
        </a>

        <a href="https://www.linkedin.com/in/anand-singh-493016241/" className="home__socials-link" target='_blank'>
        <i class="fa-brands fa-linkedin link"></i>
        </a>

        <a href="https://github.com/anand-144" className="home__socials-link" target='_blank'>
        <i class="fa-brands fa-github git"></i>
        </a>
    </div>
  )
}

export default HeaderSocials