import Dispatcher from "../flux/dispatcher";
import Constants from "../_constants/app.constants";

export const CategoriesAction = {
    fetchCategories: () => {
        Dispatcher.dispatch({
            actionType: Constants.FETCH_CATEGORIES
        })
    },
    searchCategory:(keyword) =>{
        Dispatcher.dispatch({
            actionType: Constants.SEARCH_CATEGORIES,
            keyword
        })
    }
}