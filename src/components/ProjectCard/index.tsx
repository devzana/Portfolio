import React from 'react'
import {
	Box,
	Container,
	Flex,
	Heading,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import ListOfIconTechnologies from './technologyList'
import { motion } from 'framer-motion'

type Props = {
	title: string,
  description: string,
  technologies: string[],
	reverse: boolean,
}

function ProjectCard({ title, description, technologies, reverse }: Props) {
	return (
		<Container
			minW='full'
			py={8}
			my={6}
			borderColor={useColorModeValue('brand.base-dark', 'brand.base-light')}
			borderWidth='2px'
			rounded='lg'
		>
			<Flex
				direction={['column', `row${reverse ? '-reverse' : ''}`]}
			>
				<Flex
					minW='50%'
					direction='column'
				>
					<Text
						color={useColorModeValue('brand.base-color-1', '#E3CEDB')}
						fontWeight='semibold'
					>
						Featured
					</Text>
					<Heading> { title } </Heading>
					<Flex
						direction='column'
						my={2}
						minW='full'
					>
						<Text> { description } </Text>
						<Flex mt={2} maxW='50%' overflow='auto'>
							{ technologies.map((tech) => ListOfIconTechnologies[tech]) }
						</Flex>
					</Flex>
				</Flex>
				<Box
					as={motion.div}
					whileHover={{ scale: 1.01 }}
					cursor='pointer'
					minH='300px'
					maxH='300px'
					minW='50%'
					rounded='lg'
					mx={6}
					bgColor='brand.base-dark'
					boxShadow='2xl'
				/>
			</Flex>
		</Container>
	)
}

export default ProjectCard