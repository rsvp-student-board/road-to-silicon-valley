import Logo from "@/images/logo.svg"
import {
	AppBar,
	Drawer,
	Theme,
	Toolbar,
	useMediaQuery,
} from "@material-ui/core"
import Link from "next/link"
import { useEffect, useState } from "react"
import DrawerToggle from "./DrawerToggle"
import useNavbarStyles from "./Navbar.styles"
import NavMenu from "./NavMenu"

const Navbar: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false)
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleScroll = () => {
		setIsScrolled(window.pageYOffset > 75)
	}

	const toggleDrawer = () => {
		setIsOpen(!isOpen)
	}

	const closeDrawer = () => {
		setIsOpen(false)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		handleScroll()
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const classes = useNavbarStyles({ isOpen, isScrolled })
	const isWiderThanSmall = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.up("md")
	)

	return (
		<AppBar position="fixed" elevation={0} className={classes.root}>
			<Toolbar className={classes.toolbar}>
				<Link href="/" passHref>
					<Logo onClick={closeDrawer} className={classes.logo} />
				</Link>
				<DrawerToggle isOpen={isOpen} toggleDrawer={toggleDrawer} />
				{isWiderThanSmall ? (
					<NavMenu closeDrawer={closeDrawer} />
				) : (
					<Drawer
						open={isOpen}
						onClose={closeDrawer}
						anchor="right"
						elevation={8}
						classes={{ paper: classes.drawer }}
					>
						<NavMenu closeDrawer={closeDrawer} />
					</Drawer>
				)}
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
