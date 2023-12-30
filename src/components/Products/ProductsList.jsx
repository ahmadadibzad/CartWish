import ProductCard from './ProductCard'
import './ProductsList.css'
import { useState, useEffect } from 'react';
import apiClient from '../../utils/api-client'
import useData from './../../hooks/useData';
import ProductCardSkeleton from './ProductCardSkeleton';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../Common/Pagination';
import Loader from './../Common/Loader';

const ProductsList = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useSearchParams();
    const category = search.get('category');
    //const page = search.get('page');

    const { data, error, isLoading } = useData('/products', {
        params: {
            category,
            perPage: 10,
            page
        }
    }, [category, page]);

    useEffect(() => {
        setPage(1);
    }, [category]);

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const handlePageChange = page => {
        const currentParams = Object.fromEntries([...search]);
        setSearch({ ...currentParams, page: parseInt(currentParams.page) + 1 })
    }

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

            if (scrollTop + clientHeight >= scrollHeight - 1 && !isLoading && data && page < data.totalPages) {
                setPage(prev => prev + 1);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [data, isLoading]);

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
                {error && <em className='form_error'>{error}</em>}
                {isLoading && <Loader />}
                {data?.products?.map(product => (
                    <ProductCard
                        key={product._id}
                        id={product._id}
                        title={product.title}
                        image={product.images[0]}
                        price={product.price}
                        stock={product.stock}
                        rating={product.reviews.rate}
                        ratingCounts={product.reviews.counts}
                    />
                ))}
                {isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}

            </div>
            {/* {data && <Pagination
                totalPosts={data?.totalProducts}
                postPerPage={8}
                onClick={handlePageChange}
                currentPage={page}
            />} */}
        </section>
    )
}

export default ProductsList