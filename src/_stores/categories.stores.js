import Dispatcher from "../flux/dispatcher";
import { EventEmitter } from 'events';
import Constants from "../_constants/app.constants";
import { CategoriesAPI } from "../_dummyApis/categoriesAPI";

let _store = {

    categories: CategoriesAPI.fetchCategories(),
};

class CategoryStore extends EventEmitter {
    constructor() {
        super();
        this.registerToActions = this.registerToActions.bind(this);
        this.dispatchToken = Dispatcher.register(this.registerToActions.bind(this));
    }

    getCategories() {
        console.log(_store.categories);
        return _store.categories;
    }

    addChangeListener(callback) {
        this.on(Constants.CHANGE, callback);
        console.log("Categories listeners:", this.listenerCount(Constants.CHANGE))
    }

    removeChangeListener(callback) {
        this.removeListener(Constants.CHANGE, callback);
        console.log("Categories listeners:", this.listenerCount(Constants.CHANGE))
    }

    registerToActions(payload) {
        switch (payload.actionType) {
            case Constants.FETCH_CATEGORIES:
                _store.categories=CategoriesAPI.fetchCategories();
                this.emit(Constants.CHANGE);
                break;
            default:

        }
    }
}
export default new CategoryStore();