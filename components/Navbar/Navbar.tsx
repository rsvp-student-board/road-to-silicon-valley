import {
	AppBar,
	IconButton,
	makeStyles,
	SwipeableDrawer,
	Theme,
	Toolbar,
	useMediaQuery,
	useScrollTrigger,
} from "@material-ui/core"
import Link from "next/link"
import React, { useState } from "react"
import { VscMenu } from "react-icons/vsc"
import Img from "react-optimized-image"
import pages from "../../data/pages.json"
import Logo from "../../images/logo.png"
import NavLink from "./NavLink"

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
		transition: theme.transitions.create(["background-color", "box-shadow"]),
	},
	brandContainer: {
		flexGrow: 1,
	},
	brand: {
		cursor: "pointer",
		width: 50,
		height: 50,
		opacity: 0.9,
		transition: theme.transitions.create(["opacity", "transform"]),
		"&:hover, &:focus": {
			opacity: 1,
		},
		"&:active": {
			transform: "scale(0.9)",
		},
	},
}))

interface ElevationBackgroundScrollProps {
	children: React.ReactElement
}

const ElevationBackgroundScroll: React.FC<ElevationBackgroundScrollProps> = ({
	children,
}) => {
	const trigger = useScrollTrigger({ threshold: 75, disableHysteresis: true })

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
		color: trigger ? "default" : "transparent",
	})
}

const Navbar: React.FC = () => {
	const classes = useStyles()
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
	const smallScreen = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down("md")
	)

	const toggleDrawer = (open: boolean) => (
		event: React.KeyboardEvent | React.MouseEvent
	) => {
		if (
			event &&
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" ||
				(event as React.KeyboardEvent).key === "Shift")
		) {
			return
		}
		setDrawerOpen(open)
	}

	return (
		<ElevationBackgroundScroll>
			<AppBar position="fixed" className={classes.root}>
				<Toolbar>
					<div className={classes.brandContainer}>
						<Link href="/" passHref>
							<a>
								<Img src={Logo} className={classes.brand} />
							</a>
						</Link>
					</div>
					{smallScreen ? (
						<>
							<IconButton
								edge="start"
								color="inherit"
								aria-label="menu"
								onClick={toggleDrawer(true)}
							>
								<VscMenu />
							</IconButton>
							<SwipeableDrawer
								anchor="right"
								color="default"
								open={drawerOpen}
								onClose={toggleDrawer(false)}
								onOpen={toggleDrawer(true)}
								disableBackdropTransition={!iOS}
								disableDiscovery={iOS}
							>
								<h1>Hello</h1>
							</SwipeableDrawer>
						</>
					) : (
						<>
							{pages.map((page: { display: string; path: string }, index) => (
								<NavLink
									key={`nav-link-${index}`}
									displayText={page.display}
									href={page.path}
								/>
							))}
						</>
					)}
				</Toolbar>
			</AppBar>
		</ElevationBackgroundScroll>
	)
}

export default Navbar
