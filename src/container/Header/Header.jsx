import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">

      <SubHeading title="Chase the new flavour " />
      <h1 className="app__header-h1">the key to fine dining</h1>

      <p className="p__opensans">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nulla aut possimus iste dolores laborum eveniet autem a, totam, neque ad eos? Nesciunt, omnis eum.
      </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
