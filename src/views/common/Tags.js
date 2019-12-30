import React from "react";
import {
    Container,
    Row,
    Col
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";

/**
 * Tags for questions
 * @author Sai Krishnan S<xicoder96@github.com>
 * @class Tags
 * @extends {React.Component}
 */
class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterByTag: "",
            TagsList: []
        }
    }

    componentDidMount() {
        this.setState({
            TagsList: [
                {
                    name: "DAC",
                    desc: "The Post Graduate Diploma in Advanced Computing (PG-DAC) is the flagship programme of ACTS. The course is targeted towards engineers and IT professionals who wish to venture into the domain of advanced computing.",
                    url: "../tags/dac/questions",
                    totalCount: 2000,
                    todaysCount: 150,
                    weekCount: 400
                },
                {
                    name: "DESD",
                    desc: "Realizing the growth of embedded systems in day-to-day life and the need for trained manpower in this promising area, C-DAC has launched a Diploma in Embedded Systems Design (DESD) for Engineers in computers, electronics and IT. ",
                    url: "../tags/desd/questions",
                    totalCount: 222,
                    todaysCount: 10,
                    weekCount: 150
                },
                {
                    name: "DIOT",
                    desc: "This course will enable the student to utilize various Embedded Technologies related to IoT, Sensor Networks, Communication Protocols, Cloud Computing, Accessing Resources and Services needed to perform functions with dynamically changing needs.",
                    url: "../tags/diot/questions",
                    totalCount: 103,
                    todaysCount: 10,
                    weekCount: 10
                },
                {
                    name: "DBDA",
                    desc: "The theoretical and practical mix of the Post Graduate Diploma in Big Data Analytics (PG-DBDA) programme.To explore the fundamental concepts of big data analytics.",
                    url: "../tags/dbda/questions",
                    totalCount: 93,
                    todaysCount: 10,
                    weekCount: 20
                },
                {
                    name: "DMC",
                    desc: "The Post-Graduate Diploma in Mobile Computing (PG-DMC) {erstwhile PG Diploma in Wireless and Mobile Computing (PG-DWiMC)} is one of the pioneering programme of ACTS. The PG-DMC Course is targeted towards the engineers who wish to venture into the domain of Mobile Computing.",
                    url: "../tags/dmc/questions",
                    totalCount: 10,
                    todaysCount: 0,
                    weekCount: 0
                },
                {
                    name: "DVLSI",
                    desc: "PG-DVLSI is a pioneering course offered by C-DAC to assist engineers who wish to gain theoretical as well as practical knowledge in the field of Very Large Scale Integration (VLSI) design. It will also prepare them to keep pace with the changing trends of VLSI technology and the requirements of an ever-growing VLSI design industry.",
                    url: "../tags/dvlsi/questions",
                    totalCount: 10,
                    todaysCount: 0,
                    weekCount: 0
                },
                {
                    name: "DITISS",
                    desc: "The theoretical and practical mix of the Post Graduate Diploma in IT Infrastructure Systems and Security (PG-DITISS) programme has the following focus: To explore the fundamental concepts of Cyber Security To develop in-depth knowledge and understanding of the Intrusion Detection and Prevention domain. ",
                    url: "../tags/ditiss/questions",
                    totalCount: 10,
                    todaysCount: 0,
                    weekCount: 0
                },
                {
                    name: "DSSD",
                    desc: "C-DAC has taken up the challenge to address the need for trained system software development professionals by introducing an in-depth course Post Graduate Diploma in System Software Development (PG DSSD) giving emphasis to secure software design & implementation practices as per the Industry needs.",
                    url: "../tags/dssd/questions",
                    totalCount: 100,
                    todaysCount: 1,
                    weekCount: 2
                },
                {
                    name: "DBIHI",
                    desc: "The importance of Biomedical Engineers in fast growing health-care industry is now well acknowledged and consequently new career options are available to them in health care industries both nationally and internationally. The Post Graduate Diploma in Biomedical Instrumentation and Health Informatics (PG-DBIHI) programme is designed to mold engineers who can serve in health care industry, as well as in companies dealing with medical equipment.",
                    url: "../tags/dbihi/questions",
                    totalCount: 100,
                    todaysCount: 10,
                    weekCount: 20
                },
                {
                    name: "DHPCSA",
                    desc: "The theoretical and practical mix of the HPC System Administration programs has the following objectives: To explore the fundamental concepts of HPC Administration. To learn HPC Clustering, Parallel file system, Data Center Design and HPC Solutions & their applications.",
                    totalCount: 1,
                    url: "../tags/dhpcsa/questions",
                    todaysCount: 0,
                    weekCount: 0
                },
                {
                    name: "Others",
                    desc: "Any Other CDAC Courses or a general topic ",
                    totalCount: 1000,
                    url: "../tags/others/questions",
                    todaysCount: 4,
                    weekCount: 700
                },

            ]
        })
    }

    handleChange = (e) => {
        this.setState({
            filterByTag: e.target.value
        })
    }

    render() {
        //Filtered Tags
        let filteredTags = this.state.TagsList;
        //Search Tags
        let SearchTag = this.state.filterByTag.toUpperCase().trim();
        //Check whether the user entered string is alpha or not
        let isAlpha = new RegExp(/^[A-Z]+$/i).test(SearchTag)
        if (SearchTag !== "" && isAlpha === true)
            filteredTags = filteredTags.filter(tag =>{
               return new RegExp('^.*' + SearchTag.replace(/\*./g, '.*') + '.*$').test(tag.name)
            });
        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Tags" subtitle="Forum" className="text-sm-left" />
                </Row>
                <Row noGutters className="page-header py-4">
                    {/* Tag */}
                    <Col lg="12" className="mb-4">
                        <small className="text-muted">A tag is a keyword or label that categorizes your question with
                                    CDAC Courses and similar questions. Using the right tags makes it easier for others to find and answer your
                                question.
                        </small>
                        {/* Filter */}
                        <Row noGutters className="my-4">
                            <Col lg="4" md="4" sm="12" xs="12">
                                <div className="input-group input-group-seamless">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fas fa-search"></i>
                                        </div>
                                    </div>
                                    <input className="tag-search form-control" type="text"
                                        placeholder="Filter By Tag..." aria-label="Search"
                                        onChange={this.handleChange} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <div className="w-100 mb-4">
                        <Container fluid >
                            <Row noGutters>
                                {filteredTags.map((tags, idx) => (
                                    <Col lg="3" md="3" sm="12" xs="12" className="mb-4 px-2" key={idx}>
                                        <div className="text-sm-left my-2">
                                            <a href={tags.url} className="badge badge-primary">{tags.name}</a><span
                                                className="text-muted mx-1">x{tags.totalCount}</span>
                                        </div>
                                        <div className="text-sm-left tag-desc my-2 text-muted py-2">
                                            <p>{tags.desc}</p>
                                        </div>
                                        <div className="text-sm-left my-4">
                                            <p>{tags.todaysCount} asked today, {tags.weekCount} this week</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>
                </Row>
            </Container>
        )
    }
}

export default Tags;