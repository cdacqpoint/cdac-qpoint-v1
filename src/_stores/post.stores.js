import Dispatcher from "../flux/dispatcher";
import { EventEmitter } from 'events';
import Constants from "../_constants/app.constants";
import { PostsAPI } from "../_dummyApis/posts.API";

let _store = {
    posts: [],
    filter: 'latest',
    category: null,
    tag: null,
    _selectedQuestionId: "",
    selectedQuestionDetails: null,
    limit: 10,
    searchedQuestions: [],
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

    getSearchedQuestions() {
        //Get Current Page
        return _store.searchedQuestions;
    }

    getSelectedQuestionDetails() {
        //Get Current Page
        return _store.selectedQuestionDetails;
    }

    _getSelectedQuestionId() {
        //Get Current Page
        return _store._selectedQuestionId;
    }

    getPageLimit() {
        //Get Page Limit
        return _store.limit;
    }

    getQuestionDetails() {
        //Get Question Details
        return _store.selectedQuestionDetails;
    }

    _getQuestionId() {
        //Get Question Id
        return _store._selectedQuestionId;
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

    /**
     *
     * Create Post
     * @param {*} data
     * @memberof PostStore
     */
    createPost(data) {
        try {
            const response = PostsAPI.createQuestion(data)
            if (response.status === true) {
                this.emit(Constants.CHANGE);
            } else {
                this.isLoading = false;
                this.hasError = true;
                this.error = response.data;
            }
        } catch (error) {
            console.log("Error On Post Creation:", error)
            throw error
        }
    }

    fetchQuestionDetails(id) {
        //post api willbe here
        const questionDetail = PostsAPI.getQuestionDetails(id);
        if (questionDetail === null) {
            this.isLoading = false;
            this.hasError = true;
            this.error = "No Question found!";
        }
        _store._selectedQuestionId = id;
        _store.selectedQuestionDetails = questionDetail;
        this.emit(Constants.CHANGE);
    }

    addChangeListener(callback) {
        this.on(Constants.CHANGE, callback);
        console.log("Post store listeners:", this.listenerCount(Constants.CHANGE))
    }

    removeChangeListener(callback) {
        this.removeListener(Constants.CHANGE, callback);
        console.log("Post store listeners:", this.listenerCount(Constants.CHANGE))
    }

    registerToActions(payload) {
        switch (payload.actionType) {
            case Constants.FETCH_QUESTIONS:
                this.fetchQuestions();
                break;
            case Constants.FETCH_QUESTION_DETAILS:
                this.fetchQuestionDetails(payload.questionId);
                break;
            case Constants.CREATE_QUESTION:
                this.createPost(payload.data);
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
                this.changePageLimit(payload.limit)
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
            case Constants.SEARCH_QUESTIONS:
                console.log(payload.keyword, PostsAPI.searchQuestions(payload.keyword))
                this.isLoading = false;
                _store.searchedQuestions = PostsAPI.searchQuestions(payload.keyword);
                this.emit(Constants.CHANGE);
                break;
            default:
                return _store;
        }
    }
}
export default new PostStore();
