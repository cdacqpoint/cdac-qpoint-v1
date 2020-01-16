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
import { PostStore } from "../../_stores";
import { ViewQuestionActions } from "../../_actions/view_question.actions";
import postStores from "../../_stores/post.stores";
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
        this.loadData = this.loadData.bind(this);
        this.state = {
            id: null,
            details: {
                title: "",
                desc: "",
                hasImage: true,
                image: "",
                tag: "",
                tagUrl: "",
                category: [],
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
            showMoreRelatedUrl: "",
            showMoreHotQuestionsUrl: "",
            comments: [],
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
        console.log(details)
        if (details === null) {
            this.props.history.push('/questions')
        } else {
            this.setState({
                id: postStores._getSelectedQuestionId(),
                details: details,
            });
        }
    }

    loadData(id){
        ViewQuestionActions.fetchQuestionDetails(id);
        this.getQuestionDetail();
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
        PostStore.addChangeListener(this.getQuestionDetail) // Sai krishnan
        const commentDetails = [
            {
                commentId: "12s3vc4rqrf34",
                commentDesc: " <p>If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app to ensure that npx always uses the latest version.</p><p>Use either one of the below commands:</p><ul><li>npx create-react-app my-app</li><li>npm init react-app my-app</li><li>yarn create react-app my-app</li></ul>",
                commentedTimeAgo: "2 days ago",
                upvotesCount: 10,
                upvoteUrl: `vote/12s3vc4rqrf34/comment`,
                editUrl: "#",
                dateCreated: "2 Jan 2020",
                name: "Anonymous User",
                avatarUrl: require("../../images/avatars/noimage.png"),
                userUpvoted: false
            },
        ];//servicecall.getComments(id).data;
        const relatedQuestionsDetails = [
            {
                title: "Difference between npx and npm?",
                voteCount: 125,
                questionUrl: "#"
            },
            {
                title: "Can't uninstall global npm packages after installing nvm.",
                voteCount: 15,
                questionUrl: "#"
            },
            {
                title: "create-react-app: template not provided using create-react-app error/start script missing (even after removing globally installed create-react-app)",
                voteCount: 35,
                questionUrl: "#"
            },
            {
                title: "Unable to import CSS module in a react app",
                voteCount: 0,
                questionUrl: "#"
            },
            {
                title: "Difference between npx and npm?",
                voteCount: 125,
                questionUrl: "#"
            },
        ]
        const hotQuestionsDetails = [
            {
                title: "Difference between npx and npm?",
                voteCount: 125,
                questionUrl: "#"
            },
            {
                title: "Can't uninstall global npm packages after installing nvm.",
                voteCount: 15,
                questionUrl: "#"
            },
            {
                title: "create-react-app: template not provided using create-react-app error/start script missing (even after removing globally installed create-react-app)",
                voteCount: 35,
                questionUrl: "#"
            },
            {
                title: "Unable to import CSS module in a react app",
                voteCount: 0,
                questionUrl: "#"
            },
            {
                title: "Difference between npx and npm?",
                voteCount: 125,
                questionUrl: "#"
            },
        ]
        this.setState({
            comments: commentDetails,
            relatedQuestions: relatedQuestionsDetails,
            hotQuestions: hotQuestionsDetails,
            showMoreRelatedUrl: "#",
            showMoreHotQuestionsUrl: "#"
        });
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
        PostStore.removeChangeListener(this.getQuestionDetail) // Sai krishnan
    }

    /**
     * Render Question View 
     *
     * @returns
     * @memberof ViewQuestion
     */
    render() {
        const details = this.state.details;
        return (
            <Container fluid className="main-content-container px-4 pb-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <QuestionTitle title={details.title} subtitle="Forum > Question" className="text-sm-left" askedTimeAgo={details.askedTimeAgo} activeTimeAgo={details.activeTimeAgo} />
                </Row>
                <Row noGutters>
                    <Col lg="8" sm="12" className="main-bar" role="main">
                        <QuestionDetails details={details} />
                        <Comments answerCount={details.answerCount} answers={this.state.comments} />
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