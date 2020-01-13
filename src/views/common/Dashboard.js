/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    ListGroup,
    ListGroupItem,
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import Filter from "../../components/common/Filter";
import Post from "../../components/dashboard/Posts";
import PostPagination from "../../components/dashboard/PostPagination";
import TotalVarables from "../../components/dashboard/TotalVariables";
import TagList from "../../components/dashboard/TagList";
import { PostStore } from "../../_stores";
import { DashboardActions } from "../../_actions/dashboard.actions";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.getPosts = this.getPosts.bind(this);
        this.state = {
            totalQuestions: 3500,
            totalMembers: 150,
            isLoading: false,
            taglists: [
                {
                    name: "DAC",
                    post_count: 50,
                    "url": "#"

                },
                {
                    name: "DESD",
                    post_count: 20,
                    "url": "#"

                },
                {
                    name: "DBDA",
                    post_count: 2,
                    "url": "#"

                },
                {
                    name: "DIOT",
                    post_count: 15,
                    "url": "#"

                },
                {
                    name: "DSSD",
                    post_count: 60,
                    "url": "#"

                },
                {
                    name: "Others",
                    post_count: 2,
                    "url": "#"

                }
            ],
            PostLists: PostStore.getAll()
        }
    }

    /**
     *
     * Get All Questions
     * @author Sai Krishnan S
     * @memberof Question
     */
    getPosts() {
        console.log("post")
        DashboardActions.fetchQuestions();
        this.setState({
            PostLists: PostStore.getAll(),
        });
    }

    /**
     *
     *
     * @author ALisha Bilquis, Sai krishnan
     * axios mounting hc
     */
    componentDidMount() {
        this.getPosts()
        PostStore.addChangeListener(this.getPosts) // Sai krishnan
    }

    /**
     *
     * @author Sai krishnan
     * @memberof Question
     */
    componentWillUnmount() {
        PostStore.removeChangeListener(this.getPosts) // Sai krishnan
    }

    render() {
        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Questions" subtitle="Forum" className="text-sm-left" />
                </Row>
                <Row className="mb-4">
                    <Filter currentPerPage={10} />
                </Row>
                <Row >
                    {/* Posts */}
                    <Col lg="8" md="8" sm="12" className="mb-4">
                        {this.state.PostLists.map((post, idx) => (
                            <Post key={idx} post={post} />
                        ))}
                        <PostPagination />
                    </Col>
                    {/* Brief Desc */}
                    <Col lg="4" md="4" sm="12" className="mb-4">
                        <Card small className="mb-4 pt-3">
                            <CardBody className="border-bottom text-center">
                                <div className="mb-3 mx-auto">
                                    <TotalVarables total={this.state.totalQuestions} title="Questions" />
                                    <TotalVarables total={this.state.totalMembers} title="Members" />
                                </div>
                                <ListGroup flush>
                                    <ListGroupItem className="px-4 text-center">
                                        <TagList title="Related Categories" taglists={this.state.taglists} />
                                    </ListGroupItem>
                                    <ListGroupItem className="px-4 text-center">
                                        <TagList title="Course tags" taglists={this.state.taglists} />
                                    </ListGroupItem>
                                </ListGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Question;