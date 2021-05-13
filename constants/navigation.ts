import { NavItem } from "./interfaces"
export const NAV_ITEMS: NavItem[] = [
	{
		title: "About",
		path: "/about",
	},
	{
		title: "Students",
		sublist: [
			{
				title: "Cohort Recruitment",
				path: "/recruitment",
			},
			{
				title: "Active Members",
				path: "/members",
			},
			{
				title: "Notable Alumni",
				path: "/alumni",
			},
		],
	},
	{
		title: "Get Involved",
		path: "/involvement",
	},
	{
		title: "Leadership",
		sublist: [
			{
				title: "Corporate Advisory Board",
				path: "/partners",
			},
			{
				title: "Executive Team",
				path: "/executive-team",
			},
			{
				title: "Student Executive Board",
				path: "/student-board",
			},
		],
	},

	{
		title: "Gallery",
		path: "/gallery",
	},
	{
		title: "Contact",
		path: "/contact",
	},
]
