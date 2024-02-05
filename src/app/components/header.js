
import './header.css'

export default function Header(props) {
    return(
        <p className="monarch_header" style={{ margin: '0', paddingTop: '2rem' }}>
            {props.text}
        </p>
    )
}