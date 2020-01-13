import React from "react";
import PropTypes from "prop-types";
const Previous = (props) => {
    const defaultUrl = "#";
    const prevPage = props.num - 1;
    console.log("prev page:",prevPage)
    return (<li className="page-item">
        <a className="page-link" href={defaultUrl} aria-label="Previous" onClick={() => props.pagenate(prevPage)}>
            <span aria-hidden="true">«</span>
            <span className="sr-only">Previous</span>
        </a>
    </li>)
}
const Next = (props) => {
    const defaultUrl = "#";
    const nextPage = props.num + 1;
    console.log("nextPage:",nextPage)
    return (<li className="page-item">
        <a className="page-link" href={defaultUrl} aria-label="Previous" onClick={() => props.pagenate(nextPage)}>
            <span aria-hidden="true">»</span>
            <span className="sr-only">Next</span>
        </a>
    </li>)
}
const PostPagination = (props) => {
    const { num, limit, total } = props;
    const defaultUrl = "#";
    const pageNumbers = [];
    const totalPages = Math.floor(total / limit);
    for (let i = num + 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    console.log("total pages:",totalPages,pageNumbers)
    return (
    <nav>
        <ul className="pagination justify-content-center">
            {num !== 1 && <Previous num={num} pagenate={props.pagenate} />}
            <li className="page-item active"><a className="page-link" href={defaultUrl}>{num}</a></li>
            {pageNumbers.map((page, idx) => (
                <li className="page-item" key={idx}>
                    <a className="page-link" href={defaultUrl} onClick={() => { props.pagenate(page) }}>{page}</a>
                </li>
            ))}

            {num !== totalPages && <Next num={num} pagenate={props.pagenate} />}
        </ul>
    </nav>);
}

PostPagination.propTypes = {
    /**
     * Question details
     */
    currentPage: PropTypes.number,
    limit: PropTypes.number,
};

export default PostPagination;