import React, { useState, useEffect, useRef, MutableRefObject } from 'react'
import {
	Flex as Container,
	VStack,
	Box,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
	FaJsSquare,
	FaHtml5,
	FaLinux,
	FaGithub,
	FaGitlab,
	FaGitAlt,
	FaLaravel,
	FaReact,
	FaSass,
	FaYarn,
	FaNode,
	FaNpm,
	FaPhp,
	FaCss3Alt,
	FaFigma,
	FaAndroid,
	FaTrello,
} from 'react-icons/fa'
import {
	SiExpo,
	SiPostgresql,
	SiMysql,
	SiNotion,
	SiAsana,
	SiChakraui,
	SiRedux,
	SiReduxsaga,
} from 'react-icons/si'

function TechnologyCarousel() {
	const [width, setWidth] = useState(0)
	const carouselRef = useRef() as MutableRefObject<HTMLInputElement>


	useEffect(() => {
		setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
	}, [])

	const baseIconStyle = {
		fontSize: 64,
		margin: '6px 12px',
	}

	const technologies = [
		<SiExpo key={1} style={baseIconStyle} />,
		<SiPostgresql key={2}  style={baseIconStyle}/>,
		<SiMysql key={3} style={baseIconStyle} />,
		<SiNotion key={4}  style={baseIconStyle}/>,
		<SiAsana key={5}  style={baseIconStyle}/>,
		<SiChakraui key={6}  style={baseIconStyle}/>,
		<SiRedux key={7} style={baseIconStyle} />,
		<SiReduxsaga key={8} style={baseIconStyle} />,
		<FaJsSquare key={9}  style={baseIconStyle}/>,
		<FaHtml5 key={10}  style={baseIconStyle}/>,
		<FaLinux key={11}  style={baseIconStyle}/>,
		<FaGithub key={12}  style={baseIconStyle}/>,
		<FaGitlab key={13}  style={baseIconStyle}/>,
		<FaGitAlt key={14} style={baseIconStyle} />,
		<FaLaravel key={15} style={baseIconStyle} />,
		<FaReact key={16} style={baseIconStyle} />,
		<FaSass key={17} style={baseIconStyle} />,
		<FaYarn key={18} style={baseIconStyle} />,
		<FaNode key={19} style={baseIconStyle} />,
		<FaNpm key={20} style={baseIconStyle} />,
		<FaPhp key={21} style={baseIconStyle} />,
		<FaCss3Alt key={22} style={baseIconStyle} />,
		<FaFigma key={23} style={baseIconStyle} />,
		<FaAndroid key={24} style={baseIconStyle} />,
		<FaTrello key={25} style={baseIconStyle} />,
	]

	return (
		<VStack id="work" px={[6, 6, 32]}>
			<Container
				my="auto"
				py={12}
				as={motion.div}
				minW="full"
				overflow="hidden"
				ref={carouselRef}
			>
				<Box
					as={motion.div}
					cursor="grab"
					whileTap={{ cursor: 'grabbing' }}
					display="flex"
					gap={4}
					drag="x"
					dragConstraints={{ right: 0, left: -width }}
				>
					{ technologies.map((technology) => technology) }
				</Box>
			</Container>
		</VStack>
	)
}

export default TechnologyCarousel
