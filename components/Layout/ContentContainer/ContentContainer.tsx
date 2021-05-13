import { Box, Container, Grid, Theme, useMediaQuery } from "@material-ui/core"
import clsx from "clsx"
import { Children, cloneElement, ReactElement } from "react"
import useContentContainerStyles from "./ContentContainer.styles"

interface ContentContainerProps {
	boxClassName?: string
	containerClassName?: string
}

const ContentContainer: React.FC<ContentContainerProps> = ({
	children,
	boxClassName,
	containerClassName,
}) => {
	const classes = useContentContainerStyles()
	const isMediumScreen = useMediaQuery((theme: Theme) =>
		theme.breakpoints.up("md")
	)

	const addSectionComponent = (child: ReactElement) => {
		const component = child.props.component || "section"

		return cloneElement(child, { component })
	}

	return (
		<Box width="100%" bgcolor="background.default" className={boxClassName}>
			<Container
				maxWidth="lg"
				className={clsx(classes.root, containerClassName)}
			>
				<Container maxWidth="md">
					<Grid container spacing={isMediumScreen ? 5 : 4}>
						{Children.map(children, (child) =>
							addSectionComponent(child as ReactElement)
						)}
					</Grid>
				</Container>
			</Container>
		</Box>
	)
}

export default ContentContainer
