import './ProductCard.css'
import star from '../../assets/white-star.png'
import basket from '../../assets/basket.png'
import { NavLink } from 'react-router-dom';

const ProductCard = ({ id, title, image, price, rating, ratingCounts, stock }) => {
    return (
        <article className='product_card'>
            <div className="product_image">
                <NavLink to={`/product/${id}`}><img src={`http://localhost:5000/products/${image}`} alt="product image" /></NavLink>
            </div>
            <div className="product_details">
                <h3 className="product_price">${price}</h3>
                <p className="product_title">{title}</p>

                <footer className="align-center product_info_footer">
                    <div className="align-center">
                        <p className="align-center product_rating">
                            <img src={star} alt="star" /> {rating}
                        </p>
                        <p className="product_review_count">{ratingCounts}</p>
                    </div>

                    {stock > 0 && <button className='add_to_cart'>
                        <img src={basket} alt="basket button" />
                    </button>}
                </footer>
            </div>
        </article >
    )
}

export default ProductCard