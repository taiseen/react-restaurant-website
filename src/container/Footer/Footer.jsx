import React from 'react';
import { FiInstagram, FiTwitch, FiFacebook } from 'react-icons/fi';
import {FooterOverlay , Newsletter} from './../../components';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="contact">
    <FooterOverlay />
    <Newsletter />
  </div>
);

export default Footer;
