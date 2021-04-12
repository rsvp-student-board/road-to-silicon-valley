import { Link, LinkProps } from "@material-ui/core"
import useHyperlinkStyles from "./Hyperlink.styles"

const Hyperlink: React.FC<LinkProps> = ({ children, className, ...props }) => {
	const classes = useHyperlinkStyles()

	return (
		<Link
			target="_blank"
			rel="noopener"
			className={`${classes.root} ${className || ""}`}
			{...props}
		>
			{children}
		</Link>
	)
}

export default Hyperlink
