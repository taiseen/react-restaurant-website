import React from 'react';
import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">

    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g latter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusamus libero quisquam eligendi, maiores vero similique ullam iure fugit exercitationem quo nobis cupiditate. Soluta, minus!</p>
        <button type="button" className="custom__button">Know More</button>
      </div>


      <div className="app__aboutus-content-knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>


      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our history</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusamus libero quisquam eligendi, maiores vero similique ullam iure fugit exercitationem quo nobis cupiditate. Soluta, minus!</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

    </div>

  </div>
);

export default AboutUs;
