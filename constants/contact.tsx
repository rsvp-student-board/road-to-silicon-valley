import {
	AiOutlineInstagram,
	AiOutlineLinkedin,
	AiOutlineMail,
} from "react-icons/ai"
import { ContactItem } from "./interfaces"

export const DONATION_URL =
	"https://securelb.imodules.com/s/896/giving19/interior.aspx?sid=896&gid=1&pgid=2138&cid=3975&bledit=1&dids=1824.1981.831&sort=1"

export const CONTACT_ITEMS: ContactItem[] = [
	{
		title: "Instagram",
		url: "https://www.instagram.com/roadtosiliconvalley/",
		icon: <AiOutlineInstagram />,
	},
	{
		title: "LinkedIn",
		url: "https://www.linkedin.com/company/road-to-silicon-valley/",
		icon: <AiOutlineLinkedin />,
	},
	{
		title: "Email",
		url: "mailto:rsvpmarketingpr@gmail.com",
		icon: <AiOutlineMail />,
	},
]
