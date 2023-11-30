import './FeaturedProducts.css'
import iphone from '../../assets/iphone.jpg'
import ProductCard from '../Products/ProductCard'

const FeaturedProducts = () => {
    return (
        <section className="featured_products">
            <h2>Featured Products</h2>

            <div className="featured_products_list align-center">
                <ProductCard image={iphone} />
                <ProductCard image={iphone} />
                <ProductCard image={iphone} />
            </div>
        </section>
    )
}

export default FeaturedProducts