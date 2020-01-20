import Dispatcher from "../flux/dispatcher";
import Constants from "../_constants/app.constants";

export const CategoriesAction = {
    fetchCategories: () => {
        Dispatcher.dispatch({
            actionType: Constants.FETCH_CATEGORIES
        })
    }

}