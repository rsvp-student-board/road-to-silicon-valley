import { FaMoneyBillWave } from "react-icons/fa"
import { GiOrganigram } from "react-icons/gi"
import { HiLightBulb } from "react-icons/hi"
import { IoPeopleSharp } from "react-icons/io5"
import { InvolvementCategory, InvolvementOpportunity } from "./interfaces"

export const INVOLVEMENT_CATEGORIES: InvolvementCategory[] = [
	{
		title: "Network Capital",
		icon: <GiOrganigram />,
		description: "Connections with innovative public & private companies",
	},
	{
		title: "Intellectual Capital",
		icon: <HiLightBulb />,
		description:
			"Multidisciplinary curriculum & experiential education in leading sectors",
	},
	{
		title: "Human Capital",
		icon: <IoPeopleSharp />,
		description: "Mentorship from alumni, industry, & faculty experts",
	},
	{
		title: "Financial Capital",
		icon: <FaMoneyBillWave />,
		description:
			"Funds to support university affiliated startups & initiatives",
	},
]

export const MENTORSHIP_FIELDS = [
	"Fintech",
	"Consulting",
	"Venture Capital",
	"Entrepreneurship",
	"Computer Science",
	"Biotech",
]

export const INVOLVEMENT_OPPORTUNITIES: Array<InvolvementOpportunity> = [
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
			"Ready for a leadership position? Join the RSVP board to open doors for innovators and create collaborative opportunities and partnerships for significant impact.",
	},
]
