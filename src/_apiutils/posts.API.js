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
                console.log(ServerResponse)
                return ServerResponse;
            })
            .catch(error => { console.log("API error", error);  return error.response.data});
        return data;
    },
    /**
     * @author Alisha B, Dhiraj C
     * 
     */
    createQuestion: (data) => {

    },
    totalQuestions: () => {

    },

    searchQuestions: (value) => {

    },
    //Get Question details
    getQuestionDetails: (qid) => {

    },
    //Upvotes
    updateUpvote: (id) => {

    }
}

window.PostsAPI = PostsAPI;