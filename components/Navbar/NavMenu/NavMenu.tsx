import { NAV_ROUTES } from "@/constants"
import { Box } from "@material-ui/core"
import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import NavLink from "./NavLink"
import useNavMenuStyles from "./NavMenu.styles"

interface NavMenuProps {
	isScrolled: boolean
	closeDrawer: () => void
}

const NavMenu: React.FC<NavMenuProps> = ({ isScrolled, closeDrawer }) => {
	const router = useRouter()
	const classes = useNavMenuStyles()

	return (
		<Box
			component="nav"
			display="flex"
			alignItems="center"
			height="100%"
			className={classes.root}
		>
			{NAV_ROUTES.map((navRoute, index) => (
				<Link href={navRoute.path} passHref key={`nav-item-${index}`}>
					<NavLink
						title={navRoute.title}
						active={router.pathname === navRoute.path}
						isScrolled={isScrolled}
						onClick={closeDrawer}
					/>
				</Link>
			))}
		</Box>
	)
}

export default NavMenu
