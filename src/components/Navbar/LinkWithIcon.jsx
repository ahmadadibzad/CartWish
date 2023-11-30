import './LinkWithIcon.css'

const LinkWithIcon = ({ title, link, emoji }) => {
    return (
        <a href={link} className='align-center'>{title} <img src={emoji} alt="rocket" className="link-emoji" /></a>
    )
}

export default LinkWithIcon