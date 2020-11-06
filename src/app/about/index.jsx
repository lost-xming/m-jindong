import React, { Component } from "react";
import Header from "components/header/index";
import Footer from "components/footer/index";
import FixedFooter from "components/fixButtom/index";
import { WingBlank, Card } from "antd-mobile";
import banner3 from "./../../assets/banner3.jpg";
import logo from "./../../assets/logo.png";
import gzhImg from "./../../assets/gongzhonghao.jpg";
import mapImg from "./../../assets/map.png";
import "./index.less";
export default class News extends Component {
	static propTypes = {};
	static defaultProps = {};
	state = {
		showButtomT: false,
		cardArr: [
			{
				title: "地图",
				text: "东莞市东坑镇XX街道XXX号",
				content: "",
				img: mapImg,
				logo,
			},
			{
				title: "电话",
				text: "",
				content: "0769-22225669",
				img: "",
				logo,
			},
			{
				title: "微信公众号",
				text: "",
				content: "",
				img: gzhImg,
				logo,
			},
			{
				title: "微信号",
				text: "",
				content: "",
				img: gzhImg,
				logo,
			},
		],
	};
	componentDidMount() {
		this.timer = setTimeout(() => {
			this.setState({
				showButtomT: true,
			});
		}, 3000);
	}
	componentWillUnmount() {
		if (this.timer) {
			clearTimeout(this.timer);
		}
	}
	render() {
		const { showButtomT, cardArr } = this.state;
		return (
			<div className="about-box">
				<Header />
				<WingBlank>
					<img
						src={banner3}
						style={{ width: "100%", marginBottom: 60 }}
						alt="banner"
					/>
					<div className="textContent">
						<span>联系我们</span>
					</div>
					<div className="about-text">
						<p>
							某某公司液晶显示产品覆盖传媒、商业、安防、教育等多个领域。某某公司拥有一批从事智能显示设备、物联网设备研发的工程师及生产线，更好地保障了公司多媒体液晶显示设备的优良性能和高品质。为了给客户提供更好的产品和服务，某某公司不断拓展和完善营销渠道，已建成行业内较完善的营销渠道服务网络。
						</p>
					</div>
					{cardArr.map((item, index) => {
						return (
							<Card className="about-card" key={`cars-${index}`}>
								<Card.Header
									title={item.title}
									thumb={
										<img
											src={item.logo}
											style={{ width: 60, height: 60 }}
											alt="logo"
										/>
									}
									extra={<span style={{ fontSize: 40 }}>{item.text}</span>}
								/>
								<Card.Body>
									<div>{item.content}</div>
									{item.img && (
										<img
											src={item.img}
											style={{ maxWidth: "100%" }}
											alt="img"
										/>
									)}
								</Card.Body>
							</Card>
						);
					})}
				</WingBlank>
				<Footer />
				{showButtomT && <FixedFooter />}
			</div>
		);
	}
}
