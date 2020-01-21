import React from "react";
import classNames from "classnames";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from "prop-types";
import {
    LinkedinShareButton,
    LinkedinIcon,
    EmailShareButton,
    EmailIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon,
} from "react-share";
import "../../shards-dashboard/styles/react-share.css";

const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

/**
 * 
 * @param {*} props
 * @author Sai Krishnan S
 */
const QuestionDetails = (props) => {
    const { details, className } = props;
    const classes = classNames(
        "question",
        "d-flex",
        "p-2",
        className,
    );
    const shareUrl = "http://localhost";
    const upvoteClasses = classNames(
        "fa fa-heart fa-3x",
        "align-self-center",
        details.userUpvoted ? "text-danger animated pulse infinite" : "",
    );
    return (
        <div className={classes}>
            {/*  Upvotes Count */}
            <div className="p-2 flex-shrink-1 vote-cell align-self-center">
                <div className="text-center">
                    <div className="px-2">{details.upvotes}</div>
                    <div>
                        <span className="text-muted iampointer" title="This question shows research effort; it is useful and clear" onClick={() => { props.handleUpvotes(details._id) }}>
                            <i className={upvoteClasses}></i>
                        </span>
                    </div>
                </div>
            </div>
            {/*  /Upvotes Count */}

            {/* Post Cell */}
            <div className="p-2 post-cell flex-grow-1">
                {details.hasImage && <div className="post-images text-center pb-4">
                    <figure className="figure">
                        <LazyLoadImage
                            alt={details.title}
                            className="figure-img img-fluid img-thumbnail"
                            src={details.image}
                        />
                        <figcaption className="figure-caption how-to-ask text-sm-left">
                            <a className="text-primary" href={details.image}>
                                Fig 1 {details.title.substr(0, 50)}</a>
                        </figcaption>
                    </figure>
                </div>}

                <div className="post-text">
                    {renderHTML(details.desc)}
                </div>
                <div className="post-tags text-sm-left">
                    <a href={details.tagUrl} className="post-tag badge badge-pill badge-primary" title="DAC" rel="Course tag">{details.tag}</a>

                    {details.category.map((cat, idx) => (
                        <a href={cat.url} className="post-category badge badge-pill badge-info mx-1" title="java" rel="category" key={idx}>{cat.name}</a>
                    ))}

                </div>
                <div className="post-menu py-4 clearfix">
                    <div className="float-left">
                        <TwitterShareButton
                            url={shareUrl}
                            title={details.title}
                            className="Demo__some-network__share-button px-1"
                        >
                            <TwitterIcon size={32} round />
                        </TwitterShareButton>

                        <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button px-1">
                            <LinkedinIcon size={32} round />
                        </LinkedinShareButton>

                        <EmailShareButton url={shareUrl} subject={details.title} body={details.desc} className=" px-1">
                            <EmailIcon size={32} round={true} />
                        </EmailShareButton>

                        <WhatsappShareButton
                            url={shareUrl}
                            title={details.title}
                            separator=":: "
                            className="Demo__some-network__share-button  px-1"
                        >
                            <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
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
                                <small>asked <span className="">{details.dateCreated}</span> </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

QuestionDetails.propTypes = {
    /**
     * Question details
     */
    details: PropTypes.any
};

export default QuestionDetails;