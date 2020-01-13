import React from "react";
import PropTypes from "prop-types";

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const TotalVarables = ({ total, title }) => {
    return (<><h3 className="mb-0 text-primary">{numberWithCommas(total)}</h3>
        <span className="text-muted d-block mb-2">{title}</span></>);
}

TotalVarables.propTypes = {
    /**
     * Question details
     */
    totalQuestions: PropTypes.number,
    title: PropTypes.string,
};
TotalVarables.defaultProps = {
    title: "Questions",
    total: 0
};
export default TotalVarables;