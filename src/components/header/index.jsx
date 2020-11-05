import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import "./index.less";
class Header extends Component {
	static propTypes = {};
	static defaultProps = {};
	render() {
		console.log(this.props);
		const { match = {} } = this.props;
		const { path = "" } = match;
		return (
			<div className="header">
				<NavLink exact to="/" className="header-item">
					首页
				</NavLink>
				<NavLink to="" className="header-item">
					案例
				</NavLink>
				<NavLink to="" className="header-item">
					新闻动态
				</NavLink>
				<NavLink to="" className="header-item">
					留言板
				</NavLink>
				<NavLink to="about" className="header-item">
					关于我们
				</NavLink>
			</div>
		);
	}
}

export default withRouter(Header);
