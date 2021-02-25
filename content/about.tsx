import { FaRegHandshake } from "react-icons/fa"
import {
	HiOutlineBriefcase,
	HiOutlineDesktopComputer,
	HiOutlineLightBulb,
} from "react-icons/hi"
import { IoBusinessOutline } from "react-icons/io5"
import { Discipline } from "./interfaces"

export const WHAT_IS_RSVP = [
	"The Road to Silicon V/Alley Program (RSVP) paves the way for students to become leaders in innovation (intrapreneurship) and entrepreneurship in a digital age. Rutgers Business School is working with university partners to be at the forefront of enhancing the educational opportunities for students across Rutgers University.",
	"Outside of the program’s curriculum, students, faculty, corporate partners, and alumni connect and collaborate to create a think-tank of inventive and modernized solutions for tomorrow’s society. Corporate partners leverage this program to find a talent pool of Rutgers intrapreneurs, innovators, and creatives who have developed strong technical skills, business acumen, and critical soft skills. Additionally, their contributions to the design of the curriculum help shape future business innovators.",
	"The program follows a experiential and multidisciplinary model that focuses in five key areas.",
]

export const DISCIPLINES: Discipline[] = [
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
