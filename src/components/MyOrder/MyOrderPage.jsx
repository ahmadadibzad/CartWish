import Table from '../Common/Table'
import './MyOrderPage.css'

const MyOrderPage = () => {
    return (
        <section className="align-center myorder_page">
            <Table headings={['Order', 'Products', 'Total', 'Status']}>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>iPhone, Power Bank</td>
                        <td>$1299</td>
                        <td>Shipped</td>
                    </tr>
                </tbody>
            </Table>
        </section>
    )
}

export default MyOrderPage