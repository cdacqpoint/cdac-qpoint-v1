import DashboardDispatcher from "../flux/dispatcher";
import Constants from "../_constants/app.constants";

export const EditorAction = {
addQuestions: (data) => {
    DashboardDispatcher.dispatch({
        actionType: Constants.CREATE_QUESTION,
        data: data,
    })
}

}