import Dispatcher from "../flux/dispatcher";
import { EventEmitter } from 'events';
import Constants from "../_constants/app.constants";
import { PostsAPI } from "../_apiutils/posts.API";

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

async function fetchSingleQuestion(id) {
    const questionDetail = await PostsAPI.getQuestionDetails(id);
    if (questionDetail === null) {
        PostStore.isLoading = false;
        PostStore.hasError = true;
        PostStore.error = "No Question found!";
    }
    return questionDetail;
}

class PostStore extends EventEmitter {
    constructor() {
        super();
        this.isLoading = false;
        this.hasError = false;
        this.error = null;
        this.totalQuestions = 0;
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

    async getQuestionDetails() {
        _store.selectedQuestionDetails = await fetchSingleQuestion(_store._selectedQuestionId);
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
        this.emit(Constants.CHANGE);
    }


    filterPosts(filter) {
        //Filter By Posts
        this.isLoading = true;
        _store.filter = filter;
        this.emit(Constants.CHANGE);
    }

    async fetchQuestions() {
        let { filter, category, tag, limit, page } = _store;
        let response = await PostsAPI.fetchQuestions(filter, page, limit, tag, category)
        console.log(response)
        if (typeof response.status !== "undefined" && response.status === true) {
            _store.posts = response.data.posts;
            this.totalQuestions = response.data.posts_count;
        } else {
            _store.posts = [];
            this.totalQuestions = 0;
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

    async getRelatedQuestions() {
        let questions = [];
        if (_store._selectedQuestionId !== "") {
            questions = await PostsAPI.getRelatedQuestions(_store._selectedQuestionId);
        }
        console.log(questions);
        return questions;
    }

    fetchQuestionDetails(id) {
        console.log(2, " => fetchQuestionDetails")
        _store._selectedQuestionId = id;
        //post api willbe here
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

    async upvoteQuestion(id) {
        let upvoted_questions = JSON.parse(localStorage.getItem('upvoted_questions')) || [];
        if (!upvoted_questions.includes(id)) {
            let response = await PostsAPI.updateUpvote(id)
            if (response.status === false) {
                this.error = response.data;
            }
            upvoted_questions.push(id);
            localStorage.setItem('upvoted_questions', JSON.stringify(upvoted_questions));
            this.emit(Constants.CHANGE);
        }
    }
    async searchedQuestions(keyword) {
        this.isLoading = false;
        _store.searchedQuestions = PostsAPI.searchQuestions(keyword);
        this.emit(Constants.CHANGE);
    }

    registerToActions(payload) {
        switch (payload.actionType) {
            case Constants.FETCH_QUESTIONS:
                this.fetchQuestions();
                break;
            case Constants.FETCH_QUESTION_DETAILS:
                this.fetchQuestionDetails(payload.questionId);
                break;
            case Constants.UPVOTE_POST:
                this.upvoteQuestion(payload.id);
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
                this.searchedQuestions(payload.keyword);
                break;
            default:
                return _store;
        }
    }
}
export default new PostStore();
