import React, { useState } from 'react'
import "./portfolio.css"
import Menu from './Menu'

const Portfolio = () => {
  const[items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  }
  
  return (
    <section className="work container section" id="work">
      <h2 className="section___title">Recent Work</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems (Menu)}
        >Everything</span>
        <span className="work__item" onClick={() => filterItem ("Frontend")}
        >Frontend</span>
        <span className="work__item" onClick={() => filterItem ("Web-Development")}
        >Web-Development</span>
        <span className="work__item" onClick={() => filterItem ("Php")}
        >Php</span>
        <span className="work__item" onClick={() => filterItem ("Python")}
        >Python</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const{ id, image, title, category} = elem;
          return(
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href="https://github.com/anand-144?tab=repositories" className="work__button">
              <i className="icon-link"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio