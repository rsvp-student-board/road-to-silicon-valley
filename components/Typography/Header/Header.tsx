import { Typography } from "@material-ui/core"
import clsx from "clsx"
import useHeaderStyles from "./Header.styles"

const Header: React.FC = ({ children }) => {
	const classes = useHeaderStyles()

	return (
		<Typography variant="h3" className={clsx("header", classes.header)}>
			{children}
		</Typography>
	)
}

export default Header
