import React from 'react';
import './About.css';
import Skillbar from './Skillbar';

function About() {
    return (
        <>
        
            <div id="About" className="about_container">
                <div className="heading">My Name</div>
                <div className="about">I am a web developer and programmer with a diverse set of skills covering both
                    front-end and back-end technologies. Having been worked on more than 40+ projects I can provide you
                    with a modern-looking dynamic website that is optimized for all devices and will help you to boost
                    your business to the global audience.</div>

                <div className="heading">My skills</div>
                <Skillbar id='1' icon="fab fa-fw fa-html5" name="HTML" progress="95" />
                <Skillbar id='2' icon="fab fa-fw fa-css3-alt" name="CSS" progress="95" />
                <Skillbar id='3' icon="fab fa-fw fa-js" name="JavaScript + JQuery" progress="90" />
                <Skillbar id='4' icon="fas fa-fw fa-database" name = "PHP + SQL + Ajax" progress="80"  />
                <Skillbar id='5' icon="fas fa-fw fa-microchip" name = "C++" progress="75" />
                <Skillbar id='6' icon="fab fa-fw fa-java" name="Java" progress="70" />
                <Skillbar id='7' icon="fab fa-fw fa-python" name = "Python" progress="75" />
            </div>
        </>
    )
}

export default About;