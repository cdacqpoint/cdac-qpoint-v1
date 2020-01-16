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
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.attachments = React.createRef();
    this.state = {
      showNameEmail: false,
      DefaultTag: null,
      title: "",
      description: "",
      tags: 1,
      category: [],
      name: "",
      email: "",
      TagList: [],
      categoryList: []
    };
  }

  componentDidMount() {
    this.setState({
      TagList: [
        {
          name: "DAC",
          _id: 1
        },
        {
          name: "DESD",
          _id: 2
        },
        {
          name: "DIOT",
          _id: 3
        },
        {
          name: "DBDA",
          _id: 4
        },
        {
          name: "DMC",
          _id: 5
        },
        {
          name: "DVLSI",
          _id: 6
        },
        {
          name: "DITISS",
          _id: 7
        },
        {
          name: "DSSD",
          _id: 8
        },
        {
          name: "DBIHI",
          _id: 9
        },
        {
          name: "DHPCSA",
          _id: 10
        },
        {
          name: "Others",
          _id: 11
        },

      ],
      DefaultTag: 1,
      categoryList: [
        { value: 'java', label: 'Java' },
        { value: 'awp', label: 'AWP' },
        { value: 'c#', label: 'C#' }
      ]
    });
  }

  handleSubmit(event) {
    alert("Question added successfully!");
    let { title, description, tags, category, name, email, showNameEmail } = this.state;
    const data = { title, description, category, tags, name, email, notify: showNameEmail }
    console.log(data)
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
                <FormRadio value={tag._id} name="tag" defaultChecked={DefaultTag === tag._id} onChange={() => {
                  this.changeTagChange(tag._id);
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