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

    getTags() {
        return _store.tags;
    }

    addChangeListener(callback) {
        this.on(Constants.CHANGE, callback);
        console.log("Tags listeners:", this.listenerCount(Constants.CHANGE))
    }

    removeChangeListener(callback) {
        this.removeListener(Constants.CHANGE, callback);
        console.log("Tags listeners:", this.listenerCount(Constants.CHANGE))
    }

    registerToActions(payload) {
        switch (payload.actionType) {
            case Constants.FETCH_COURSE_TAGS:
                _store.tags = TagsAPI.fetchTags();
                break;
            default:

        }
    }
}
export default new TagStore();