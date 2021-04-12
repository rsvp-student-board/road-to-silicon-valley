import { FaRegHandshake } from "react-icons/fa"
import {
	HiOutlineBriefcase,
	HiOutlineDesktopComputer,
	HiOutlineLightBulb,
} from "react-icons/hi"
import { IoBusinessOutline } from "react-icons/io5"
import { Discipline, InvolvementOpportunity } from "./interfaces"

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

export const MISSION =
	"Empowering Rutgers students to create pathways to leadership opportunities at innovative companies and pursue entrepreneurial ambitions."

export const MISSION_DESCRIPTION =
	'A considerable number of entrepreneurial and technology-based firms look to Rutgers University for their talent recruitment, but RSVP recognizes that the presence of Rutgers students in these industries can be even more substantial. This organization aims to capitalize on the potential of Rutgers students and maximize innovation and technological skill on campus. The slash between the V and the A in "Road to Silicon V/Alley" signifies the widespread nature of the entrepreneurial hubs in America, ranging from the west coast (Silicon Valley) to the east coast (Silicon Alley) — RSVP wants to ensure that Rutgers students have the ability to make an impact anywhere in this spectrum.'

export const INVOLVEMENT_OPPORTUNITIES: Array<InvolvementOpportunity> = [
	{
		title: "Mentoring RSVP Students",
		description:
			"Lend your experience by mentoring a student interested in tech and innovation — help them navigate course selections, career preparation, and internship opportunities.",
	},
	{
		title: "Hosting Site Visits and Workshops",
		description:
			"Open the doors of your company to a group of RSVP students, sharing knowledge about your industry and allowing them to experience a day in the life of a professional innovator.",
	},
	{
		title: "Providing Internships and Jobs",
		description:
			"Hire an RSVP student at your company, for a summer internship or a full-time job.",
	},
	{
		title: "Investing in Student Ventures",
		description:
			"Want to partner directly with RU student entrepreneurs? Invest in a student-led start-up.",
	},
	{
		title: "Joining the Road to Silicon V/Alley Board",
		description:
			"Ready for a leadership position? Join the RSVP board and open doors for innovators and create collaborative opportunities and partnerships for significant impact.",
	},
]

export const MUKESH = "Founding Director, Mukesh M. Patel"

export const MUKESH_BIO =
	"Professor Mukesh M. Patel is the founding director of RSVP, as well as a serial entrepreneur with experience in private equity angel investments, innovation, business law, and education. As a professor at Rutgers Business School and recipient of the Presidential Award for Excellence in Innovative Education, he designs and teaches groundbreaking, experiential and interdisciplinary courses at both undergraduate and graduate levels, across schools including business, law, engineering, and STEM."
