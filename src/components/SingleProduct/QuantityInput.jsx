import './QuantityInput.css'

const QuantityInput = () => {
    return (
        <>
            <h2 className="quantity_title">Quantity:</h2>
            <div className="align-center quantity_input">
                <button className='quantity_input_button' disabled>-</button>
                <p className="quantity_input_count">1</p>
                <button className='quantity_input_button'>+</button>
            </div>
            <button className="search-button add_cart">Add to Cart</button>
        </>
    )
}

export default QuantityInput