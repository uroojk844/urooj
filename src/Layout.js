import React from 'react';
import Nav from './Nav';
import Content from './Content';
import openContact from './openContact';

export function Layout() {
    return (
        <div className="row">
            <div className="col">
                <Nav/>
            </div>
            <div className="col">
                <Content/>
            </div>

            <div className="contact">
                <div className="items toggle" onClick={ openContact }>
                    <i className="fas fa-headset"></i>
                </div>
                <a href="https://www.instagram.com/uroojk844/" style={{"--i":0}} className="items">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/uroojk844/" style={{"--i":1}} className="items">
                    <i className="fab fa-facebook-square"></i>
                </a>
                <a href="https://github.com/uroojk844" style={{"--i":2}} className="items">
                    <i className="fab fa-github"></i>
                </a>
                <a href="mailto:uroojk844@gmail.com" style={{"--i":3}} className="items">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </div>
    )
}