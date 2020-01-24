import Moment from "moment";
import { API } from "../_helpers/axios";

async function fetchQuestionsAPI(params) {
    return await API.get('/posts', { params });
}

export const PostsAPI = {
    // Load mock questions data from localStorage into QPoint via Action
    fetchQuestions: async (sort = "latest", offset = 0, limit = 10, courseTag = null, category = null) => {
        const data = await fetchQuestionsAPI({ limit, offset, courseTag, category, sort })
            .then(response => {
                const ServerResponse = response.data;
                ServerResponse.data.posts = typeof ServerResponse.data.posts !== "undefined" ? ServerResponse.data.posts.map((question) => {
                    question['authorAvatar'] = require("../images/avatars/noimage.png");
                    question['author'] = "Anonymous";
                    question['date'] = Moment(question['publishedOn']).startOf('hour').fromNow();
                    return question;
                }) : [];
                return ServerResponse;
            })
            .catch(error => { console.log("API error", error); return typeof error.response.data !== "undefined" ? error.response.data : [] });
        return data;
    },
    /**
     * @author Alisha B, Dhiraj C
     * 
     */
    createQuestion: (data) => {
        return API.post(`/post/create`, data).then(response => { return response.data; }).catch(error => { console.log("createQuestion API error", error); return error.response.data; });
    },
    totalQuestions: () => {
        return null;
    },

    searchQuestions: async (value) => {
        const data = await fetchQuestionsAPI({ limit: 5, offset: 0, keyword: value })
            .then(response => {
                const ServerResponse = response.data;
                ServerResponse.data.posts = typeof ServerResponse.data.posts !== "undefined" ? ServerResponse.data.posts.map((question) => {
                    question['askedTimeAgo'] = Moment(question['publishedOn']).startOf('hour').fromNow();
                    question['activeTimeAgo'] = Moment(question['modifiedAt']).startOf('hour').fromNow();
                    return question;
                }) : [];
                return ServerResponse.data.posts;
            })
            .catch(error => { console.log("searchQuestions API error", error); return [] });
        return data;
    },
    //Get Question details
    getQuestionDetails: async (qid) => {
        let upvoted_questions = JSON.parse(localStorage.getItem('upvoted_questions')) || [];
        const data = await API.get(`/post/${qid}`).then(response => {
            const question = response.data.data;
            question["dateCreated"] = Moment(question['publishedOn']).format('MMMM Do YYYY');
            question["name"] = "Anonymous";
            question["avatarUrl"] = require("../images/avatars/noimage.png");
            question["userUpvoted"] = upvoted_questions.includes(question._id);
            question["hasImage"] = false;
            question["activeTimeAgo"] = Moment(question['modifiedAt']).startOf('hour').fromNow();
            question["askedTimeAgo"] = Moment(question['publishedOn']).startOf('hour').fromNow();
            return question;
        })
            .catch(error => { console.log("searchQuestions API error", error); return null });
        return data;
    },
    //Upvotes
    updateUpvote: (id) => {
        return API.get(`/post/${id}/upvote`).then(response => { return response.data; }).catch(error => { console.log("updateUpvote API error", error); return false; });
    },

    getRelatedQuestions: async (relatedQuesId) => {
        return await fetchQuestionsAPI({ limit: 6, offset: 0, titleOnly: true, relatedQuesId, sort: "top_rated" })
            .then(response => {
                const ServerResponse = response.data;
                return ServerResponse.data.posts;
            }).catch(error => { console.log("getRelatedQuestions API error", error); return [] })
    },

    getHotQuestions: async () => {
        return await fetchQuestionsAPI({ limit: 6, offset: 0, titleOnly: true, sort: "top_rated" })
            .then(response => {
                const ServerResponse = response.data;
                return ServerResponse.data.posts;
            }).catch(error => { console.log("getHotQuestions API error", error); return [] })
    }
}

window.PostsAPI = PostsAPI;