import './CartPage.css'
import user from '../../assets/user.webp';
import Table from './../Common/Table';
import QuantityInput from './../SingleProduct/QuantityInput';

const CartPage = () => {
    return (
        <section className="align-center cart_page">
            <div className="align-center user_info">
                <img src={user} alt="user profile" />
                <div>
                    <p className="user_name">Harley</p>
                    <p className="user_email">harley@gmail.com</p>
                </div>
            </div>

            <Table headings={['Item', 'Price', 'Quantity', 'Total', 'Remove']}>
                <tbody>
                    <tr>
                        <td>iPhon 14</td>
                        <td>$999</td>
                        <td className='align-center table_quantity_input'>
                            <QuantityInput />
                        </td>
                        <td>$999</td>
                        <td>Remove</td>
                    </tr>
                </tbody>
            </Table>

            <table className="cart_bill">
                <tbody>
                    <tr>
                        <td>Subtotal</td>
                        <td>$999</td>
                    </tr>
                    <tr>
                        <td>Shipping Charge</td>
                        <td>$5</td>
                    </tr>
                    <tr className='cart_bill_final'>
                        <td>Total</td>
                        <td>$1004</td>
                    </tr>
                </tbody>
            </table>

            <button className="search-button checkout_button">Checkout</button>
        </section>
    )
}

export default CartPage