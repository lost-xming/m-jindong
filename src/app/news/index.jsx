import React, { Component } from "react";
import Header from "components/header/index";
import Footer from "components/footer/index";
import FixedFooter from "components/fixButtom/index";
import { WingBlank, List } from "antd-mobile";
import banner3 from "./../../assets/banner3.jpg";
import logo from "./../../assets/logo.png";
import "./index.less";
const { Item } = List;
const { Brief } = Item;
export default class News extends Component {
	static propTypes = {};
	static defaultProps = {};
	state = {
		showButtomT: false,
		newsList: [
			{
				title: "文章标题一",
				desc:
					"文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介",
				timer: "10：30",
				img: logo,
			},
			{
				title: "文章标题二",
				desc:
					"文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介",
				timer: "10：30",
				img: logo,
			},
			{
				title: "文章标题三",
				desc:
					"文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介",
				timer: "10：30",
				img: logo,
			},
			{
				title: "文章标题四",
				desc:
					"文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介",
				timer: "10：30",
				img: logo,
			},
			{
				title: "文章标题五",
				desc:
					"文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介",
				timer: "10：30",
				img: logo,
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
		const { showButtomT, newsList } = this.state;
		return (
			<div className="news-box">
				<Header />
				<WingBlank>
					<img
						src={banner3}
						style={{ width: "100%", marginBottom: 30 }}
						alt="banner"
					/>
					<div className="textContent">
						<span>新闻中心</span>
					</div>
					<List className="news-list">
						{newsList.map((item, index) => {
							return (
								<Item
									thumb={
										<img
											src={item.img}
											style={{ width: "1rem", height: "1rem" }}
											alt="logo"
										/>
									}
									key={`news-${index}`}
									align="top"
									extra={
										<span style={{ fontSize: "0.36rem" }}>{item.timer}</span>
									}
									multipleLine
									onClick={() => {}}
								>
									<div className="news-item">
										<span className="news-item-title">{item.title}</span>
										<Brief>
											<span className="news-content">{item.desc}</span>
										</Brief>
									</div>
								</Item>
							);
						})}
					</List>
				</WingBlank>
				<Footer />
				{showButtomT && <FixedFooter />}
			</div>
		);
	}
}
