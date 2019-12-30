/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
    Container,
    Row,
    Col
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import  Editor  from "../../components/add-question/Editor"

/**
 * Add Question View
 * @author Sai Krishnan S <xicoder96@github.com>
 * @class AddQuestion
 * @extends {React.Component}
 */
class AddQuestion extends React.Component {

    render() {
        return (
            <Container fluid className="main-content-container px-4 pb-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Ask a public question" subtitle="Forum" className="text-sm-left" />
                </Row>

                <Row>
                    {/* Editor */}
                    <Col lg="8" md="12">
                        <Editor />
                    </Col>

                    {/* Sidebar Widgets */}
                    <Col lg="4" md="12">
                      {/* Sidebar Widgets */}
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default AddQuestion;