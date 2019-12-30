import React from "react";
import ReactQuill from "react-quill";
import CreatableSelect from 'react-select/creatable';
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Card,
  CardBody,
  Form,
  FormInput,
  Row,
  Col,
  FormRadio
} from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import { components } from "react-select";

// For this example the limite will be 5
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

const QuestionForm = () => {
  const DefaultTag = 1;//Always make sure its others
  const TagList = [
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

  ];
  return (
    <>
      <Formik
        initialValues={{
          title: "",
          description: ""
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .min(3, "Must contain atleast 3 characters")
            .max(150, "Must be 150 characters or less")
            .required("Required"),
          description: Yup.string()
            .min(3, "Must contain atleast 3 characters")
            .max(700, "Must be 700 characters or less")
            .required("Required"),
          tag: Yup.number()
            .required("Required"),

        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values)
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="add-new-post" encType="multipart/form-data"  method="post">
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
          <div className="mb-3">
            <small className="mb-2">
              <i className="material-icons text-primary mx-1" title="info">info</i>
              Add up to 5 course tags to describe what your question is about
            </small>
            <SelectCategory name="category" />
          </div>
          <small className="mb-2">
            <i className="material-icons text-primary mx-1" title="info">info</i>
            Screenshots or images related to your question (optional)
          </small>
          <div className="custom-file mb-3">
            <input type="file" className="custom-file-input" id="customFile2" name="attachements[]"/>
            <label className="custom-file-label" htmlFor="customFile2">
              Choose file...
            </label>
          </div>
          <hr />
        </Form>
      </Formik>
    </>
  )
}

const Editor = () => (
  <Card small className="mb-3">
    <CardBody>
      <QuestionForm />
    </CardBody>
  </Card>
);

export default Editor;