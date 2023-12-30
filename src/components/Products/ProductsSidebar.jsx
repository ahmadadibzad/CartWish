import './ProductsSidebar.css'
import LinkWithIcon from './../Navbar/LinkWithIcon';
import rocket from '../../assets/rocket.png';
import star from '../../assets/glowing-star.png';
import idButton from '../../assets/id-button.png';
import memo from '../../assets/memo.png';
import order from '../../assets/package.png';
import lock from '../../assets/locked.png';
import useData from './../../hooks/useData';


const ProductsSidebar = () => {
    const { data: categories, error } = useData('/category');

    return (
        <aside className="products_sidebar">
            <h2>Category</h2>

            <div className="category_list">
                {error && <em className='form_error'>{error}</em>}
                {categories?.map(category =>
                    <LinkWithIcon
                        key={category._id}
                        title={category.name}
                        link={`/products?category=${category.name}`}
                        emoji={`http://localhost:5000/category/${category.image}`}
                        sidebar={true}
                    />
                )}
            </div>
        </aside>
    )
}

export default ProductsSidebar