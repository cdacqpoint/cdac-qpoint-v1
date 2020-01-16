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
    fetchComments: ({ questionId, limit, page }) => {
        Dispatcher.dispatch({
            actionType: Constants.FETCH_COMMENTS,
            questionId: questionId,
            limit: limit,
            page: page
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
    paginateComments: ({ question_id, page }) => {
        Dispatcher.dispatch({
            actionType: Constants.PAGENATE_COMMENT,
            question_id: question_id,
            page: page,
        })
    },

    //Change Page Limit
    changeCommentsPerPageLimit: ({ question_id, limit }) => {
        Dispatcher.dispatch({
            actionType: Constants.CHANGE_COMMENTS_PER_PAGE,
            question_id: question_id,
            limit: limit,
        })
    },
}