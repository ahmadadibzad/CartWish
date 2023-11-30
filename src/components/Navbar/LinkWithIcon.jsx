import './LinkWithIcon.css'

const LinkWithIcon = ({ title, link, emoji, sidebar }) => {
    return (
        <a href={link} className={'align-center ' + (sidebar ? 'sidebar_link' : '')}>{title} <img src={emoji} alt="rocket" className="link-emoji" /></a>
    )
}

export default LinkWithIcon