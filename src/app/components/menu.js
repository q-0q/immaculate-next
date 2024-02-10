
'use client'
import "./menu.css"
import Link from "next/link"
import MenuItem from './menu-item'

export default function Menu(props) {

    const imageClick = () => {
        document.getElementById("menu").classList.remove("menu_open")
        document.getElementById("menu").classList.add("menu_close")
        document.getElementById("menuscreen").classList.remove("screen_open")
        document.getElementById("menuscreen").classList.add("screen_close")
    }

    return (

        <div className="screen" id="menuscreen" onClick={imageClick}>
            <div className="menu" id="menu">
                <div style={{padding: '30px'}}>
                    <MenuItem href="/" title="Immaculate Conception"/>
                    <MenuItem href="/about" title="About"/>
                    <MenuItem href="/blog" title="Blog"/>
                    <MenuItem href="/join" title="Join"/>
                    <MenuItem href="/donate" title="Donate"/>

                </div>
            </div>

        </div>

    )
}

