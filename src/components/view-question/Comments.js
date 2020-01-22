import React from "react";
import classNames from "classnames";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });


/**
 *
 * @author Sai Krishnan S <xicoder96@github.com>
 * @class Comments
 * @extends {React.Component}
 */
export default class Comments extends React.Component {
    render() {
        const classes = classNames(
            "answer",
            "p-2",
            this.props.className,
        );
        return (
            <div className={classes} {...this.props.attrs}>
                <AnswerHeader answerCount={this.props.answerCount} />
                {typeof this.props.answerCount !== "undefined" && this.props.answerCount !== 0 && <>
                    <AnswerPagination />
                    {this.props.answers.map((comment, idx) => (
                        <div key={idx}>
                            <CommentItem details={comment} handleUpvotes={this.props.handleUpvotes}/>
                            <hr />
                        </div>
                    ))}
                </>}
                {this.props.answerCount === 0 && <div className="no-content text-muted text-center">
                    <h4><i className="material-icons">sentiment_dissatisfied</i> No answers yet!</h4>
                </div>}

            </div>
        );
    }
}

const AnswerPagination = ({ className, ...attrs }) => {
    const classes = classNames(
        "answer-nav",
        className,
    );
    return (
        <div className={classes} {...attrs}>
            <nav aria-label="Pagination for comments">
                <ul className="pagination pagination-sm">
                    <li className="page-item active" aria-current="page">
                        <span className="page-link">
                            1
                    <span className="sr-only">(current)</span>
                        </span>
                    </li>
                    <li className="page-item"><a className="page-link" href="/">2</a></li>
                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                </ul>
            </nav>
        </div>
    );
}

/**
 * 
 * @author Sai Krishnan S
 * @param {*} param0 
 */
const AnswerHeader = ({ answerCount, className, ...attrs }) => {
    const classes = classNames(
        "answer-header",
        "p-2",
        className,
    );
    return (
        <div className={classes} {...attrs}>
            <h5>{answerCount} Answers</h5>
            <hr />
        </div>
    );
}

/**
 * 
 * @author Sai Krishnan S
 * @param {*} param0 
 */
const CommentItem = (data) => {
    const { details, className } = data;
    const classes = classNames(
        "answer-body",
        "row",
        "p-4",
        className,
    );
    const upvoteClasses = classNames(
        "fa fa-heart fa-3x",
        "align-self-center",
        details.userUpvoted ? "text-danger animated pulse infinite" : "",
    );
    return (
        <>
            <div className={classes}>
                <div className="p-2 col-2 vote-cell align-self-center">
                    <div className="text-center">
                        <div className="px-2">{details.upvotes}</div>
                        <div>
                            <span onClick={()=>{data.handleUpvotes(details._id)}} className="text-muted" title="This question shows research effort; it is useful and clear">
                                <i className={upvoteClasses}></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="p-3 answer-post col-10">
                    {renderHTML(details.desc)}
                </div>
            </div>
            <div className="answer-menu p-2 clearfix">
                <div className="float-left">
                    {/* <a href={details.editUrl} className="text-muted">
                        <i className="material-icons">edit</i>edit</a> */}
                </div>
                <div className="float-right ml-auto">
                    <div className="media p-2">
                        <LazyLoadImage
                            alt={details.name}
                            className="mr-3 img-thumbnail user-avatar avatar-cdac"
                            src={details.avatarUrl}
                        />
                        <div className="media-body">
                            <h6 className="mt-0">{details.name}</h6>
                            <small>answered <span className="">{details.dateCreated}</span> </small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
