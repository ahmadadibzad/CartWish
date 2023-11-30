import './ProductsSidebar.css'
import LinkWithIcon from './../Navbar/LinkWithIcon';
import rocket from '../../assets/rocket.png';
import star from '../../assets/glowing-star.png';
import idButton from '../../assets/id-button.png';
import memo from '../../assets/memo.png';
import order from '../../assets/package.png';
import lock from '../../assets/locked.png';

const ProductsSidebar = () => {
    return (
        <aside className="products_sidebar">
            <h2>Category</h2>

            <div className="category_list">
                <LinkWithIcon title="Electronics"
                    link="products?category=electronics"
                    emoji={rocket}
                    sidebar={true}
                />
            </div>
        </aside>
    )
}

export default ProductsSidebar