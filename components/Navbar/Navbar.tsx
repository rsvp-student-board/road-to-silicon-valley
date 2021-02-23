import {
	AppBar,
	Drawer,
	Theme,
	Toolbar,
	useMediaQuery,
} from "@material-ui/core"
import Image from "next/image"
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
	const isMediumScreen = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.up("md")
	)

	return (
		<AppBar position="fixed" elevation={0} className={classes.root}>
			<Toolbar className={classes.toolbar}>
				<Link href="/">
					<Image
						src="/images/logo.png"
						height="48"
						width="48"
						className={classes.logo}
					/>
				</Link>
				<DrawerToggle
					isOpen={isOpen}
					isScrolled={isScrolled}
					toggleDrawer={toggleDrawer}
				/>
				{isMediumScreen ? (
					<NavMenu isScrolled={isScrolled} closeDrawer={closeDrawer} />
				) : (
					<Drawer
						open={isOpen}
						onClose={closeDrawer}
						anchor="top"
						elevation={8}
						classes={{ paper: classes.drawer }}
					>
						<NavMenu isScrolled={isScrolled} closeDrawer={closeDrawer} />
					</Drawer>
				)}
			</Toolbar>
		</AppBar>
	)
}

export default Navbar