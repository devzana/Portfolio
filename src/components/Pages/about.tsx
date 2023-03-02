import React from 'react'

import {
	Flex as Container,
	Heading,
	useColorModeValue,
	Box,
	Text,
	Center,
	useBreakpointValue,
	VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

function About() {

	const bgImageColorMode = useColorModeValue('/me-web-light.png', '/me-web-dark.png')

	const bgImageElement = useBreakpointValue([
		(
			<Image
				key={1}
				src={bgImageColorMode}
				width={100}
				height={100}
				quality={100}
				alt='its me'
			/>
		),
		(
			<Image
				key={2}
				src={bgImageColorMode}
				width={200}
				height={200}
				quality={100}
				alt='its me'
			/>
		),
		(
			<Image
				key={2}
				src={bgImageColorMode}
				width={200}
				height={200}
				quality={100}
				alt='its me'
			/>
		),
		(
			<Center key={3}>
				<Image
					src={bgImageColorMode}
					width={400}
					height={400}
					quality={100}
					alt='its me'
				/>
			</Center>
		)
	])

	return (
		<VStack
			id='about'
			minH='100vh'
			px={[6, 6, 32]}
		>
			<Container
				my='auto'
				direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
			>
				<Box
					minW={['full','50%']}
				>
					<Heading
						maxW='fit-content'
						lineHeight={1}
						color={useColorModeValue('brand.base-color-1', '#E3CEDB')}
						fontSize={['3xl', '2xl', '5xl', '6xl']}
					>
						About Me.
					</Heading>
					<Box
						mt={2}
						height='6px'
						width='256px'
						bgColor='brand.base-main'
						borderColor='brand.base-accent'
						borderWidth='1px'
					/>
					<Text
						w='full'
						py={4} pr={6}
						fontSize={['sm', 'sm', 'md', 'md', 'lg']}>
						Hello, I&apos;m Sean Christian Lozana a <strong>Software Engineer</strong> based in the Philippines,
						I&apos;m currently furthering my career by making software solutions using modern technologies
						on both front and back ends at <strong> Stratpoint Technologies</strong>,
						I aim to become a well rounded developer (Full-stack) that is able to adapt quickly to the changes
						of the future at the same time deliver quality software solutions.
					</Text>
					<Text
						w='full'
						py={4} pr={6}
						fontSize={['sm', 'sm', 'md', 'md', 'lg']}>
						I&apos;m also an avid fan of anime, you can checkout the anime&apos;s
						I&apos;m currently (re)watching <Text fontWeight='bold' as={Link} href='/anime'>here</Text>. I also do gaming, RTS and FPS games specifically,
						you can also check out the games I&apos;m playing <Text fontWeight='bold' as={Link} href='/games'>here</Text>.
					</Text>
				</Box>
				<Box
					mt={[0, -20]}
					py={6}
					minW={['full', '50%']}
				>
					{ bgImageElement }
				</Box>
			</Container>
		</VStack>
	)
}

export default About