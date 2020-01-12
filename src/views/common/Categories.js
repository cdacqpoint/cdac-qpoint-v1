import React from "react";
import {
    Container,
    Row,
    Col
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";

/**
 * 
 * @author Alisha Bilquis
 * @class Categories
 * 
 */
class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterByCategory: "",
            CategoriesList: []
        }
    }

    componentDidMount() {
        this.setState({
            CategoriesList: [
                {
                    name: "JAVA",
                    url: "../categories/java/questions"
                },
                {
                    name: "Angular",
                    url: "../categories/angular/questions"
                },
                {
                    name: "PHP",
                    url: "../categories/php/questions",
                },
                {
                    name: "asp.NET",
                    url: "../categories/asp.net/questions",
                },
                {
                    name: "C++",
                    url: "../categories/c++/questions",
                },
                {
                    name: "C#",
                    url: "../categories/c#/questions",
                },
                {
                    name: "React",
                    url: "../categories/react/questions",
                },
                {
                    name: "JavaScript",
                    url: "../categories/javascript/questions",
                },
                {
                    name: "HTML",
                    url: "../categories/html/questions",
                },
                {
                    name: "CSS",
                    url: "../categories/css/questions",
                },
                {
                    name: "BootStrap",
                    url: "../categories/bootstrap/questions",
                },
                {
                    name: "SQL",
                    url: "../categories/sql/questions",
                },
                {
                    name: "MongoDB",
                    url: "../categories/mongodb/questions",
                },
                {
                    name: "C",
                    url: "../categories/c/questions",
                },
                {
                    name: "Web Programming",
                    url: "../categories/awp/questions",
                },
                {
                    name: "MEAN",
                    url: "../categories/mean/questions",
                },
                {
                    name: "MERN",
                    url: "../categories/mern/questions",
                },
                {
                    name: "Operating System",
                    url: "../categories/os/questions",
                },
            ]
        })
    }

    handleChange = (e) => {
        this.setState({
            filterByCategory: e.target.value
        })
    }

    render() {
        //Filtered Categories
        let filteredCategories = this.state.CategoriesList;
        //Search Categories
        let SearchCategory = this.state.filterByCategory.toUpperCase().trim();
        //Check whether the user entered string is alpha or not
        let isAlpha = new RegExp(/^[A-Z]+$/i).test(SearchCategory)
        if (SearchCategory !== "" && isAlpha === true)
            filteredCategories = filteredCategories.filter(category =>{
               return new RegExp('^.*' + SearchCategory.replace(/\*./g, '.*') + '.*$').test(category.name)
            });
        const defaultUrl = "#";
        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Categories" subtitle="Forum" className="text-sm-left" />
                </Row>
                <Row noGutters className="page-header py-4">
                    {/* Category */}
                    <Col lg="12" className="mb-4">
                        <small className="text-muted">A category is a keyword or label that categorizes your question with
                                    CDAC Courses and similar questions. Using the right categories makes it easier for others to find and answer your
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
                                    <input className="category-search form-control" type="text"
                                        placeholder="Filter By Category..." aria-label="Search"
                                        onChange={this.handleChange} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <div className="w-100 mb-4">
                        <Container fluid >
                            <Row noGutters>
                                {filteredCategories.map((categories, idx) => (
                                    <Col lg="3" md="3" sm="12" xs="12" className="mb-4 px-2" key={idx}>
                                        <div className="text-sm-left my-2">
                                            <a href={categories.url} className="badge badge-primary">{categories.name}</a><span
                                                className="text-muted mx-1">x{categories.totalCount}</span>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>
                </Row>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                        <li className="page-item disabled">
                            <a className="page-link" href={defaultUrl} tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href={defaultUrl}>1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href={defaultUrl}>2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href={defaultUrl}>3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href={defaultUrl}>Next</a>
                        </li>
                    </ul>
                </nav>
            </Container>
        )
    }
}

export default Categories;