import ContentContainer from "@/components/Layout/ContentContainer"
import Hero from "@/components/Layout/HeroLayout/Hero"
import { Box } from "@material-ui/core"
import { NextSeo } from "next-seo"

type HeroLayoutProps = {
	imgBase64: string
	imgSrc: string
	imgPosition?: string
	content?: {
		description?: string
		subtitle?: string
		numbers?: { title: string; number: number }[]
	}
} & (
	| { title: string; heroTitle?: never; seoTitle?: never }
	| { title?: never; heroTitle: string; seoTitle: string }
) & {
		boxClassName?: string
		containerClassName?: string
	}

const HeroLayout: React.FC<HeroLayoutProps> = ({
	title,
	imgBase64,
	imgSrc,
	imgPosition,
	heroTitle,
	seoTitle,
	children,
	content,
	boxClassName,
	containerClassName,
}) => {
	return (
		<>
			<NextSeo title={seoTitle || title || ""} />
			<Box component="main" minHeight="calc(100vh - 82px)">
				<Hero
					title={heroTitle || title || ""}
					content={content}
					imgBase64={imgBase64}
					imgSrc={imgSrc}
					imgPosition={imgPosition}
				/>
				<ContentContainer
					boxClassName={boxClassName}
					containerClassName={containerClassName}
				>
					{children}
				</ContentContainer>
			</Box>
		</>
	)
}

export default HeroLayout
