import React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import {
    LinkedinShareButton,
    LinkedinIcon,
    EmailShareButton,
    EmailIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon,
} from "react-share";
import "../shards-dashboard/styles/react-share.css";

export default class BasicModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const { open } = this.state;
        return (
            <div>
                <Button onClick={this.toggle}>Click Me!</Button>
                <Modal open={open} toggle={this.toggle}>
                    <ModalHeader>Header</ModalHeader>
                    <ModalBody>
                        <TwitterShareButton
                            url="http://localhost:4000" 
                            title="Rock Macha"
                            className="Demo__some-network__share-button"
                        >
                            <TwitterIcon size={32} round />
                        </TwitterShareButton>

                        <LinkedinShareButton url="http://localhost:4000" className="Demo__some-network__share-button">
                            <LinkedinIcon size={32} round />
                        </LinkedinShareButton>

                        <EmailShareButton url="http://localhost:4000" subject="hello macha" body="#hello #workd">
                            <EmailIcon size={32} round={true} />
                        </EmailShareButton>

                        <WhatsappShareButton
                            url="http://localhost:4000"
                            title="Hello Macha"
                            separator=":: "
                            className="Demo__some-network__share-button"
                        >
                            <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
