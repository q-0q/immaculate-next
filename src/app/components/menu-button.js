'use client'
export default function MenuButton() {

    const imageClick = () => {
        document.getElementById("menu").classList.add("menu_open")
        document.getElementById("menu").classList.remove("menu_close")
        document.getElementById("menuscreen").classList.add("screen_open")
        document.getElementById("menuscreen").classList.remove("screen_close")
    }


    return (

        <div>
            <img  src="/left-arrow.png" style={{ width: '20px', height: '20px', marginBottom: '1rem', marginRight: '2rem', cursor: "pointer"}} onClick={() => imageClick()}>
            </img>
        </div>

    )
}