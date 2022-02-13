import React, { useRef } from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';


const galleryImg = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04
]

const Gallery = () => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  // JSX
  return (
    <div className="app__gallery flex__center">

      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, repellat suscipit. Voluptates, accusantium nam. Unde.</p>
        <button className="custom__button" type="button">View more</button>
      </div>

      <div className="app__gallery-images">

        <div className="app__gallery-images_container" ref={scrollRef}>
          {
            galleryImg.map((img, index) => {
              return (
                <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                  <img src={img} alt="gallery_img" />
                  <BsInstagram className="gallery__img-icon" />
                </div>
              )
            })
          }

        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrows-icons" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrows-icons" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
