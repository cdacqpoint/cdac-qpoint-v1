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
                    question['authorAvatar'] = "";
                    question['author'] = "Anonymous";
                    question['date'] = Moment(question['publishedOn']).startOf('hour').fromNow();
                    return question;
                }) : [];
                return ServerResponse;
            })
            .catch(error => { console.log("API error", error); return error.response.data });
        return data;
    },
    /**
     * @author Alisha B, Dhiraj C
     * 
     */
    createQuestion: (data) => {

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
    getQuestionDetails: (qid) => {

    },
    //Upvotes
    updateUpvote: (id) => {

    }
}

window.PostsAPI = PostsAPI;