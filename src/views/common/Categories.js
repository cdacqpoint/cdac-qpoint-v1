import React from "react";
import {
    Container,
    Row,
    Col
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import { CategoryStore } from "../../_stores";
import { CategoriesAction } from "../../_actions/categories.action"

/**
 * 
 * @author Alisha Bilquis
 * @class Categories
 * 
 */
class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.getAllCategories = this.getAllCategories.bind(this);
        this.state = {
            filterByCategory: "",
            CategoriesList: []
        }
    }

    getAllCategories = () => {
        CategoriesAction.fetchCategories();
        console.log(CategoriesAction.fetchCategories());
        const categories = CategoryStore.getCategories();
        console.log(categories)
        this.setState({
            CategoriesList: categories,
        });
    }

    componentDidMount() {
        this.getAllCategories()
        CategoryStore.addChangeListener(this.getAllCategories)
    }

    componentWillUnmount() {
        CategoryStore.removeChangeListener(this.getAllCategories) //dhiraj chordiya
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
                            <a className="page-link" href={defaultUrl} tabIndex="-1" aria-disabled="true">Previous</a>
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