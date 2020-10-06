import {
	AppBar,
	Button,
	IconButton,
	makeStyles,
	Theme,
	Toolbar,
} from "@material-ui/core"
import React from "react"
import { VscMenu } from "react-icons/vsc"
import NavLink from "./NavLink"

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}))

const Navbar: React.FC = () => {
	const classes = useStyles()

	return (
		<AppBar position="fixed" color="transparent">
			<Toolbar>
				<IconButton
					edge="start"
					className={classes.menuButton}
					color="inherit"
					aria-label="menu"
				>
					<VscMenu />
				</IconButton>
				<NavLink displayText="Home" href="/" />
				<NavLink displayText="About" href="/about" />
				<Button color="inherit">Login</Button>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
