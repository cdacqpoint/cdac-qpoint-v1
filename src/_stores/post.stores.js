import Dispatcher from "../flux/dispatcher";
import { EventEmitter } from 'events';
import Constants from "../_constants/app.constants";
import { PostsAPI } from "../_dummyApis/posts.API";

let _store = {
    posts: [],
    filter: null,
    category: null,
    tag: null,
    limit: 10,
    page: 0
};

class PostStore extends EventEmitter {
    constructor() {
        super();
        this.isLoading = false;
        this.hasError = false;
        this.error = null;
        this.totalQuestions = PostsAPI.totalQuestions();
        this.registerToActions = this.registerToActions.bind(this);
        this.dispatchToken = Dispatcher.register(this.registerToActions.bind(this));
    }

    getFilter() {
        //Get Filter
        return _store.filter;
    }

    getCategory() {
        //Get Category
        return _store.category;
    }

    getAll() {
        //Get Posts
        return _store.posts;
    }

    getTag() {
        //Get Tags
        return _store.tag;
    }

    getCurrentPage() {
        //Get Current Page
        return _store.page;
    }

    getPageLimit() {
        //Get Page Limit
        return _store.limit;
    }

    filterByCategoryPosts(category) {
        //filter
        this.isLoading = true;
        _store.category = category;
        this.emit(Constants.CHANGE);
    }

    filterByTags(tag) {
        //filter
        this.isLoading = true;
        _store.tag = tag;
        this.emit(Constants.CHANGE);
    }

    changePageLimit(limit) {
        //filter
        this.isLoading = true;
        _store.limit = limit;
        this.emit(Constants.CHANGE);
    }

    paginate(page) {
        //Paginate Posts
        this.isLoading = true;
        page = page === 1 ? 0 : page;
        _store.page = page;
        console.log("Im In")
        this.emit(Constants.CHANGE);
    }


    filterPosts(filter) {
        //Filter By Posts
        this.isLoading = true;
        _store.filter = filter;
        this.emit(Constants.CHANGE);
    }

    fetchQuestions() {
        console.log("Store", _store)
        let { filter, category, tag, limit, page } = _store;
        let response = PostsAPI.fetchQuestions(filter, page, limit, tag, category)
        if (response.status === true) {
            this.isLoading = false;
            this.hasError = false;
            _store.posts = response.data;
        } else {
            this.isLoading = false;
            this.hasError = true;
            this.error = response.data;
        }
        return _store.posts;
    }

    addChangeListener(callback) {
        this.on(Constants.CHANGE, callback);
        console.log("listeners:", this.listenerCount(Constants.CHANGE))
    }

    removeChangeListener(callback) {
        this.removeListener(Constants.CHANGE, callback);
        console.log("listeners:", this.listenerCount(Constants.CHANGE))
    }

    registerToActions(payload) {
        switch (payload.actionType) {
            case Constants.FETCH_QUESTIONS:
                this.fetchQuestions();
                break;
            case Constants.RECIEVE_QUESTIONS:
                this.isLoading = false;
                this.hasError = false;
                _store.posts = payload.data;
                this.emit(Constants.CHANGE);
                break;
            case Constants.CHANGE_FILTER:
                this.filterPosts(payload.filter)
                break;
            case Constants.CHANGE_CATEGORIES:
                this.filterByCategoryPosts(payload.category)
                break;
            case Constants.CHANGE_COURSE_TAGS:
                this.filterByTags(payload.tag)
                break;
            case Constants.CHANGE_QUESTION_PER_PAGE:
                this.changePageLimit()
                break;
            case Constants.PAGENATE_QUESTIONS:
                this.paginate(payload.page)
                break;
            case Constants.FETCH_QUESTIONS_ERROR:
                this.isLoading = false;
                this.hasError = true;
                this.error = payload.errors;
                this.emit(Constants.CHANGE);
                break;
            default:
        }
    }
}
export default new PostStore();
