import React from 'react'

import {
	Flex as Container,
	Heading,
	useColorModeValue,
	Box,
	// Text,
	// Center,
	// useBreakpointValue,
	VStack,
} from '@chakra-ui/react'
// import Link from 'next/link'
// import Image from 'next/image'
import ProjectCard from '../../ProjectCard'

import PROJECTS from './projects'

function Projects() {

	return (
		<VStack
			id='projects'
			minH='100vh'
			px={[6, 6, 32]}
		>
			<Container
				my='auto'
				w='full'
				direction='column'
			>
				<Heading
					maxW='fit-content'
					lineHeight={1}
					color={useColorModeValue('brand.base-color-1', '#E3CEDB')}
					fontSize={['3xl', '2xl', '5xl', '6xl']}
				>
					Projects.
				</Heading>
				<Box
					mt={2}
					height='6px'
					width='256px'
					bgColor='brand.base-main'
					borderColor='brand.base-accent'
					borderWidth='1px'
				/>
				{
					PROJECTS.map((project, idx) =>
						<ProjectCard
							key={idx}
							title={project.title}
							description={project.description}
							technologies={project.technologies}
							reverse={(idx % 2) !== 0}
						/>
					)
				}
			</Container>
		</VStack>
	)
}

export default Projects