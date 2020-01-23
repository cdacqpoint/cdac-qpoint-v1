import React from "react";
import {
    Container,
    Row,
    Col
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import { TagStore } from "../../_stores";
import { TagAction } from "../../_actions/tags.actions"
/**
 * Tags for questions
 * @author Sai Krishnan S<xicoder96@github.com>
 * @class Tags
 * @extends {React.Component}
 */
class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.getAllTags = this.getAllTags.bind(this);
        this.state = {
            filterByTag: "",
            TagsList: []
        }
    }

    getAllTags = async () => {
        TagAction.fetchTags();
        const tags = await TagStore.getTags();
        console.log(tags)
        this.setState({
            TagsList: tags,
        });
    }


    componentDidMount() {
        this.getAllTags()
        TagStore.addChangeListener(this.getAllTags) // dhiraj chordiya

    }

    componentWillUnmount() {
        TagStore.removeChangeListener(this.getAllTags) //dhiraj chordiya
    }


    handleChange = (e) => {
        this.setState({
            filterByTag: e.target.value
        })
    }

    render() {
        //Filtered Tags
        let filteredTags = this.state.TagsList;
        //Search Tags
        let SearchTag = this.state.filterByTag.toUpperCase().trim();
        //Check whether the user entered string is alpha or not
        let isAlpha = new RegExp(/^[A-Z]+$/i).test(SearchTag)
        if (SearchTag !== "" && isAlpha === true)
            filteredTags = filteredTags.filter(tag => {
                return new RegExp('^.*' + SearchTag.replace(/\*./g, '.*') + '.*$').test(tag.name)
            });
        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Course Tags" subtitle="Forum" className="text-sm-left" />
                </Row>
                <Row noGutters className="page-header py-4">
                    {/* Tag */}
                    <Col lg="12" className="mb-4">
                        <small className="text-muted">A tag is a keyword or label that categorizes your question with
                                    CDAC Courses and similar questions. Using the right tags makes it easier for others to find and answer your
                                question.
                        </small>
                        {/* Filter */}
                        <Row noGutters className="my-4">
                            <Col lg="4" md="4" sm="12" xs="12">
                                <div className="input-group input-group-seamless">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fas fa-search"></i>
                                        </div>
                                    </div>
                                    <input className="tag-search form-control" type="text"
                                        placeholder="Filter By Tag..." aria-label="Search"
                                        onChange={this.handleChange} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <div className="w-100 mb-4">
                        <Container fluid >
                            <Row noGutters>
                                {filteredTags.map((tags, idx) => (
                                    <Col lg="3" md="3" sm="12" xs="12" className="mb-4 px-2" key={idx}>
                                        <div className="text-sm-left my-2">
                                            <a href={tags.url} className="badge badge-primary">{tags.name}</a><span
                                                className="text-muted mx-1">x{tags.totalCount}</span>
                                        </div>
                                        <div className="text-sm-left tag-desc my-2 text-muted py-2">
                                            <p>{tags.desc}</p>
                                        </div>
                                        <div className="text-sm-left my-4">
                                            <p>{tags.todaysCount} asked today, {tags.weekCount} this week</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>
                </Row>
            </Container>
        )
    }
}

export default Tags;