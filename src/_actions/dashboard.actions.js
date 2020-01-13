import DashboardDispatcher from "../flux/dispatcher";
import Constants from "../_constants/app.constants";


// Define action methods
export const DashboardActions = {

    // Recieve categories
    recieveCategories: (data) => {
        DashboardDispatcher.dispatch({
            actionType: Constants.RECIEVE_CATEGORIES,
            data: data,
        })
    },

    // Recieve Questions
    recieveQuestions: (data) => {
        DashboardDispatcher.dispatch({
            actionType: Constants.RECIEVE_QUESTIONS,
            data: data,
        })
    },

    // Recieve course tags
    recieveCourseTags: (data) => {
        DashboardDispatcher.dispatch({
            actionType: Constants.RECIEVE_COURSE_TAGS,
            data: data,
        })
    },

    // Recieve variables
    recieveVariables: (data) => {
        DashboardDispatcher.dispatch({
            actionType: Constants.RECIEVE_VARIABLES,
            data: data,
        })
    },

    // Fetch categories
    fetchCategories: (limit) => {
        DashboardDispatcher.dispatch({
            actionType: Constants.FETCH_CATEGORIES,
            limit: limit,
        })
    },

    // Fetch course tags
    fetchCourseTags: (limit) => {
        DashboardDispatcher.dispatch({
            actionType: Constants.FETCH_COURSE_TAGS,
            limit: limit,
        })
    },

    // Fetch course tags
    fetchVariables: () => {
        DashboardDispatcher.dispatch({
            actionType: Constants.FETCH_VARIABLES,
        })
    },

    // Fetch Questions data
    fetchQuestions: () => {
        DashboardDispatcher.dispatch({
            actionType: Constants.FETCH_QUESTIONS
        })
    },

    // Change Question Filter
    changeFilter: (filter) => {
        DashboardDispatcher.dispatch({
            actionType: Constants.CHANGE_FILTER,
            filter: filter
        })
    },

    // Change Question Filter
    changeQuestionsPerPage: (limit) => {
        DashboardDispatcher.dispatch({
            actionType: Constants.CHANGE_QUESTION_PER_PAGE,
            limit: limit
        })
    },

    // Change Course Tags
    changeCourseTags: (tag) => {
        DashboardDispatcher.dispatch({
            actionType: Constants.CHANGE_COURSE_TAGS,
            tag: tag
        })
    },

    // Change Categories
    changeCategories: (category) => {
        DashboardDispatcher.dispatch({
            actionType: Constants.CHANGE_CATEGORIES,
            category: category
        })
    },

    // Change Question Pagenation
    pagenateQuestions: (page) => {
        DashboardDispatcher.dispatch({
            actionType: Constants.PAGENATE_QUESTIONS,
            page: page
        })
    },

    // Show all questions data
    showQuestions: (show) => {
        DashboardDispatcher.dispatch({
            actionType: Constants.SHOW_QUESTIONS,
            show: show
        })
    },

    // Show all loader data
    showLoader: (show) => {
        DashboardDispatcher.dispatch({
            actionType: Constants.SHOW_LOADER,
            show: show
        })
    },
}
