import { BsFillBriefcaseFill } from "react-icons/bs"
import { FaMedal, FaPiggyBank, FaUserTie } from "react-icons/fa"
import { IoAirplane, IoSchool } from "react-icons/io5"
import { RiSlideshowFill } from "react-icons/ri"
import { MembershipBenefit } from "./interfaces"

export const APPLY_NOW =
	"The Road to Silicon V/Alley Program is currently recruiting for Cohort 3! See below for the benefits of becoming a cohort member and a brief outline of the recruitment process. Written applications are due at 11:59pm on Friday, October 8."

export const MEMBERSHIP_INTRO =
	"A new cohort of students is inducted into the Road to Silicon V/Alley Program every fall semester. In addition to being introduced to a extensive network of entrepreneurial and innovative peers, cohort members gain access to all of the following benefits:"

export const MEMBERSHIP_BENEFITS: Array<MembershipBenefit> = [
	{
		title: "Curriculum",
		description:
			"All cohort members of RSVP will enroll in core classes, which involve training in business acumen and success skills. The core curriculum also branches off into different tracks, including Product Management, Data Analytics, Software Engineering, and more. Currently, the curriculum is hosted via Coursera, through which cohort members are able to access pre-selected courses completely for free.",
		icon: <IoSchool />,
	},
	{
		title: "Workshops",
		description:
			"Workshops entail professionals from industry-leading companies coming to talk to RSVP students about very specific topics that aren’t normally covered in school or sometimes even the workplace. They provide great opportunities for students to go beyond traditional knowledge in the tracks of the curriculum and be outstanding candidates for entrepreneurial or track-related roles.",
		icon: <RiSlideshowFill />,
	},
	{
		title: "Mentorship",
		description:
			"Cohort members will receive guidance from industry professionals and/or Rutgers alumni so that they can advance their careers. These mentors are established and invaluable resources for RSVP students.",
		icon: <FaUserTie />,
	},
	{
		title: "Career Preparation",
		description:
			"Through resume building sessions, interview coaching, and networking opportunites, cohort members will receive a leg up in their recruiting efforts. RSVP also hosts multiple speaker series events as well, so students can be exposed to first-hand accounts of the requirements for success in relevant roles.",
		icon: <BsFillBriefcaseFill />,
	},
	{
		title: "Venture Fund",
		description:
			"Investments from individual and corporate partners fuel the Venture Fund, a majority of which is channeled to cohort members who have ideas worth exploring. RSVP hopes to provide cohort members the resources necessary to realize their ideas and transform Rutgers into a true entrepreneurial hub.",
		icon: <FaPiggyBank />,
	},
	{
		title: "Case Competition Preparation",
		description:
			"RSVP encourages its cohort members to participate in case competitions, especially innovation-based ones like the Hult Prize competition. Additionally, cohort members are given resources and guidance to best prepare for these competitions.",
		icon: <FaMedal />,
	},
	{
		title: "Conferences and Trips",
		description:
			"RSVP organizes and funds trips and conferences for its students. In the past, cohort members have visited Bell Labs in Holmdell, NJ and Start-Up Grind in Redwood City, CA.",
		icon: <IoAirplane />,
	},
]

export const RECRUITMENT_INFO = [
	"All students are welcome to apply to the Road to Silicon V/Alley Program. There are no requirements in terms of GPA, graduation year, major, etc. No background in technology or entrepreneurship is necessary.",
	"The recruitment process consists of a written application and a group activity. Candidates are judged by their ambition and passion to contribute to innovation at and beyond Rutgers University. Students accepted into RSVP are creative and express a strong desire to learn.",
]
