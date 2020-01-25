import Dispatcher from "../flux/dispatcher";
import { EventEmitter } from 'events';
import Constants from "../_constants/app.constants";
import { CategoriesAPI } from "../_apiutils/categoriesAPI";

let _store = {

    categories: [],
    keyword: "",
    offset: 0,
    limit: 32
};

async function fetchCategories() {
    const { keyword, offset, limit } = _store;
    console.log("DhiraJ =>",keyword, offset, limit)
    _store.categories = await CategoriesAPI.fetchCategories({ keyword, offset, limit });
}

class CategoryStore extends EventEmitter {
    constructor() {
        super();
        this.registerToActions = this.registerToActions.bind(this);
        this.search = this.search.bind(this);
        this.totalCategories = 0;
        this.dispatchToken = Dispatcher.register(this.registerToActions.bind(this));
    }
    search(keyword) {
        _store.keyword = keyword;
        this.emit(Constants.CHANGE);
    }
    async getCategories() {
        await fetchCategories()
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

    async registerToActions(payload) {
        switch (payload.actionType) {
            case Constants.FETCH_CATEGORIES:
                await fetchCategories();
                this.emit(Constants.CHANGE);
                break;
            case Constants.SEARCH_CATEGORIES:
                console.log(payload)
                this.search(payload.keyword);
                break;
            default:

        }
    }
}
export default new CategoryStore();