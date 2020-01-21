import React from "react";
import classNames from "classnames";
import { Form, Button } from "shards-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import { CommentStore } from "../../_stores";
import { ViewQuestionActions } from "../../_actions/view_question.actions";

/**
 *
 * @author Sai Krishnan S <xicoder96@github.com>
 * @export
 * @class CommentForm
 * @extends {React.Component}
 */
export default class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.setData = this.setData.bind(this);
        this.CommentStoreToken = CommentStore.dispatchToken;
        this.state = {
            answer: "",
            error: null,
            hasError: false
        }
    }

    /**
     *
     * Lifecycle
     * @memberof CommentForm
     */
    componentDidMount() {
        CommentStore.addChangeListener(this.setData) // Sai krishnan
    }

    /**
     *
     * Set Data
     * @memberof CommentForm
     */
    setData = () => {
        this.setState({ error: CommentStore.error, hasError: CommentStore.hasError });
    }

    /**
     * Component 
     * @author Sai krishnan
     * @memberof ViewQuestion
     */
    componentWillUnmount() {
        CommentStore.removeChangeListener(this.setData) // Sai krishnan
    }

    /**
     *
     *
     * @memberof CommentForm
     */
    handleChange = (html) => {
        this.setState({ answer: html });
    }

    /**
     *
     *
     * @memberof CommentForm
     */
    handleSubmit = (e) => {
        console.log(e);
        alert("commented successfully!")
        ViewQuestionActions.addComments(this.state.answer)
        this.hasError = CommentStore.hasError;
        this.error = CommentStore.error;
        this.resetForm();
        e.preventDefault();
    }

    /**
     *
     *
     * @memberof CommentForm
     */
    resetForm = () => {
        this.setState({ answer: "" });
    }

    /**
     *
     *
     * @returns
     * @memberof CommentForm
     */
    render() {
        return (
            <>
                <FormHeader />
                <Form className="add-new-post" method="get" onSubmit={this.handleSubmit}>
                    <ReactQuill className="add-new-post__editor mb-1 bg-white" name="answer"
                        value={this.state.answer} onChange={this.handleChange} placeholder="Do you know the answer? Help em out by explaining it not more than 700 characters!"
                        invalid={this.state.hasError}
                    />
                    {this.state.hasError && this.state.error.answer && <span className="text-danger">{this.state.error.answer.message}</span>}
                    <Button type="submit" size="sm" className="m-auto" theme="accent">
                        <i className="material-icons">file_copy</i> Post Your Answer
                    </Button>
                </Form>
            </>
        );
    }
}

/**
 * 
 * @author Sai Krishnan S<xicoder96@github.com>
 * @param {*} param0 
 */
const FormHeader = ({ className, ...attrs }) => {
    const classes = classNames(
        "answer-nav",
        className,
    );
    return (
        <div className={classes} {...attrs}>
            <h5>Your Answer</h5>
        </div>
    );
}