import ProductCard from './ProductCard'
import './ProductsList.css'

const ProductsList = () => {
    return (
        <section className="products_list_section">
            <header className="products_list_header align-center">
                <h2>Products</h2>
                <select name="sort" id="" className="products_sorting">
                    <option value="">Relevance</option>
                    <option value="price desc">Price HIGH to LOW</option>
                    <option value="price asc">Price LOW to HIGH</option>
                    <option value="rate desc">Rate HIGH to LOW</option>
                    <option value="rate asc">Rate LOW to HIGH</option>
                </select>
            </header>

            <div className="products_list">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    )
}

export default ProductsList