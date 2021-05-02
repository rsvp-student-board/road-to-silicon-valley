import { NavItem } from "./interfaces"
export const NAV_ITEMS: NavItem[] = [
	{
		title: "About Us",
		path: "/about",
	},
	{
		title: "Get Involved",
		path: "/get-involved",
	},
	{
		title: "Cohort Recruitment",
		path: "/recruitment",
	},
	{
		title: "Students",
		sublist: [
			{
				title: "Student Executive Board",
				path: "/student-board",
			},
			{
				title: "Active Members",
				path: "/active-members",
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
