import './Navbar.css'

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
            <div></div>
        </nav>
    )
}

export default Navbar