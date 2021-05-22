import { FaRegHandshake } from "react-icons/fa"
import {
	HiOutlineBriefcase,
	HiOutlineDesktopComputer,
	HiOutlineLightBulb,
} from "react-icons/hi"
import { IoBusinessOutline } from "react-icons/io5"
import { Discipline, Offer } from "./interfaces"

export const WHAT_IS_RSVP = [
	"The Road to Silicon V/Alley Program (RSVP) paves the way for students to become leaders in innovation (intrapreneurship) and entrepreneurship in a digital age. Rutgers Business School is working with university partners to be at the forefront of enhancing the educational opportunities for students across Rutgers University.",
	"Outside of the program’s curriculum, students, faculty, corporate partners, and alumni connect and collaborate to create a think-tank of inventive and modernized solutions for tomorrow’s society. Corporate partners leverage this program to find a talent pool of Rutgers intrapreneurs, innovators, and creatives who have developed strong technical skills, business acumen, and critical soft skills. Additionally, their contributions to the design of the curriculum help shape future business innovators.",
	"The program follows a experiential and multidisciplinary model that focuses in technology and business acumen, intrapreneurship, entrepreneurship, and success skills.",
]

export const DISCIPLINES: Array<Discipline> = [
	{
		title: "Technology Acumen",
		icon: <HiOutlineDesktopComputer />,
	},
	{
		title: "Business Acumen",
		icon: <HiOutlineBriefcase />,
	},
	{
		title: "Success Skills",
		icon: <FaRegHandshake />,
	},
	{
		title: "Intrapreneurship",
		icon: <IoBusinessOutline />,
	},
	{
		title: "Entrepreneurship",
		icon: <HiOutlineLightBulb />,
	},
]

export const WHAT_RSVP_OFFERS: Array<Offer> = [
	{
		title: "To Students",
		items: [
			{
				title: "Access to experiential learning",
				note: "Technology acumen, business acumen, success skills, intrapreneurship, entrepreneurship",
			},
			{
				title: "Industry and alumni networks",
			},
			{
				title: "Career advancement",
				note: "Internships, co-ops, and full-time positions",
			},
			{
				title: "Funding",
				note: "Ideas, projects, and ventures",
			},
			{
				title: "Connections with like-minded peers",
			},
			{
				title: "Key skills and tool training",
				note: "Interview prep, resume reviews",
			},
		],
	},
	{
		title: "To Partners",
		items: [
			{
				title: "Pipeline to top-talent and industry-ready students",
			},
			{
				title: "Opportunity to join Advisory Board",
				note: "Involvement in curriculum design, mentorship program, etc.",
			},
			{
				title: "Opportunity to support RSVP initiatives",
			},
			{
				title: "Sponsorship and marketing",
			},
			{
				title:
					"Network of top firms, industry experts, and public/private partners",
			},
			{
				title: "Access to investment opportunities",
			},
		],
	},
]

export const MUKESH = "Founding Director, Mukesh M. Patel"

export const MUKESH_BIO =
	"Professor Mukesh M. Patel is the founding director of RSVP, as well as a serial entrepreneur with experience in private equity angel investments, innovation, business law, and education. As a professor at Rutgers Business School and recipient of the Presidential Award for Excellence in Innovative Education, he designs and teaches groundbreaking, experiential and interdisciplinary courses at both undergraduate and graduate levels, across schools including business, law, engineering, and STEM."
