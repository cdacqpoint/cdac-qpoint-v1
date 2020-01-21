import Dispatcher from "../flux/dispatcher";
import { EventEmitter } from 'events';
import Constants from "../_constants/app.constants";
import Api from "../_dummyApis/comments.API";

let _store = {
    comments: [],
    postId: "",
    totalCount: 0,
    filter: 'latest',
    limit: 10,
    page: 0
};

/**
 *Fetch Comments
 *
 */
function fetchApi() {
    let data = Api.fetchComments({ postId: _store.postId, filter: _store.filter, limit: _store.limit, offset: _store.page })
    console.log(data)
    _store.comments = data.comments;
    _store.totalCount = data.comments_count;
}

/**
 * Comment Store
 * @author Sai Krishnan S <xicoder96@github.com>
 * @class CommentStore
 * @extends {EventEmitter}
 */
class CommentStore extends EventEmitter {
    constructor() {
        super();
        this.isLoading = false;
        this.hasError = false;
        this.error = null;
        this.registerToActions = this.registerToActions.bind(this);
        this.dispatchToken = Dispatcher.register(this.registerToActions.bind(this));
    }

    getComments() {
        fetchApi();
        return _store.comments;
    }

    getFilter() {
        return _store.filter;
    }

    getLimit() {
        return _store.limit;
    }

    getPage() {
        return _store.page;
    }

    getTotalCount() {
        return _store.totalCount;
    }

    fetchComments(postId) {
        console.log("inside fetch id", postId)
        _store.postId = postId;
        this.emit(Constants.CHANGE);
    }

    upvoteComment(id) {
        let upvoted_comments = JSON.parse(localStorage.getItem('upvoted_comments')) || [];
        if (!upvoted_comments.includes(id)) {
            let response = Api.updateUpvote(id)
            if (response.status === false) {
                this.error = response.data;
            }
            upvoted_comments.push(id);
            console.log('added upvoted',upvoted_comments);
            localStorage.setItem('upvoted_comments', JSON.stringify(upvoted_comments));
            this.emit(Constants.CHANGE);
        }
    }

    addComment(desc) {
        console.log(desc)
        let response = Api.createComment({ desc, postId: _store.postId })
        console.log("response", response);
        if (response.status === false) {
            this.hasError = true;
            this.error = response.data;
        }
        this.emit(Constants.CHANGE);
    }

    changeLimit(limit) {
        _store.limit = limit;
        this.emit(Constants.CHANGE);
    }

    changePage(page) {
        _store.page = page;
        this.emit(Constants.CHANGE);
    }

    addChangeListener(callback) {
        this.on(Constants.CHANGE, callback);
        console.log("Comment store listeners:", this.listenerCount(Constants.CHANGE))
    }

    removeChangeListener(callback) {
        this.removeListener(Constants.CHANGE, callback);
        console.log("Comment store listeners:", this.listenerCount(Constants.CHANGE))
    }

    registerToActions(payload) {
        switch (payload.actionType) {
            case Constants.FETCH_COMMENTS:
                this.fetchComments(payload.postId);
                break;
            case Constants.ADD_COMMENT:
                console.log("payload", payload)
                this.addComment(payload.data);
                break;
            case Constants.CHANGE_COMMENTS_PER_PAGE:
                this.changeLimit(payload.limit);
                break;
            case Constants.PAGENATE_COMMENT:
                this.changePage(payload.page);
                break;
            case Constants.UPVOTE_COMMENT:
                this.upvoteComment(payload.id);
                break;
            default:
                return;
        }
    }
}
export default new CommentStore();