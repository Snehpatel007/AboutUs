import React from 'react';
import './footer.css';
import Image from './Partner_img';
import img_partner from './img_partner';
import Arrow from './up-arrow.png';

function createEntry(i) {
  return (
    <Image className="child"
      key={i.id}
      img={i.imgURL}
    />
  );
}

function Footer() {
  return (
    <div className="bg">
      <h1 className='title'>Partners</h1>
      <div className='ele'>
        {img_partner.map(createEntry)}
      </div>
      <div className='ele'>
        {img_partner.map(createEntry)}
      </div>
      <a href="../public/index.html"><img className='arrow' src={Arrow}/></a>
      
    </div>
  );
}

export default Footer;
