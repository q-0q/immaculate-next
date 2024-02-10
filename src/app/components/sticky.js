'use client'
import React from 'react';
import './sticky.css'

import Header from './header.js';

export default function Sticky() {

    // window is accessible here.
    React.useEffect(() => {

        function lerpScroll(start, end) {
            var unclamped = (scrollY - start) / (end - start)
            return Math.min(Math.max(unclamped, 0), 0.99999)
        }

        window.addEventListener('scroll', () => {
            var el = document.getElementById("sticky");
            if (lerpScroll(0, window.innerHeight) > 0.99998) {
                el.classList.add("sticky");
            }
            else {
                el.classList.remove("sticky");
            }

        }, false);
    }, []);

    return (
        <div id='sticky'>
            <Header text="Blog"/>
        </div>
    )
}