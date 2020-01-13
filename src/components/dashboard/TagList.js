import React from "react";
import PropTypes from "prop-types";
import {
    Badge
} from "shards-react";

const TagList = ({ title, taglists }) => {
    return (<>
        <strong className="text-muted d-block mb-2">{title}</strong>
        <span>
            {taglists.map((tag, idx) => {
                return (
                    <a href={tag.url} key={idx}>
                        <Badge pill className="ml-2">{tag.name}</Badge>
                        <span className="text-muted m-2">x{tag.post_count}
                        </span>
                    </a>
                );
            })}
        </span>
    </>);
}

TagList.propTypes = {
    /**
     * Question details
     */
    Taglists: PropTypes.any,
    title: PropTypes.string,
};

export default TagList;