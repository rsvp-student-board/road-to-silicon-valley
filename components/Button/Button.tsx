import {
	Button as MuiButton,
	ButtonProps as MuiButtonProps,
} from "@material-ui/core"
import clsx from "clsx"
import useButtonStyles from "./Button.styles"

interface ButtonProps extends MuiButtonProps {
	bgColor?: "light" | "dark"
	target?: string
	rel?: string
	plain?: boolean
}

const Button: React.FC<ButtonProps> = ({
	children,
	bgColor,
	className,
	plain,
	...props
}) => {
	const classes = useButtonStyles({ bgColor: bgColor || "light", plain })

	return (
		<MuiButton {...props} className={clsx(className, classes.root)}>
			{children}
		</MuiButton>
	)
}

export default Button
