import {
	AppBar,
	Box,
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
import { VscClose, VscMenu } from "react-icons/vsc"
import Img from "react-optimized-image"
import pages from "../../data/pages.json"
import Logo from "../../images/logo.png"
import NavLink from "./NavLink"

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: `${theme.spacing(0.5)}px ${theme.spacing(2)}px`,
		transition: theme.transitions.create(["background-color", "box-shadow"]),
		[theme.breakpoints.down("md")]: {
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(1),
		},
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
	drawer: {
		width: "40%",
		minWidth: 300,
		paddingBottom: theme.spacing(1.5),
	},
	drawerClose: {
		padding: `${theme.spacing(1.5)}px ${theme.spacing(4.5)}px`,
		[theme.breakpoints.down("sm")]: {
			paddingLeft: theme.spacing(4),
			paddingRight: theme.spacing(4),
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
								classes={{
									paper: classes.drawer,
								}}
							>
								<Box
									display="flex"
									flexDirection="column"
									justifyContent="center"
									height="100%"
								>
									<Box
										display="flex"
										justifyContent="flex-end"
										className={classes.drawerClose}
									>
										<IconButton
											edge="start"
											color="inherit"
											aria-label="close-menu"
											onClick={toggleDrawer(false)}
										>
											<VscClose />
										</IconButton>
									</Box>
									<Box
										display="flex"
										flexDirection="column"
										justifyContent="center"
										alignItems="center"
										flexGrow={1}
									>
										{pages.map(
											(page: { display: string; path: string }, index) => (
												<div
													key={`drawer-nav-link-${index}`}
													onClick={toggleDrawer(false)}
												>
													<NavLink
														displayText={page.display}
														href={page.path}
													/>
												</div>
											)
										)}
									</Box>
								</Box>
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
