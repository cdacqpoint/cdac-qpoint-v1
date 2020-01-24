/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
//import { useParams } from "react-router";
import {
    Container,
    Row,
    Col
} from "shards-react";
import QuestionTitle from "../../components/view-question/QuestionTitle";
import QuestionDetails from "../../components/view-question/QuestionDetails";
import Sidebar from "../../components/view-question/Sidebar";
import Comments from "../../components/view-question/Comments";
import CommentForm from "../../components/view-question/CommentForm";
import { PostStore, CommentStore } from "../../_stores";
import { ViewQuestionActions } from "../../_actions/view_question.actions";
import {
    withRouter
} from 'react-router-dom'


/**
 *
 *
 * @author Sai Krishnan S <xicoder96@github.com>
 * @class ViewQuestion
 * @extends {React.Component}
 */
class ViewQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.getQuestionDetail = this.getQuestionDetail.bind(this);
        this.getComments = this.getComments.bind(this);
        this.setData = this.setData.bind(this);
        this.loadData = this.loadData.bind(this);
        this.pagenate = this.pagenate.bind(this);
        this.handleCommentUpvotes = this.handleCommentUpvotes.bind(this);
        this.handleQuestionUpvotes = this.handleQuestionUpvotes.bind(this);
        this.state = {
            id: null,
            details: {
                title: "",
                desc: "",
                hasImage: true,
                image: "",
                courseTag: null,
                tagUrl: "",
                categories: [],
                dateCreated: "",
                activeTimeAgo: "",
                askedTimeAgo: "",
                upvotes: 0,
                upvoteUrl: "",
                name: "",
                email: "",
                avatarUrl: "",
                answerCount: 0,
                editUrl: "",
                userUpvoted: false
            },
            showMoreRelatedUrl: "#",
            showMoreHotQuestionsUrl: "#",
            comments: [],
            commentsCount: 0,
            commentsPage: 0,
            commentsLimit: 10,
            relatedQuestions: [],
            hotQuestions: []
        }
    }

    /**
     *
     *
     * @memberof ViewQuestion
     */
    getQuestionDetail() {
        const details = PostStore.getQuestionDetails();
        if (details === null) {
            this.props.history.push('/questions')
        } else {
            this.setState({
                id: PostStore._getSelectedQuestionId(),
                details: details,
            });
        }
    }

    /**
     *
     * Get All Comments
     * @memberof ViewQuestion
     */
    getComments() {
        const comments = CommentStore.getComments();
        this.setState({
            comments: comments,
            commentsCount: CommentStore.getTotalCount(),
            commentsPage:CommentStore.getPage(),
            commentsLimit:CommentStore.getLimit()
        });
    }

    /**
     *
     * Set All data required
     * @memberof ViewQuestion
     */
    async setData() {
        const details = await PostStore.getQuestionDetails();
        const comments = await CommentStore.getComments();
        const commentsCount = await CommentStore.getTotalCount();
        const relatedQuestions = await PostStore.getRelatedQuestions();
        const hotQuestions = await PostStore.getHotQuestions();
        if (details === null) {
            this.props.history.push('/questions')
        } else {
            this.setState({
                id: PostStore._getSelectedQuestionId(),
                details: details,
                comments: comments,
                commentsCount: commentsCount,
                commentsPage:CommentStore.getPage(),
                commentsLimit:CommentStore.getLimit(),
                relatedQuestions: relatedQuestions,
                hotQuestions: hotQuestions,
            });
        }
    }

    /**
     *
     * Load All data
     * @param {*} id
     * @memberof ViewQuestion
     */
    loadData(id) {
        ViewQuestionActions.fetchQuestionDetails(id);
        ViewQuestionActions.fetchComments(id);
        this.setData();
    }

    /**
     *Lifecycle method
     *
     * @memberof ViewQuestion
     */
    componentDidMount() {
        //Mount with service call
        const { id } = this.props.match.params; //useParams();
        this.loadData(id);
        PostStore.addChangeListener(this.setData) // Sai krishnan
        CommentStore.addChangeListener(this.setData) // Sai krishnan
    }

    /**
     * To be updated
     * @author Sai krishnan
     * @memberof ViewQuestion
     */
    componentDidUpdate() {
        const { id } = this.props.match.params; //useParams();
        if (id !== this.state.id) {
            this.loadData(id);
        }
    }

    /**
     *
     * @author Sai krishnan
     * @memberof ViewQuestion
     */
    componentWillUnmount() {
        PostStore.removeChangeListener(this.setData) // Sai krishnan
        CommentStore.removeChangeListener(this.setData) // Sai krishnan
    }

    /**
     *
     * @author Sai krishnan
     * @param {*} commentId
     * @memberof ViewQuestion
     */
    handleCommentUpvotes(commentId) {
        CommentStore.upvoteComment(commentId)
    }

    /**
     *
     * @author Sai krishnan
     * @param {*} commentId
     * @memberof ViewQuestion
     */
    handleQuestionUpvotes(commentId) {
        ViewQuestionActions.upvotePost(commentId)
    }

    pagenate(number) {
        //Paginate

        let nextPage = this.state.commentsLimit * (number - 1) + 1;
        console.log("nextPage in pagenate",nextPage)
        ViewQuestionActions.paginateComments(nextPage);

        this.setState({
            currentPage: nextPage,
        });
    }


    /**
     * Render Question View 
     *
     * @returns
     * @memberof ViewQuestion
     */
    render() {
        const details = this.state.details;
        let currentNum = Math.floor(this.state.commentsPage / this.state.commentsLimit);
        currentNum++;
        console.log("current num:", currentNum)
        console.log("commentsPage", this.state.commentsPage)
        console.log("commentsLimit", this.state.commentsLimit)
        return (
            <Container fluid className="main-content-container px-4 pb-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <QuestionTitle title={details.title} subtitle="Forum > Question" className="text-sm-left" askedTimeAgo={details.askedTimeAgo} activeTimeAgo={details.activeTimeAgo} />
                </Row>
                <Row noGutters>
                    <Col lg="8" sm="12" className="main-bar" role="main">
                        <QuestionDetails details={details} handleUpvotes={this.handleQuestionUpvotes} />
                        <Comments answerCount={this.state.commentsCount} answers={this.state.comments} handleUpvotes={this.handleCommentUpvotes}
                            limit={this.state.commentsLimit} total={this.state.commentsCount} num={currentNum} pagenate={this.pagenate}
                        />
                        <CommentForm />
                    </Col>
                    <Col lg="4" sm="12" className="side-bar" role="complementary">
                        <Sidebar title="Related" questions={this.state.relatedQuestions} moreUrl={this.state.showMoreRelatedUrl} theme="primary" />
                        <hr />
                        <Sidebar title="Hot Network Questions" theme="info" questions={this.state.hotQuestions} moreUrl={this.state.showMoreHotQuestionsUrl} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(ViewQuestion);