import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon fa-solid fa-fire"></i>

            <div>
                    <h3 className="about__title">7</h3>
                    <span className="about__subtitle">Projects Completed</span>
                </div>
            </div>

            <div className="about__box">
            <i className="about__icon fa-solid fa-mug-hot"></i>

            <div>
                    <h3 className="about__title">3</h3>
                    <span className="about__subtitle">Cup's Of Coffee</span>
                </div>
            </div>

            <div className="about__box">
            <i className="about__icon fa-solid fa-scroll"></i>

            <div>
                    <h3 className="about__title">20</h3>
                    <span className="about__subtitle">Courses Completedz</span>
                </div>
            </div>
        </div>
  )
}

export default AboutBox