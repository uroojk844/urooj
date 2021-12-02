import React from 'react';
import './Skillbar.css';
import ScrollOut from "scroll-out";

function Skillbar(props) {
    return (
        <div className="skillbar">
            <div className="language"><i className={props.icon}></i> { props.name }</div>
            <div className="progressbar">
                <div style={{ "--progress":props.progress+"%","--i":props.id}} className="progress"></div>
            </div>
        </div>
    )
}

export default Skillbar;

ScrollOut({
    targets: '.progressbar',
});