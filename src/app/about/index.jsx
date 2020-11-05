import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class About extends Component {
	static propTypes = {};
	static defaultProps = {};
	render() {
		console.log(this.props);
		const { match = {} } = this.props;
		const { path = "" } = match;
		return <div className="a">12324</div>;
	}
}

export default withRouter(About);
