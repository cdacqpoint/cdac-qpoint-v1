import { random } from "../_helpers/random";
import moment from "moment";

let AllComments = [];

const fetchComments = ({ postId, filter, limit, offset }) => {
    AllComments = JSON.parse(localStorage.getItem('comments')) || [];
    let comments = AllComments.filter(comment => comment.post === postId);
    comments = comments.map(comment => {
        return { ...comment, upvoteUrl: "#", commentedTimeAgo: moment(comment.createdAt).startOf('hour').fromNow(), editUrl: "#", dateCreated: moment(comment.createdAt).format('MMMM Do YYYY'), name: "Anonymous User", avatarUrl: require("../images/avatars/noimage.png"), userUpvoted: false };
    });
    return {comments_count:comments.length,comments};
}

const createComment = ({ postId, desc }) => {
    AllComments.push({
        _id: random(25),
        status: "published",
        post: postId,
        desc: desc,
        createdAt: moment().format(),
        modifiedAt: moment().format()
    });
    localStorage.setItem('comments', JSON.stringify(AllComments));
    return { status: true, message: "Commented successfull", data: null };
}


const updateUpvote = ({ id }) => {
    AllComments.map((comment) => {
        if (comment._id === id) {
            ++comment['upvotes'];
        }
        return comment;
    })
    localStorage.setItem('comments', JSON.stringify(AllComments));
    return { status: true, message: "Commented successfull", data: null };
}

export default {
    fetchComments,
    createComment,
    updateUpvote
}