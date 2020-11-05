import React, { Component } from "react";
import "./index.less";
class Footer extends Component {
	static propTypes = {};
	static defaultProps = {};
	render() {
		return (
			<div className="footer">
				<div>24小时服务热线 010-1000000</div>
				<div className="footer-desc">
					©2020 版权所有 广东锦东电器科技有限公司
				</div>
			</div>
		);
	}
}

export default Footer;
