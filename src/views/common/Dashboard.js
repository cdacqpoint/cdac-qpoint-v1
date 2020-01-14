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

/**
 *
 * @author Sai krishnan S <xicoder96@github.com>
 * @class Question
 * @extends {React.Component}
 */
class Question extends React.Component {
    constructor(props) {
        super(props);
        this.getPosts = this.getPosts.bind(this);
        this.pagenate = this.pagenate.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleLimitChange = this.handleLimitChange.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);
        this.state = {
            totalQuestions: PostStore.totalQuestions,
            totalMembers: 0,
            isLoading: false,
            questionsPerPage: PostStore.getPageLimit(),
            currentPage: PostStore.getCurrentPage(),
            selectedTag: PostStore.getTag(),
            selectedFilter: PostStore.getFilter(),
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
            PostLists: []
        }
    }

    /**
     *
     * Get All Questions
     * @author Sai Krishnan S
     * @memberof Question
     */
    getPosts() {
        this.setState({
            PostLists: PostStore.fetchQuestions(),
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

    handleFilterChange(filter) {
        //Change in filter
        DashboardActions.changeFilter(filter);
        console.log('new filter', filter)
        this.setState({
            selectedFilter: filter,
        });
    }

    handleLimitChange(limit) {
        //Change in limits
        DashboardActions.changeQuestionsPerPage(limit);
        console.log('new limit', limit)
        this.setState({
            questionsPerPage: limit,
        });
    }

    handleTagChange(tag) {
        //Change in Tags
        DashboardActions.changeCourseTags(tag);
        console.log('new tag', tag)
        this.setState({
            selectedTag: tag,
        });
    }

    handleCategoryChange() {
        //Change in category
    }

    pagenate(number) {
        //Paginate

        let nextPage = this.state.questionsPerPage * (number - 1) + 1;
        console.log(nextPage)
        DashboardActions.pagenateQuestions(nextPage);

        this.setState({
            currentPage: nextPage,
        });
    }

    render() {
        let currentNum = Math.floor(this.state.currentPage / this.state.questionsPerPage);
        currentNum++;
        console.log("current num:", currentNum)
        console.log("current page", this.state.currentPage)
        console.log("questions per page", this.state.questionsPerPage)
        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Questions" subtitle="Forum" className="text-sm-left" />
                </Row>
                <Row className="mb-4">
                    <Filter selectedFilter={this.state.selectedFilter} questionsPerPage={this.state.questionsPerPage} handleFilterChange={this.handleFilterChange} handleLimitChange={this.handleLimitChange} />
                </Row>
                <Row >
                    {/* Posts */}
                    <Col lg="8" md="8" sm="12" className="mb-4">
                        {this.state.PostLists.map((post) => (
                            <Post key={post._id} post={post} />
                        ))}
                       {this.state.totalQuestions !== 0 && <PostPagination limit={this.state.questionsPerPage} total={this.state.totalQuestions} num={currentNum} pagenate={this.pagenate} />}
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
                                        <TagList title="Course tags" taglists={this.state.taglists} selected={this.state.selectedTag} handleClick={this.handleTagChange}/>
                                    </ListGroupItem>
                                    {/* <ListGroupItem className="px-4 text-center">
                                        <TagList title="Related Categories" taglists={this.state.taglists} />
                                    </ListGroupItem> */}
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