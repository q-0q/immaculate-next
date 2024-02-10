
import './header.css'
import MenuButton from './menu-button'

export default function Header(props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' , justifyContent: 'flex-start', alignItems: 'center', position: 'fixed', paddingTop: '3rem' }}>

<MenuButton></MenuButton>

            <p className="monarch_header" style={{ margin: '0'}}>
                {props.text}
            </p>
        </div>

    )
}