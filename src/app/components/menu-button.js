'use client'
export default function MenuButton() {

    const imageClick = () => {
        document.getElementById("menu").classList.add("menu_open")
        document.getElementById("menu").classList.remove("menu_close")
        document.getElementById("menuscreen").classList.add("screen_open")
        document.getElementById("menuscreen").classList.remove("screen_close")
    }


    return (

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50px', height: '50px', marginBottom: '0.4rem', marginRight: '0.1rem', cursor: "pointer" }} onClick={() => imageClick()}>
            <img style={{ maxWidth: '30%' }} src="/left-arrow.png">
            </img>
        </div>

    )
}