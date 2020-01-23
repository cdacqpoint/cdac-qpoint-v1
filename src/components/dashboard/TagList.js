import React from "react";
import PropTypes from "prop-types";
import {
    Badge
} from "shards-react";

const TagList = (props) => {
    const { title, taglists, selected } = props;
    return (<>
        <strong className="text-muted d-block mb-2">{title}</strong>
        <span>
            {taglists.map((tag) => {
                return (
                    <a href={tag.url} key={tag._id} onClick={() => props.handleClick(tag._id)}>
                        <Badge pill className="ml-2" theme={selected === tag._id ? "info" : "primary"}>{tag.name}</Badge>
                        <span className="text-muted m-2">x{tag.totalCount}
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