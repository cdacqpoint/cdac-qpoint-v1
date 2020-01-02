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
        this.state = {
            id: null,
            details: {
                title: "",
                desc: "",
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
     *Lifecycle method
     *
     * @memberof ViewQuestion
     */
    componentDidMount() {
        //Mount with service call
        const { id } = this.props.match.params; //useParams();
        const postDetails = {//servicecall.getPost(id).data; this is where service call goes
            title: "How do I read / convert an InputStream into a String in Java?",
            desc: " <p>If you have a java.io.InputStream object, how should you process that object and produce a String?</p><p>Suppose I have an InputStream that contains text data, and I want to convertit to a String, so for example I can write that to a log file.</p><p>What is the easiest way to take the InputStream and convert it to a String?</p>",
            image: "https://picsum.photos/1920/1080",
            tag: "DAC",
            tagUrl: "/tagged/DAC/questions",
            category: [
                {
                    name: "java",
                    url: "/categorized/java/questions"
                },
                {
                    name: "io",
                    url: "/categorized/io/questions"
                },
                {
                    name: "stream",
                    url: "/categorized/stream/questions"
                },
                {
                    name: "inputstream",
                    url: "/categorized/inputstream/questions"
                },
            ],
            dateCreated: "1 Jan 2020",
            activeTimeAgo: "2 days ago",
            askedTimeAgo: "2 days ago",
            upvotes: 300,
            upvoteUrl: `vote/${id}/question`,
            name: "Anonymous User",
            avatarUrl: require("../../images/avatars/noimage.png"),
            answerCount: 23,
            editUrl: "#",
            userUpvoted: false
        };
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
            id: id,
            details: postDetails,
            comments: commentDetails,
            relatedQuestions: relatedQuestionsDetails,
            hotQuestions: hotQuestionsDetails,
            showMoreRelatedUrl: "#",
            showMoreHotQuestionsUrl: "#"
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

export default ViewQuestion;