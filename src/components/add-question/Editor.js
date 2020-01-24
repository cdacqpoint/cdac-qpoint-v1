import React from "react";
import ReactQuill from "react-quill";
import CreatableSelect from 'react-select/creatable';
import {
  Card,
  CardBody,
  CardFooter,
  Form,
  FormInput,
  Row,
  Button,
  Col,
  FormRadio,
  FormGroup,
  FormCheckbox
} from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import { components } from "react-select";
import TagStore from "../../_stores/tags.stores";
import PostStore from "../../_stores/post.stores";
import { EditorAction } from "../../_actions/createpost.actions";

// For this example the limite will be 5
/**
 * 
 * @author Sai Krishnan S
 */
const Menu = props => {
  const optionSelectedLength = props.getValue().length || 0;
  return (
    <components.Menu {...props}>
      {optionSelectedLength < 5 ? (
        props.children
      ) : (
          <div>Max limit achieved</div>
        )}
    </components.Menu>
  );
};

/**
 *
 *
 * @author Sai Krishnan S
 * @class SelectCategory
 * @extends {React.Component}
 */
class SelectCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "options": []
    };
  }

  componentDidMount() {
    this.setState(state => ({
      options: [
        { value: 'java', label: 'Java' },
        { value: 'awp', label: 'AWP' },
        { value: 'c#', label: 'C#' }
      ]
    }));
  }

  handleChange = (newValue, actionMeta) => {
    console.group('Value Changed');
    console.log(newValue);
    this.props.changeCategory(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  handleInputChange = (inputValue, actionMeta) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  render() {
    let options = this.props.options;
    const isValidNewOption = (inputValue, selectValue) =>
      inputValue.length > 0 && selectValue.length < 5;
    return (
      <CreatableSelect
        components={{ Menu }}
        isClearable
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        isValidNewOption={isValidNewOption}
        options={options}
        value={this.props.value}
        isMulti
        {...this.props}
      />
    );
  }
}
class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.changeNotify.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTagList = this.getTagList.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.attachments = React.createRef();
    this.state = {
      showNameEmail: false,
      DefaultTag: null,
      title: "",
      description: "",
      tags: "",
      category: [],
      name: "",
      email: "",
      TagList: [],
      categoryList: []
    };
  }

  /**
   *
   * Get All Questions
   * @author Sai Krishnan S
   * @memberof Question
   */
  async getTagList() {
    const tagList = await TagStore.getTags();
    console.log(tagList[0].name)
    this.setState({
      TagList: tagList || [],
      DefaultTag: tagList[0].name || "",
      tags:tagList[0].name || ""
    });
  }

  componentDidMount() {
    this.getTagList();
    TagStore.addChangeListener(this.getTagList) // Sai krishnan
    this.setState({
      categoryList: [
        { value: 'java', label: 'Java' },
        { value: 'awp', label: 'AWP' },
        { value: 'c#', label: 'C#' }
      ]
    });
  }

  /**
   *
   * @author Sai krishnan
   * @memberof Question
   */
  componentWillUnmount() {
    TagStore.removeChangeListener(this.getTagList) // Sai krishnan
  }

  handleSubmit(event) {

    let { title, description, tags, category, name, email, showNameEmail } = this.state;
    const data = { title, description, category, tags, name, email, notify: showNameEmail }
    console.log(data)
    try {
      EditorAction.addQuestions(data)
      console.group('Post Submitted Changed');
      console.log(PostStore.hasError);
      console.log(PostStore.error);
      this.resetForm();
      alert("Question added successfully!");
    } catch (error) {
      alert("Oops Someyhing went wrong!");
      console.log(error)
    }
    event.preventDefault();
  }
  changeNotify = () => {
    this.setState(prevState => ({
      showNameEmail: !prevState.showNameEmail,
      email: "",
      name: "",
    })
    );
  }

  resetForm = () => {
    console.log("reset form", this.state.TagList[0])
    this.setState({
      title: "",
      description: "",
      tags: this.state.TagList[0].name || "",
      category: [],
      name: "",
      email: "",
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleCategoryChange(select) {
    this.setState({ category: select });
  }
  changeTagChange(select) {
    this.setState({ tags: select });
  }
  handleDescriptionChange(html) {
    this.setState({ description: html });
  }
  render() {
    let TagList = this.state.TagList;
    let DefaultTag = this.state.DefaultTag;
    let showNameEmail = this.state.showNameEmail;
    let showDraftButton = this.props.showDraftButton;

    return (
      <Form className="add-new-post" encType="multipart/form-data" method="get" onSubmit={this.handleSubmit}>
        <small>
          <i className="material-icons text-primary mx-1" title="info">info</i>
          Be specific and imagine you’re asking a question to another person
        </small>
        <FormInput size="lg" className="mb-3" placeholder="Your Post Title" name="title" value={this.state.title}
          onChange={this.handleInputChange} />
        <small>
          <i className="material-icons text-primary mx-1" title="info">info</i>Include all the information someone would need to answer your question
        </small>
        <ReactQuill className="add-new-post__editor mb-1" name="description" placeholder="Describe your question in not more than 700 characters." value={this.state.description} onChange={this.handleDescriptionChange} />
        <hr />
        <small>
          <i className="material-icons text-primary mx-1" title="info">info</i>
          Select appropriate course tags
            </small>
        <Row noGutters className="my-4">
          {TagList.map((tag, idx) => (
            <Col lg="3" md="3" sm="12" key={idx}>
              <span>
                <FormRadio value={tag.name} name="tag" defaultChecked={DefaultTag === tag.name} onChange={() => {
                  this.changeTagChange(tag.name);
                }}>{tag.name}</FormRadio>
              </span>
            </Col>
          ))}
        </Row>
        {/* <small className="mb-2">
          <i className="material-icons text-primary mx-1" title="info">info</i>
          Screenshots or images related to your question (optional)
            </small>
        <div className="custom-file mb-3">
          <input type="file" className="custom-file-input" id="customFile2" name="attachements" ref={this.attachments} />
          <label className="custom-file-label" htmlFor="customFile2">
            Choose file...
              </label>
        </div> */}
        <div className="mb-3">
          <small className="mb-2">
            <i className="material-icons text-primary mx-1" title="info">info</i>
            Add up to 5 course tags to describe what your question is about
              </small>..
          <SelectCategory name="category" options={this.state.categoryList} changeCategory={this.handleCategoryChange} value={this.state.category} />
        </div>
        <hr />
        <FormGroup>
          <FormCheckbox
            name="notify"
            onChange={this.changeNotify}
          >
            Send new Responses to my posts via mail.
          </FormCheckbox>
        </FormGroup>
        <div className={showNameEmail ? "" : "hidden"}>
          <FormInput size="lg" className="mb-3" placeholder="John Doe" name="name"
            value={this.state.name}
            onChange={this.handleInputChange} />
          <FormInput size="lg" className="mb-3" placeholder="johndoe@email.com" type="email" name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>
        <CardFooter>
          <div className="d-flex px-1">
            {showDraftButton && <Button outline theme="info" size="sm">
              <i className="material-icons">save</i> Save Draft
              </Button>}

            <Button className="ml-auto" theme="accent" size="sm" type="submit">
              <i className="material-icons">file_copy</i> Publish
              </Button>
          </div>
        </CardFooter>
      </Form>
    )
  }
}
const Editor = () => (
  <Card small className="mb-3">
    <CardBody>
      <QuestionForm />
    </CardBody>
  </Card>
);

export default Editor;