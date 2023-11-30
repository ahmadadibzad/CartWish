import './Navbar.css'
import LinkWithIcon from './LinkWithIcon';
import rocket from '../../assets/rocket.png';
import star from '../../assets/glowing-star.png';
import idButton from '../../assets/id-button.png';
import memo from '../../assets/memo.png';
import order from '../../assets/package.png';
import lock from '../../assets/locked.png';

const Navbar = () => {
    return (
        <nav className='navbar align-center'>
            <div className='align-center'>
                <h1 className='navbar-heading'>CartWish</h1>
                <form className='navbar-form align-center'>
                    <input type="text" className='navbar-search'
                        placeholder='Search Products' />
                    <button type='submit' className='search-button'>Search</button>
                </form>
            </div>
            <div className='navbar-links align-center'>
                <LinkWithIcon title="Home" link="/" emoji={rocket} />
                <LinkWithIcon title="Products" link="/products" emoji={star} />
                <LinkWithIcon title="Login" link="/login" emoji={idButton} />
                <LinkWithIcon title="SignUp" link="/signup" emoji={memo} />
                <LinkWithIcon title="My Orders" link="/myorders" emoji={order} />
                <LinkWithIcon title="Logout" link="/logout" emoji={lock} />
                <a href='/cart' className='align-center'>
                    Cart
                    <p className='cart-counts align-center'>0</p>
                </a>
            </div>
        </nav>
    )
}

export default Navbar