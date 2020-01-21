import React from "react";
import { Link } from "react-router-dom";
import { random } from "../_helpers/random";
import Autosuggest from 'react-autosuggest';
import { CommonActions } from '../_actions';
import { PostStore } from '../_stores';
import "../assets/react-autosuggest.css"

const languages = [
    {
        _id: random(25),
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        activeTimeAgo: "2 days ago",
        askedTimeAgo: "2 days ago",
    },
    {
        _id: random(25),
        title: 'Tellus id interdum velit laoreet id donec ultrices tincidunt..',
        activeTimeAgo: "2 days ago",
        askedTimeAgo: "2 days ago",
    },
    {
        _id: random(25),
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        activeTimeAgo: "2 days ago",
        askedTimeAgo: "2 days ago",
    },
    {
        _id: random(25),
        title: 'Erat imperdiet sed euismod nisi porta lorem mollis aliquam..',
        activeTimeAgo: "2 days ago",
        askedTimeAgo: "2 days ago",
    },

];
const renderInputComponent = inputProps => (
    <div className="ml-3 input-group input-group-seamless">
        <div className="input-group-prepend">
            <span className="input-group-text">
                <i className="material-icons">search</i>
            </span>
        </div>
        <input  {...inputProps} />
    </div>
);
// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getMatchingLanguages(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return languages.filter(language => regex.test(language.title));
}

function getSuggestionValue(suggestion) {
    return suggestion.title;
}

function renderSuggestion(suggestion) {
    return (
        <Link className="media" to={`question/${suggestion._id}`}>
            <div className="media-body">
                <h6 className="mt-0">{suggestion.title}</h6>
                <small>Asked {suggestion.askedTimeAgo}, Active {suggestion.activeTimeAgo}</small>
            </div>
        </Link>

    );
}

export default class Example extends React.Component {
    constructor() {
        super();
        this.getSearchedQuestions = this.getSearchedQuestions.bind(this)
        this.state = {
            value: '',
            suggestions: [],
            isLoading: false
        };
        this.lastRequestId = null;
    }


    /**
     *
     * Get All Questions
     * @author Sai Krishnan S
     * @memberof Question
     */
    getSearchedQuestions() {
        this.setState({
            isLoading: false,
            suggestions: PostStore.getSearchedQuestions(),
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
     * @memberof Question
     */
    componentWillUnmount() {
        PostStore.removeChangeListener(this.getSearchedQuestions) // Sai krishnan
    }

    loadSuggestions(value) {
        // Cancel the previous request
        if (this.lastRequestId !== null) {
            clearTimeout(this.lastRequestId);
        }

        this.setState({
            isLoading: true
        });
        CommonActions.searchQuestions(value);
        // Fake request
        // this.lastRequestId = setTimeout(() => {
        //     this.setState({
        //         isLoading: false,
        //         suggestions: getMatchingLanguages(value)
        //     });
        // }, 1000);
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
        console.log(getMatchingLanguages(value))
        const inputProps = {
            placeholder: "Search for something...",
            value,
            className: "navbar-search form-control",
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
                    <i className="fa fa-spinner fa-spin"></i> Loading...
                    <span className="sr-only">Loading...</span>
                </div>}
            </>
        );
    }
}

