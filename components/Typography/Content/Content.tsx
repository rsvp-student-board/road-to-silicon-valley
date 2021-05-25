import { Header } from "@/components/Typography"
import clsx from "clsx"
import { Children, cloneElement, ReactElement } from "react"
import useContentStyles from "./Content.styles"

interface ContentProps {
	header?: string
}

const Content: React.FC<ContentProps> = ({ children, header }) => {
	const classes = useContentStyles()

	const addMarginBottom = (child: ReactElement) => {
		const className = clsx(
			child.props.className,
			!child.props.className?.includes("header") &&
				!child.props.className?.includes("no-margin") &&
				classes.item
		)

		return cloneElement(child, { className })
	}

	return (
		<section className={classes.root}>
			{header && <Header>{header}</Header>}
			{Children.map(children, (child) =>
				addMarginBottom(child as ReactElement)
			)}
		</section>
	)
}

export default Content
