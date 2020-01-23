import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Badge } from "shards-react";


/**
 * 
 * @author Sai Krishnan S
 * @param {*} param0 
 */
const Sidebar = ({ title, className, questions, moreUrl, theme, ...attrs }) => {
    const classes = classNames(
        "module",
        "py-4",
        className,
    );
    return (
        <div className={classes} {...attrs}>
            <h5>{title}</h5>
            {questions.length > 0 && <div className="linked">
                {questions.map((question) => (
                    <div className="d-flex p-2" key={question._id}>
                        <div className="mx-2 flex-shrink-1">
                            <Badge theme={theme} title={question.title} rel="category">
                                {question.upvotes}
                            </Badge>
                        </div>
                        <Link to={`/question/${question._id}`} className="flex-grow-1">{question.title}</Link>
                    </div>
                ))}

                <a href={moreUrl} className="text-muted float-right">Show More →</a>
            </div>}
            {questions.length === 0 &&  <div className="linked"><div className="no-content text-muted text-center"><h4><i className="material-icons">sentiment_dissatisfied</i> No questions yet!</h4></div></div>}
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

