import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Col, Card, Badge, CardBody, Button,CardFooter } from "shards-react";

const Post = ({ post }) => {
    const defaultUrl = "#";
    return (<Col lg="12" className="mb-4">
        <Card small className="card-post mb-4">
            <CardBody tag={Link} to="blog-overview">
                <h5 className="card-title" >{post.title.substr(0, 100) + "..."}</h5>
                <p className="card-text text-muted">{post.desc.substr(0, 250) + "..."}</p>
            </CardBody>
            <CardFooter className="border-top d-flex">
                <div className="card-post__author d-flex">
                    <a
                        href={defaultUrl}
                        className="card-post__author-avatar card-post__author-avatar--small"
                        style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                        {post.times_ago}
                    </a>
                    <div className="d-flex flex-column justify-content-center ml-3">
                        <span className="card-post__author-name">
                            {post.author}
                        </span>
                        <small className="text-muted">{post.date}</small>
                    </div>
                </div>
                <div className="my-auto ml-auto">
                    <Badge pill className="card-post__category bg-primary ml-1">
                        {post.tag}
                    </Badge>
                    {post.category.map((cat, index) => (
                        <a href={defaultUrl} className="category-link d-none d-md-inline-block" key={index}>{cat}</a>
                    ))}
                    <Button pill theme="white" tag={Link} to="user-profile">
                        <span className="nav-link-icon__wrapper">
                            <i className="fas fa-comment"></i>
                            <Badge pill className="ml-2">{post.commentsCount}</Badge>
                        </span>
                    </Button>
                </div>
            </CardFooter>
        </Card>
    </Col>)
}

Post.propTypes = {
    /**
     * Question details
     */
    post: PropTypes.any
};

export default Post;