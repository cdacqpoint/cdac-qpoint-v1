import React from "react";
import PropTypes from "prop-types";

const PostPagination = ({ currentPage, limit }) => {
    const defaultUrl = "#";
    return (<nav>
        <ul className="pagination justify-content-center">
            <li className="page-item">
                <a className="page-link" href={defaultUrl} aria-label="Previous">
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                </a>
            </li>
            <li className="page-item"><a className="page-link" href={defaultUrl}>1</a></li>
            <li className="page-item"><a className="page-link" href={defaultUrl}>2</a></li>
            <li className="page-item"><a className="page-link" href={defaultUrl}>3</a></li>
            <li className="page-item">
                <a className="page-link" href={defaultUrl} aria-label="Next">
                    <span aria-hidden="true">»</span>
                    <span className="sr-only">Next</span>
                </a>
            </li>
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