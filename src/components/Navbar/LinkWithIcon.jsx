import { NavLink } from 'react-router-dom'
import './LinkWithIcon.css'

const LinkWithIcon = ({ title, link, emoji, sidebar }) => {
    return (
        <NavLink to={link} className={'align-center ' + (sidebar ? 'sidebar_link' : '')}>{title} <img src={emoji} alt="rocket" className="link-emoji" /></NavLink>
    )
}

export default LinkWithIcon