import './Pagination.css'

const Pagination = ({ totalPosts, postPerPage, onClick, currentPage }) => {
    let pages = [];
    const pagesCount = Math.ceil(totalPosts / postPerPage);

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <>
        {pages.length > 1 && <ul className='pagination'>
            {pages.map(page =>
                <li key={page}>
                    <button
                        className={'pagination_button' + (currentPage == page ? ' active' : '')}
                        onClick={() => onClick(page)}>
                        {page}
                    </button>
                </li>
            )}
        </ul>}
    </>
}

export default Pagination