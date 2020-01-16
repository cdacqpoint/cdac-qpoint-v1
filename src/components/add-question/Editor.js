import React from "react";
import ReactQuill from "react-quill";
import CreatableSelect from 'react-select/creatable';
// import { useFormik } from "formik";
// import * as Yup from "yup";
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
    let options = this.state.options;
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
    this.handleSubmit.bind(this);
    this.state = {
      showNameEmail: false,
      DefaultTag: null,
      title: "",
      description: "",
      tags: "",
      category: [],
      name: "",
      email: "",
      TagList: []
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
      DefaultTag: 1
    });
  }
  handleSubmit = (event) => {
    alert("Question added successfully!");
  }
  changeNotify = () => {
    this.setState(prevState => ({
      showNameEmail: !prevState.showNameEmail,
      email: "",
      name: "",
    })
    );
  }

  render() {
    let TagList = this.state.TagList;
    let DefaultTag = this.state.DefaultTag;
    let showNameEmail = this.state.showNameEmail;
    let showDraftButton = this.props.showDraftButton;
    // const formik = useFormik({
    //   initialValues: {
    //     title: this.state.title,
    //     description: this.state.description,
    //     tags: this.state.tags,
    //     category: this.state.category,
    //     showNameEmail: this.state.showNameEmail,
    //     name: this.state.name,
    //     email: this.state.email
    //   },
    //   validationSchema: Yup.object({
    //     title: Yup.string()
    //       .min(3, "Must contain atleast 3 characters")
    //       .max(150, "Must be 150 characters or less")
    //       .required("Required"),
    //     description: Yup.string()
    //       .min(3, "Must contain atleast 3 characters")
    //       .max(700, "Must be 700 characters or less")
    //       .required("Required"),
    //     tag: Yup.number()
    //       .required("Required"),
    //     category: Yup.array().max(5, "You can select upto 5 categories"),
    //     showNameEmail: Yup.bool(),
    //     name: Yup.string()
    //       .min(3, "Must contain atleast 3 characters")
    //       .max(50, "Must be 50 characters or less")
    //       .test('check-name', 'Please Enter Name', function (value) {
    //         return this.parent.showNameEmail === true ? value !== "" : true;
    //       }),
    //     email: Yup.string()
    //       .email()
    //       .min(3, "Must contain atleast 3 characters")
    //       .max(50, "Must be 50 characters or less")
    //       .test('check-email', 'Please Enter Email', function (value) {
    //         return this.parent.showNameEmail === true ? value !== "" : true;
    //       }),
    //   }),
    //   onSubmit: (values, { setSubmitting }) => {
    //     setTimeout(() => {
    //       console.log(values)
    //       alert(JSON.stringify(values, null, 2));
    //       setSubmitting(false);
    //     }, 400);
    //   },
    // });
    return (
      <Form className="add-new-post" encType="multipart/form-data" method="get" onSubmit={this.handleSubmit}>
        <small>
          <i className="material-icons text-primary mx-1" title="info">info</i>
          Be specific and imagine you’re asking a question to another person
        </small>
        <FormInput size="lg" className="mb-3" placeholder="Your Post Title" name="title" />
        <small>
          <i className="material-icons text-primary mx-1" title="info">info</i>Include all the information someone would need to answer your question
        </small>
        <ReactQuill className="add-new-post__editor mb-1" name="description" placeholder="Describe your question in not more than 700 characters." />
        <hr />
        <small>
          <i className="material-icons text-primary mx-1" title="info">info</i>
          Select appropriate course tags
            </small>
        <Row noGutters className="my-4">
          {TagList.map((tag, idx) => (
            <Col lg="3" md="3" sm="12" key={idx}>
              <span>
                <FormRadio value={tag._id} name="tag" defaultChecked={DefaultTag === tag._id}>{tag.name}</FormRadio>
              </span>
            </Col>
          ))}
        </Row>
        <small className="mb-2">
          <i className="material-icons text-primary mx-1" title="info">info</i>
          Screenshots or images related to your question (optional)
            </small>
        <div className="custom-file mb-3">
          <input type="file" className="custom-file-input" id="customFile2" name="attachements[]" />
          <label className="custom-file-label" htmlFor="customFile2">
            Choose file...
              </label>
        </div>
        <div className="mb-3">
          <small className="mb-2">
            <i className="material-icons text-primary mx-1" title="info">info</i>
            Add up to 5 course tags to describe what your question is about
              </small>
          <SelectCategory name="category" />
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
          <FormInput size="lg" className="mb-3" placeholder="John Doe" name="name" />
          <FormInput size="lg" className="mb-3" placeholder="johndoe@email.com" type="email" name="email" />
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