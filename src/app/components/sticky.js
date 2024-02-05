'use client'
import React from 'react';
import './sticky.css'

import Header from './header.js';

export default function Sticky() {

    // window is accessible here.
    React.useEffect(() => {

        function lerpScroll(start, end) {
            var unclamped = (scrollY - start) / (end - start)
            return Math.min(Math.max(unclamped, 0), 0.999)
        }

        window.addEventListener('scroll', () => {
            document.body.style.setProperty('--scroll2', lerpScroll(0, window.innerHeight));
        }, false);
    }, []);

    return (
        <div className='sticky'>
            <Header text="Blog"/>
        </div>
    )
}