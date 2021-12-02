import React from 'react';
import './Gallery.css';
import i1 from './img/1.png';
import i2 from './img/2.png';
import i3 from './img/3.png';
import i4 from './img/4.png';
import i5 from './img/5.png';
import i6 from './img/6.png';
import i7 from './img/7.png';

function Gallery() {
    return (
        <div style={{paddingTop:"16px"}} className="about_container">
            <div id="Gallery" className="heading">
                My works
            </div>

            <div className="gallery">
                <div><img src={i1} alt="i1" /></div>
                <div><img src={i2} alt="i2" /></div>
                <div><img src={i3} alt="i3" /></div>
                <div><img src={i4} alt="i4" /></div>
                <div><img src={i5} alt="i5" /></div>
                <div><img src={i6} alt="i6" /></div>
                <div><img src={i7} alt="i7" /></div>
            </div>
        </div>
    )
}

export default Gallery;