import Dispatcher from "../flux/dispatcher";
import { EventEmitter } from 'events';
import Constants from "../_constants/app.constants";
import { TagsAPI } from "../_dummyApis/tags.API";

let _store = {

    tags: TagsAPI.fetchTags()
};

class TagStore extends EventEmitter {
    constructor() {
        super();
        this.registerToActions = this.registerToActions.bind(this);
        this.dispatchToken = Dispatcher.register(this.registerToActions.bind(this));
    }


    registerToActions(payload) {
        switch (payload.actionType) {
            case Constants.FETCH_COURSE_TAGS:
                return _store.tags;
            default:
                return _store;
        }
    }
}
export default new TagStore();