import React from "react";
import classNames from "classnames";
import { Form, Button } from "shards-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

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
        this.handleSubmit.bind(this);
        this.state = {
            answer: "",
        }
    }
    handleSubmit(e) {
        console.log(e);
        alert("commented successfully!")
    }
    render() {
        return (
            <>
                <FormHeader />
                <Form className="add-new-post" method="get" onSubmit={this.handleSubmit}>
                    <ReactQuill className="add-new-post__editor mb-1 bg-white" name="answer"
                        value={this.state.answer} placeholder="Do you know the answer? Help em out by explaining it not more than 700 characters!"
                    />
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