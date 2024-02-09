
'use client'
import "./menu.css"

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
                <p>Hi!</p>
                <p>Hi!</p>
                <p>Hi!</p>
                <p>Hi!</p>
                <p>Hi!</p>
                </div>
            </div>

        </div>


    )
}

