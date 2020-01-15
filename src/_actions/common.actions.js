import Dispatcher from "../flux/dispatcher";
import Constants from "../_constants/app.constants";

// Define action methods
export const CommonActions = {

    // Recieve categories
    searchQuestions: (keyword) => {
        Dispatcher.dispatch({
            actionType: Constants.SEARCH_QUESTIONS,
            keyword: keyword,
        })
    },
}