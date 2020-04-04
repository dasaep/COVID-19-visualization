import React, {Component} from 'react';
import Page from './index.html';
var htmlDoc = {__html: Page};
class Vulnerable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div dangerouslySetInnerHTML={htmlDoc} />)
    }
}

export default Vulnerable;