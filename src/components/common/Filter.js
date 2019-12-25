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
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Latest</DropdownItem>
                    <DropdownItem>Top Posts</DropdownItem>
                    <DropdownItem>Most rated</DropdownItem>
                    <DropdownItem>Top comments</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

const QuestionsPerPage = class PerPageDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.changeCurrentPage = this.changeCurrentPage.bind(this);
        this.state = { open: false,currentPage: this.props.currentPage };
    }

    toggle() {
        this.setState(prevState => {
            return { open: !prevState.open };
        });
    }

    changeCurrentPage(newLimit){
        this.setState(() => {
            return { currentPage: newLimit };
        });
    }

    render() {
        return (
            <Dropdown open={this.state.open} toggle={this.toggle}>
                <DropdownToggle caret theme="transparent">
                  Questions per Page <span className="text-primary">{this.state.currentPage}</span>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem active={ this.state.currentPage === 5 ? true : false}> 5 </DropdownItem>
                    <DropdownItem active={ this.state.currentPage === 10 ? true : false}>10</DropdownItem>
                    <DropdownItem active={ this.state.currentPage === 15 ? true : false}>15</DropdownItem>
                    <DropdownItem  active={ this.state.currentPage === 20 ? true : false}>20</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

const FilterRow = ({ currentPerPage, showFilter, showPerPage, className, ...attrs }) => {
    const classes = classNames(
        className,
        "mb-4",
        "mb-sm-0"
    );

    return (
        <Col xs="12" lg="12" className={classes} {...attrs}>
            <div class="qpoint-tools">
                <div class="tool-left">
                    {showFilter && <FilterDropdown />}
                </div>
                <div class="tool-right">
                  {showPerPage && <QuestionsPerPage currentPage={currentPerPage} />}
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
    currentPerPage: PropTypes.number,
};
FilterRow.defaultProps = {
    showFilter: true,
    /**
     * Show Filter.
     */
    showPerPage: true,
    currentPerPage: 10,
};

export default FilterRow;