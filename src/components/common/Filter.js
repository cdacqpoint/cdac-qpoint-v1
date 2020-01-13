import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import {
    Col,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "shards-react";

const FilterDropdown = class FilterDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { open: false };
    }

    toggle() {
        this.setState(prevState => {
            return { open: !prevState.open };
        });
    }

    render() {
        return (
            <Dropdown open={this.state.open} toggle={this.toggle}>
                <DropdownToggle caret theme="transparent">
                    <i className="material-icons text-primary">filter_lists</i>
                    {this.props.selectedFilter.toUpperCase()}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem active={this.props.selectedFilter === "latest"} onClick={() => this.props.handleFilterChange('latest')}>Latest</DropdownItem>
                    <DropdownItem active={this.props.selectedFilter === "top_posts"} onClick={() => this.props.handleFilterChange('top_posts')}>Top Posts</DropdownItem>
                    <DropdownItem active={this.props.selectedFilter === "most_rated"}
                        onClick={() => this.props.handleFilterChange('most_rated')}>Most rated</DropdownItem>
                    <DropdownItem active={this.props.selectedFilter === "top_comments"} onClick={() => this.props.handleFilterChange('top_comments')}>Top comments</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

const QuestionsPerPage = class PerPageDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.handleLimitChange = this.handleLimitChange.bind(this);
        this.state = { open: false };
    }

    toggle() {
        this.setState(prevState => {
            return { open: !prevState.open };
        });
    }

    handleLimitChange(limit) {
        console.log(limit)
        this.props.handleLimitChange(limit)
    }

    render() {
        return (
            <Dropdown open={this.state.open} toggle={this.toggle}>
                <DropdownToggle caret theme="transparent">
                    Questions per Page <span className="text-primary">{this.props.currentPage}</span>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem active={this.props.currentPage === 5} onClick={() => this.handleLimitChange(5)}> 5 </DropdownItem>
                    <DropdownItem active={this.props.currentPage === 10} onClick={() => this.handleLimitChange(10)}>10</DropdownItem>
                    <DropdownItem active={this.props.currentPage === 15} onClick={() => this.handleLimitChange(15)}>15</DropdownItem>
                    <DropdownItem active={this.props.currentPage === 20} onClick={() => this.handleLimitChange(20)}>20</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

const FilterRow = (props) => {
    const { questionsPerPage, selectedFilter, showFilter, showPerPage, className } = props;
    const classes = classNames(
        className,
        "mb-4",
        "mb-sm-0"
    );

    return (
        <Col xs="12" lg="12" className={classes} >
            <div className="qpoint-tools">
                <div className="tool-left">
                    {showFilter && <FilterDropdown selectedFilter={selectedFilter} handleFilterChange={props.handleFilterChange} />}
                </div>
                <div className="tool-right">
                    {showPerPage && <QuestionsPerPage currentPage={questionsPerPage} handleLimitChange={props.handleLimitChange} />}
                </div>
            </div>
        </Col>
    )
};

FilterRow.propTypes = {
    /**
     * Show Filter.
     */
    showFilter: PropTypes.bool,
    /**
     * Show Filter.
     */
    showPerPage: PropTypes.bool,
    questionsPerPage: PropTypes.number,
};
FilterRow.defaultProps = {
    showFilter: true,
    /**
     * Show Filter.
     */
    showPerPage: true,
    questionsPerPage: 10,
};

export default FilterRow;