import ProductsList from './ProductsList';
import './ProductsPage.css'
import ProductsSidebar from './ProductsSidebar';

const ProductsPage = () => {
    return (
        <section className="products_page">
            <ProductsSidebar />

            <ProductsList />
        </section>
    )
}

export default ProductsPage