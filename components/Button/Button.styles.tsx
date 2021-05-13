import { makeStyles } from "@material-ui/core/styles"

interface ButtonStylesProps {
	bgColor: "light" | "dark"
	plain?: boolean
}

const useButtonStyles = makeStyles((theme) => ({
	root: {
		borderRadius: 0,
		color: (props: ButtonStylesProps) =>
			props.bgColor === "light"
				? theme.palette.common.black
				: theme.palette.common.white,
		borderColor: (props: ButtonStylesProps) =>
			props.bgColor === "light"
				? theme.palette.common.black
				: theme.palette.common.white,
		backgroundColor: "transparent",
		letterSpacing: 1,
		fontSize: theme.typography.fontSize,
		transition: theme.transitions.create([
			"color",
			"border-color",
			"background-color",
		]),
		"&:hover, &:focus": {
			borderColor: (props: ButtonStylesProps) =>
				props.bgColor === "light"
					? props.plain
						? theme.palette.common.black
						: theme.palette.primary.main
					: props.plain
					? theme.palette.common.white
					: theme.palette.secondary.main,
			backgroundColor: (props: ButtonStylesProps) =>
				props.bgColor === "light"
					? props.plain
						? theme.palette.common.black
						: theme.palette.primary.main
					: props.plain
					? theme.palette.common.white
					: theme.palette.secondary.main,
			color: (props: ButtonStylesProps) =>
				props.bgColor === "light"
					? theme.palette.common.white
					: theme.palette.common.black,
		},
	},
}))

export default useButtonStyles
