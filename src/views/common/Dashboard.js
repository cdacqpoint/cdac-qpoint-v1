/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    ListGroup,
    ListGroupItem,
    Badge,
    Button
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import Filter from "../../components/common/Filter";
import userService from "../../_services/posts";
import Axios from "axios";


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalQuestions: 3500,
            totalMembers: 3500,
            hotQuestions: [
                {
                    title: "JDBC Error, unable to connect sql",
                    "url": "#"
                },
                {
                    title: "Apache Web Server Not working",
                    "url": "#"
                },
                {
                    title: "How to print a number with commas as thousands separators in JavaScript",
                    "url": "#"
                },
                {
                    title: "Javascript - Add thousand seperator and retain decimal place",
                    "url": "#"
                },
                {
                    title: "Cannot find assignment upload link",
                    "url": "#"
                },
                {
                    title: "Setting up Hadoop in Ubuntu 16.04 LTS",
                    "url": "#"
                },
                {
                    title: "Visual Studio showing entertainment on Windows 7 while compiling c# code",
                    "url": "#"
                },
            ],
            taglists: [
                {
                    tag: "DAC",
                    post_count: 50,
                    "url": "#"

                },
                {
                    tag: "DESD",
                    post_count: 20,
                    "url": "#"

                },
                {
                    tag: "DBDA",
                    post_count: 2,
                    "url": "#"

                },
                {
                    tag: "DIOT",
                    post_count: 15,
                    "url": "#"

                },
                {
                    tag: "DSSD",
                    post_count: 60,
                    "url": "#"

                },
                {
                    tag: "Others",
                    post_count: 2,
                    "url": "#"

                }
            ],
            PostLists: [
                // {
                //     _id: '4sg2343615a7c4821fdb7b998',
                //     title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
                //     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                //     images: ['image.jpg'],
                //     category: [
                //         'java',
                //         'refelection'
                //     ],
                //     tag: 'DAC',
                //     email: '',
                //     author: 'Anonymous',
                //     authorAvatar: require("../../images/avatars/noimage.png"),
                //     commentsCount: 5,
                //     date_created: '2019 Dec 25 20:50:55',
                //     posturl: '/posts/4sg2343615a7c4821fdb7b998',
                //     times_ago: '2 days ago'
                // },
                // {
                //     _id: '4sg2343615a7c4821fdb7b998',
                //     title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
                //     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                //     images: ['image.jpg'],
                //     category: [
                //         'java',
                //         'refelection'
                //     ],
                //     tag: 'DAC',
                //     email: '',
                //     author: 'Anonymous',
                //     authorAvatar: require("../../images/avatars/noimage.png"),
                //     commentsCount: 5,
                //     date_created: '2019 Dec 25 20:50:55',
                //     posturl: '/posts/4sg2343615a7c4821fdb7b998',
                //     times_ago: '2 days ago'
                // },
                // {
                //     _id: '4sg2343615a7c4821fdb7b998',
                //     title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
                //     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                //     images: ['image.jpg'],
                //     category: [
                //         'java',
                //         'refelection'
                //     ],
                //     tag: 'DAC',
                //     email: '',
                //     author: 'Anonymous',
                //     authorAvatar: require("../../images/avatars/noimage.png"),
                //     commentsCount: 5,
                //     date_created: '2019 Dec 25 20:50:55',
                //     posturl: '/posts/4sg2343615a7c4821fdb7b998',
                //     times_ago: '2 days ago'
                // }
            ]
        }
    } 
    /**
     *
     *
     * @author ALisha Bilquis
     * axios mounting hc
     */
    componentDidMount(){
     Axios.get('/getpost')
        .then(res=>
            {this.setState({PostLists:res.data})}
            )
    }
    render() {
        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Questions" subtitle="Forum" className="text-sm-left" />
                </Row>
                <Row className="mb-4">
                    <Filter currentPerPage={10} />
                </Row>
                <Row >
                    {/* Posts */}
                    <Col lg="8" md="8" sm="12" className="mb-4">
                        {this.state.PostLists.map((post, idx) => (
                            <Col lg="12" className="mb-4" key={idx}>
                                <Card small className="card-post mb-4">
                                    <CardBody tag={Link} to="blog-overview">
                                        <h5 className="card-title" >{post.title.substr(0, 100) + "..."}</h5>
                                        <p className="card-text text-muted">{post.desc.substr(0, 250) + "..."}</p>
                                    </CardBody>
                                    <CardFooter className="border-top d-flex">
                                        <div className="card-post__author d-flex">
                                            <a
                                                href="#"
                                                className="card-post__author-avatar card-post__author-avatar--small"
                                                style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                                            >
                                                {post.times_ago}
                                            </a>
                                            <div className="d-flex flex-column justify-content-center ml-3">
                                                <span className="card-post__author-name">
                                                    {post.author}
                                                </span>
                                                <small className="text-muted">{post.date}</small>
                                            </div>
                                        </div>
                                        <div className="my-auto ml-auto">
                                            <Badge pill className="card-post__category bg-primary ml-1">
                                                {post.tag}
                                            </Badge>
                                            {post.category.map((cat, index) => (
                                                <a href={"#"} className="category-link d-none d-md-inline-block" key={index}>{cat}</a>
                                            ))}
                                            <Button pill theme="white" tag={Link} to="user-profile">
                                                <span className="nav-link-icon__wrapper">
                                                    <i className="fas fa-comment"></i>
                                                    <Badge pill className="ml-2">{post.commentsCount}</Badge>
                                                </span>
                                            </Button>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                        ))}
                        <nav>
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                    {/* Brief Desc */}
                    <Col lg="4" md="4" sm="12" className="mb-4">
                        <Card small className="mb-4 pt-3">
                            <CardBody className="border-bottom text-center">
                                <div className="mb-3 mx-auto">
                                    <h3 className="mb-0 text-primary">{numberWithCommas(this.state.totalQuestions)}</h3>
                                    <span className="text-muted d-block mb-2">Questions</span>
                                    <h3 className="mb-0 text-primary">{numberWithCommas(this.state.totalMembers)}</h3>
                                    <span className="text-muted d-block mb-2">Members</span>
                                </div>
                                <ListGroup flush>
                                    <ListGroupItem className="px-4 text-center">
                                        <strong className="text-muted d-block mb-2">Related Tags</strong>
                                        <span>
                                            {this.state.taglists.map((tag, idx) => {
                                                return (
                                                    <a href={tag.url}  key={idx}>
                                                        <Badge pill className="ml-2">{tag.tag}</Badge>
                                                        <span className="text-muted m-2">x{tag.post_count}
                                                        </span>
                                                    </a>
                                                );
                                            })}
                                        </span>
                                    </ListGroupItem>
                                    <ListGroupItem className="p-4">
                                        <strong className="text-muted d-block mb-2">New Hot Questions</strong>
                                        <span>
                                            <div className="card-post__author d-flex text-left">
                                                <ul className="hot-new-ques">
                                                    {this.state.hotQuestions.map((ques, idx) => (
                                                        <li className="px-4" key={idx}>
                                                            <a href="#">
                                                                <span className="link">{ques.title.substr(0, 50) + "..."}</span>

                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="text-right view-report col"><a href="#">View More →</a></div>
                                        </span>
                                    </ListGroupItem>
                                </ListGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Question;