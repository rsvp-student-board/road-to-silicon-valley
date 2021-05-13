import {
	Button as MuiButton,
	ButtonProps as MuiButtonProps,
} from "@material-ui/core"
import clsx from "clsx"
import useButtonStyles from "./Button.styles"

interface ButtonProps extends MuiButtonProps {
	bgColor?: "white" | "black"
	target?: string
	rel?: string
}

const Button: React.FC<ButtonProps> = ({
	children,
	bgColor,
	className,
	...props
}) => {
	const classes = useButtonStyles({ bgColor: bgColor || "white" })

	return (
		<MuiButton {...props} className={clsx(className, classes.root)}>
			{children}
		</MuiButton>
	)
}

export default Button
