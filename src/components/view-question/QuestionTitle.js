import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Col } from "shards-react";

const QuestionTitle = ({ title, subtitle, activeTimeAgo, askedTimeAgo, className, ...attrs }) => {
    const classes = classNames(
        className,
        "text-center",
        "text-md-left",
        "mb-sm-0"
    );

    return (
        <Col lg="12" className={classes} {...attrs}>
            <span className="text-uppercase page-subtitle">{subtitle}</span>
            <h3 className="page-title mb-2">{title}</h3>
            <small>
                <span className="text-muted">Asked</span> {askedTimeAgo}
                <span className="ml-2 text-muted">Active</span> {activeTimeAgo}
            </small>
            <hr />
        </Col>
    )
};

QuestionTitle.propTypes = {
    /**
     * The page title.
     */
    title: PropTypes.string,
    /**
     * The page subtitle.
     */
    subtitle: PropTypes.string,
    /**
     * The page subtitle.
     */
    activeTimeAgo: PropTypes.string,
    /**
     * The page subtitle.
     */
    askedTimeAgo: PropTypes.string,
};

export default QuestionTitle;
