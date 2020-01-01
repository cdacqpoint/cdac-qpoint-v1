import React from "react";
import {
    Card,
    CardBody,
    Collapse,
    CardHeader
} from "shards-react";

/**
 *
 * How to Ask Component
 * @export
 * @author Sai Krishnan S <xicoder96@github.com>
 * @class HowToAsk
 * @extends {React.Component}
 */
export default class HowToAsk extends React.Component {
    constructor(props) {
        super(props);
        this.toggleOne = this.toggleOne.bind(this);
        this.toggleTwo = this.toggleTwo.bind(this);
        this.toggleThree = this.toggleThree.bind(this);
        this.state = {
            collapseOne: false,
            collapseTwo: false,
            collapseThree: false,
        };
    }

    toggleOne() {
        this.setState({ collapseOne: !this.state.collapseOne });
    }
    toggleTwo() {
        this.setState({ collapseTwo: !this.state.collapseTwo });
    }
    toggleThree() {
        this.setState({ collapseThree: !this.state.collapseThree });
    }

    render() {
        return (
            <Card small className="mb-3">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">How to ask?</h6>
                </CardHeader>
                <CardBody>
                    <p className="how-to-ask">The CDAC community is here to help you with specific coding,algorithm, or language problems.</p>
                    <p className="how-to-ask">Avoid asking opinion-based questions.</p>
                    {/*  Summarize the problem */}
                    <div id="headingOne" className="mb-2 border-bottom">
                        <span role="button" className="mx-2 w-100 iampointer" onClick={this.toggleOne}>
                            <img src="https://cdn.sstatic.net/Img/list-1.svg?v=e8dd475ba207" alt="1." className="p-0" width="16" height="16" />
                            <span className="py-2 px-1">Summarize the problem</span>
                            <span className="py-2 px-1 ml-auto pull-right">
                                <i className="material-icons">{this.state.collapseOne ? "keyboard_arrow_up":"keyboard_arrow_down"}</i>
                            </span>
                        </span>

                        <Collapse open={this.state.collapseOne}>
                            <div className="p-2">
                                <ul className="ml24 mb0 how-to-ask">
                                    <li>
                                        <p>Include details about your goal</p>
                                    </li>
                                    <li>
                                        <p>Describe expected and actual results</p>
                                    </li>
                                    <li>
                                        <p className="mb0">Include any error messages</p>
                                    </li>
                                </ul>
                            </div>
                        </Collapse>
                    </div>
                    {/*  /Summarize the problem */}
                    {/*  Describe what you’ve tried */}
                    <div id="headingTwo" className="mb-2 border-bottom">
                        <span role="button" className="mx-2 w-100 iampointer" onClick={this.toggleTwo}>
                            <img src="https://cdn.sstatic.net/Img/list-2.svg?v=9382fc2c3631" alt="2." className="p-0" width="16" height="16" />
                            <span className="py-2 px-1">Describe what you’ve tried</span>
                            <span className="py-2 px-1 ml-auto pull-right">
                                <i className="material-icons">{this.state.collapseTwo ? "keyboard_arrow_up":"keyboard_arrow_down"}</i>
                            </span>
                        </span>

                        <Collapse open={this.state.collapseTwo}>
                            <div className="p-2 how-to-ask">
                                <p>
                                    Show what you’ve tried and tell us what you found (on this site
                                    or
                                    elsewhere) and why it didn’t meet your needs. You can get better
                                    answers when you provide research.
                                </p>
                            </div>
                        </Collapse>
                    </div>
                    {/*  /Describe what you’ve tried */}
                    {/*  Show some code */}
                    <div id="headingThree">
                        <span role="button" className="mx-2 w-100 iampointer" onClick={this.toggleThree}>
                            <img src="https://cdn.sstatic.net/Img/list-3.svg?v=323a95564232" alt="3." className="p-0" width="16" height="16" />
                            <span className="py-2 px-1">Show some code</span>
                            <span className="py-2 px-1 ml-auto pull-right">
                                <i className="material-icons">{this.state.collapseThree ? "keyboard_arrow_up":"keyboard_arrow_down"}</i>
                            </span>
                        </span>

                        <Collapse open={this.state.collapseThree}>
                            <div className="p-2 how-to-ask">
                                <p>
                                    When appropriate, share the minimum amount of code others need to reproduce your problem.
                                </p>
                            </div>
                        </Collapse>
                    </div>
                    {/*  /Show some code */}
                </CardBody>
            </Card>
        );
    }
}