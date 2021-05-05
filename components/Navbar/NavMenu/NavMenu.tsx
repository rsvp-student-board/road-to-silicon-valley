import { Box } from "@material-ui/core"
import { NAV_ITEMS } from "constants/navigation"
import { useRouter } from "next/dist/client/router"
import NavItem from "./NavItem"
import useNavMenuStyles from "./NavMenu.styles"

interface NavMenuProps {
	closeDrawer: () => void
}

const NavMenu: React.FC<NavMenuProps> = ({ closeDrawer }) => {
	const router = useRouter()
	const classes = useNavMenuStyles()

	return (
		<Box component="nav" display="flex" height="100%" className={classes.root}>
			{NAV_ITEMS.map((navItem) => (
				<NavItem
					navItem={navItem}
					activePath={router.pathname}
					onClick={closeDrawer}
					key={`nav-item-${navItem.title}`}
				/>
			))}
		</Box>
	)
}

export default NavMenu
