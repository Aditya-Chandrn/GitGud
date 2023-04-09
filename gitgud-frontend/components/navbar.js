import Image from 'next/image'
import nav from '../styles/nav.module.css'
import Profile from '../public/pngegg.png'

export default function Navbar() {
    return(
        <nav className={nav.bar}>
            <h1 className={nav.title}>GitGud</h1>
            <ul className={nav.links}>
                <li>Numberplates</li>
                <li>Faces</li>
                <li><Image src={Profile} width={40} height={40} className={nav.img} /></li>
            </ul>
        </nav>
    )
}