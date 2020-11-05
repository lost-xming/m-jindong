import asyncComponent from "../components/asyncComponent";
import Home from "../app/home/index";
const About = asyncComponent(() => import("./../app/about/index"));
const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
		exact: true,
	},
	{
		path: "/about",
		name: "about",
		component: About,
		// routes: [
		// 	// {
		// 	// 	path: "/new/",
		// 	// 	component: NewContent,
		// 	// }
		// ],
	},
];

export default routes;
