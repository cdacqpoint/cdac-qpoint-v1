import Dispatcher from "../flux/dispatcher";
import Constants from "../_constants/app.constants";


/**
 * Define Action methods
 * @author Sai Krishnan S<xicoder96@github.com>
 */
export const ViewQuestionActions = {
    // Fetch Question Details
    fetchQuestionDetails: (questionId) => {
        Dispatcher.dispatch({
            actionType: Constants.FETCH_QUESTION_DETAILS,
            questionId: questionId,
        })
    },
    
    // Fetch variables
    fetchComments: (postId) => {
        Dispatcher.dispatch({
            actionType: Constants.FETCH_COMMENTS,
            postId: postId,
        })
    },

    // Add variables
    addComments: (data) => {
        Dispatcher.dispatch({
            actionType: Constants.ADD_COMMENT,
            data: data,
        })
    },

    // Edit variables
    editComments: (_id, data) => {
        Dispatcher.dispatch({
            actionType: Constants.EDIT_COMMENT,
            _id: _id,
            data: data,
        })
    },

    // Edit Question Details
    editQuestionDetail: (_id, data) => {
        Dispatcher.dispatch({
            actionType: Constants.EDIT_QUESTION_DETAIL,
            _id: _id,
            data: data,
        })
    },

    //Paginate Comments
    paginateComments: (page) => {
        Dispatcher.dispatch({
            actionType: Constants.PAGENATE_COMMENT,
            page: page,
        })
    },

    //Change Page Limit
    changeCommentsPerPageLimit: (limit) => {
        Dispatcher.dispatch({
            actionType: Constants.CHANGE_COMMENTS_PER_PAGE,
            limit: limit,
        })
    },

    //Upvote Post
    upvotePost: (_id) => {
        Dispatcher.dispatch({
            actionType: Constants.UPVOTE_POST,
            id: _id,
        })
    },

    //Upvote Comment
    upvoteComment: (_id) => {
        Dispatcher.dispatch({
            actionType: Constants.UPVOTE_COMMENT,
            id: _id,
        })
    }
}

window.ViewQuestionActions = ViewQuestionActions;