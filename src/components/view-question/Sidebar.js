import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Badge } from "shards-react";


/**
 * 
 * @author Sai Krishnan S
 * @param {*} param0 
 */
const Sidebar = ({ title, className, questions, moreUrl,theme, ...attrs }) => {
    const classes = classNames(
        "module",
        "py-4",
        className,
    );
    return (
        <div className={classes} {...attrs}>
            <h5>{title}</h5>
            <div className="linked">
                {questions.map((question, idx) => (
                    <div className="d-flex p-2" key={idx}>
                        <div className="mx-2 flex-shrink-1">
                            <Badge theme={theme} title={question.title} rel="category">
                                {question.voteCount}
                            </Badge>
                        </div>
                        <a href={question.questionUrl} className="flex-grow-1">{question.title}</a>
                    </div>
                ))}

                <a href={moreUrl} className="text-muted float-right">Show More →</a>
            </div>
        </div>
    );
}


Sidebar.propTypes = {
    /**
     * The page title.
     */
    title: PropTypes.string,
    /**
     * The page subtitle.
     */
    questions: PropTypes.array,
    /**
     * The page subtitle.
     */
    moreUrl: PropTypes.string
};

export default Sidebar;

