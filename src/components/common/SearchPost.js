import React from "react";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput
  } from "shards-react";
import { Link } from "react-router-dom";
import Autosuggest from 'react-autosuggest';
import { CommonActions } from '../../_actions';
import PostStore from '../../_stores/post.stores';
import "../../assets/react-autosuggest.css";

const renderInputComponent = inputProps => (
    <InputGroup seamless className="ml-3 p-10 w-100">
        <InputGroupAddon type="prepend">
            <InputGroupText>
                <i className="material-icons">search</i>
            </InputGroupText>
        </InputGroupAddon>
        <FormInput {...inputProps} />
    </InputGroup>
);

function getSuggestionValue(suggestion) {
    return suggestion.title;
}

function renderSuggestion(suggestion) {
    return (
        <Link className="media" to={`/question/${suggestion._id}`}>
            <div className="media-body">
                <h6 className="mt-0">{suggestion.title}</h6>
                <small>Asked {suggestion.askedTimeAgo}, Active {suggestion.activeTimeAgo}</small>
            </div>
        </Link>
    );
}

export default class SearchPost extends React.Component {
    constructor() {
        super();
        this.getSearchedQuestions = this.getSearchedQuestions.bind(this)
        this.state = {
            value: '',
            suggestions: [],
            isLoading: false
        };
        this.postDispatchToken = PostStore.dispatchToken;
    }

    /**
     *
     * Get All Questions
     * @author Sai Krishnan S
     * @memberof SearchPost
     */
    async getSearchedQuestions() {
        this.setState({
            isLoading: false,
            suggestions:await PostStore.getSearchedQuestions(),
        });
    }

    /**
     *
     *
     * @author ALisha Bilquis, Sai krishnan
     * axios mounting hc
     */
    componentDidMount() {
        this.getSearchedQuestions()
        PostStore.addChangeListener(this.getSearchedQuestions) // Sai krishnan
    }

    /**
     *
     * @author Sai krishnan
     * @memberof SearchPost
     */
    componentWillUnmount() {
        PostStore.removeChangeListener(this.getSearchedQuestions) // Sai krishnan
    }

    /**
     *
     * Load Suggestions
     * @param {*} value
     * @memberof SearchPost
     */
    loadSuggestions(value) {
        // Cancel the previous request
        this.setState({
            isLoading: true
        });
        CommonActions.searchQuestions(value);
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.loadSuggestions(value);
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };


    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Search for something...",
            value,
            className: "navbar-search form-control w-100",
            onChange: this.onChange
        };

        return (
            <>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderInputComponent={renderInputComponent}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps} />
                {this.state.isLoading && <div className="spinner-grow ml-3" role="status">
                    <i className="fa fa-spinner fa-spin"></i>
                    <span className="sr-only">Loading...</span>
                </div>}
            </>
        );
    }
}