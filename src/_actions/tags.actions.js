import Dispatcher from "../flux/dispatcher";
import Constants from "../_constants/app.constants";

export const TagAction = {
    fetchTags: () => {
        Dispatcher.dispatch({
            actionType: Constants.FETCH_COURSE_TAGS
        })
    }

}