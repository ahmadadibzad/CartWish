import { useEffect, useState } from 'react';
import apiClient from '../utils/api-client'

const useData = (endpoint, customeConfig, dependencies = []) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        apiClient.get(endpoint, customeConfig)
            .then(res => {
                if (endpoint === '/products' && data && data.products && customeConfig.params.page !== 1) {
                    setData(prev => ({
                        ...prev,
                        products: [...prev.products, ...res.data.products]
                    }));
                } else {
                    setData(res.data)
                }
            }
            )
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false));
    }, dependencies);

    return { data, error, isLoading };
}

export default useData