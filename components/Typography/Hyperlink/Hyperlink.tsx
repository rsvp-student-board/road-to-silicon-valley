import { Link, LinkProps } from "@material-ui/core"
import useHyperlinkStyles from "./Hyperlink.styles"

interface HyperlinkProps extends LinkProps {
	external?: boolean
}

const Hyperlink: React.FC<HyperlinkProps> = ({
	children,
	className,
	external,
	...props
}) => {
	const externalProps = external ? { target: "_blank", rel: "noopener" } : {}

	const classes = useHyperlinkStyles()

	return (
		<Link
			{...externalProps}
			className={`${classes.root} ${className || ""}`}
			{...props}
		>
			{children}
		</Link>
	)
}

export default Hyperlink
