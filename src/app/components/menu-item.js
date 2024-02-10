import Link from "next/link";

export default function MenuItem(props) {
    return (
        <Link style={{textDecoration: 'none', color: 'black', display: 'block', marginBlock: '1rem'}} href={props.href}>{props.title}</Link>
    )
}