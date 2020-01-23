import moment from "moment";
import { API } from "../_helpers/axios";

const fetchComments = async (params) => {
    let upvoted_comments = JSON.parse(localStorage.getItem('upvoted_comments')) || [];
    const data = await API.get(`/comments`, { params })
        .then(response => {
            const ServerResponse = response.data;
            ServerResponse.data.comments = typeof ServerResponse.data.comments !== "undefined" ? ServerResponse.data.comments.map((comment) => {
                return { ...comment, upvoteUrl: "#", commentedTimeAgo: moment(comment.createdAt).startOf('hour').fromNow(), editUrl: "#", dateCreated: moment(comment.createdAt).format('MMMM Do YYYY'), name: "Anonymous", avatarUrl: require("../images/avatars/noimage.png"), userUpvoted: upvoted_comments.includes(comment._id) };
            }) : [];
            return ServerResponse.data;
        }).catch(error => { console.log("API error", error); return [] });
    return data;
}

const createComment = async (params) => {
    return API.post(`/comment/create`, params).then(response => { return response.data; }).catch(error => { console.log("createComment API error", error); return error.response.data; });
}


const updateUpvote = async (id) => {
    return API.get(`/comment/${id}/upvote`).then(response => { return response.data; }).catch(error => { console.log("updateCommentUpvote API error", error); return false; });
}

export default {
    fetchComments,
    createComment,
    updateUpvote
}