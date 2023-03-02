import React from 'react'

import {
	Flex as Container,
	Heading,
	useColorModeValue,
	Box,
	Text,
	VStack,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	useBreakpointValue,
} from '@chakra-ui/react'

function Work() {
	return (
		<VStack
			id='work'
			minH='100vh'
			px={[6, 6, 32]}
		>
			<Container
				w='full'
				my='auto'
				direction='column'
			>
				<Heading
					maxW='fit-content'
					lineHeight={1}
					color={useColorModeValue('brand.base-color-1', '#E3CEDB')}
					fontSize={['3xl', '2xl', '5xl', '6xl']}
				>
              Experiences.
				</Heading>
				<Box
					mt={2}
					h='6px'
					w={['65%','35%']}
					bgColor='brand.base-main'
					borderColor='brand.base-accent'
					borderWidth='1px'
				/>
				<Tabs
					defaultIndex={2}
					size={['sm', 'lg']}
					py={2}
					style={{ overflowX: 'hidden' }}
					variant='unstyled'
					isFitted
				>
					<TabList
						style={{ overflowX: 'auto', overflowY: 'hidden' }}
						py={2}
					>
						<Tab
							_selected={{
								WebkitTextStroke: useBreakpointValue([0.5, 1]),
								WebkitTextStrokeColor: '#393437',
								filter: 'drop-shadow(0.1rem 0.1rem 0.01rem rgba(0, 0, 0, 0.25))',
								color: 'brand.base-main',
								fontSize: useBreakpointValue(['16px', '24px']),
								bgColor: 'brand.base-light',
								borderColor: 'none',
							}}
							_hover={{
								WebkitTextStroke: useBreakpointValue([0.5, 1]),
								WebkitTextStrokeColor: '#393437',
								filter: 'drop-shadow(0.1rem 0.1rem 0.01rem rgba(0, 0, 0, 0.25))',
								color: 'brand.base-main',
								fontSize: useBreakpointValue(['16px', '24px']),
							}}
							fontWeight='bold'
							rounded='lg'
						>
							Nexplay
						</Tab>
						<Tab
							_selected={{
								WebkitTextStroke: useBreakpointValue([0.5, 1]),
								WebkitTextStrokeColor: '#393437',
								filter: 'drop-shadow(0.1rem 0.1rem 0.01rem rgba(0, 0, 0, 0.25))',
								color: 'brand.base-main',
								fontSize: useBreakpointValue(['16px', '24px']),
								bgColor: 'brand.base-light',
								borderColor: 'none',
							}}
							_hover={{
								WebkitTextStroke: useBreakpointValue([0.5, 1]),
								WebkitTextStrokeColor: '#393437',
								filter: 'drop-shadow(0.1rem 0.1rem 0.01rem rgba(0, 0, 0, 0.25))',
								color: 'brand.base-main',
								fontSize: useBreakpointValue(['16px', '24px']),
								borderColor: 'none',
							}}
							fontWeight='bold'
							rounded='lg'
						>
							Blueabeans
						</Tab>
						<Tab
							_selected={{
								WebkitTextStroke: useBreakpointValue([0.5, 1]),
								WebkitTextStrokeColor: '#393437',
								filter: 'drop-shadow(0.1rem 0.1rem 0.01rem rgba(0, 0, 0, 0.25))',
								color: 'brand.base-main',
								bgColor: 'brand.base-light',
								fontSize: useBreakpointValue(['16px', '24px']),
								borderColor: 'none',
							}}
							_hover={{
								WebkitTextStroke: useBreakpointValue([0.5, 1]),
								WebkitTextStrokeColor: '#393437',
								filter: 'drop-shadow(0.1rem 0.1rem 0.01rem rgba(0, 0, 0, 0.25))',
								color: 'brand.base-main',
								fontSize: useBreakpointValue(['16px', '24px']),
								borderColor: 'none',
							}}
							fontWeight='bold'
							rounded='lg'
						>
							Stratpoint
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Text
								w='full'
								fontSize={['sm', 'xl']}
								fontWeight='bold'
							>
								Frontend Developer Intern <span style={{ color: '#F093AF' }}>@ NEXPLAY</span>
							</Text>
							<Text
								w='full'
								fontSize={['sm', 'xl']}
								fontWeight='light'
							>
								Oct 2021 - Feb 2022
							</Text>
							<Text
								w='full'
								fontSize={['sm', 'xl']}
							>
								● Collaborated with the design and back-end team to upgrade their Internal Admin Dashboard
								<br />
								● Skillfully implemented pages and components according to their design specification
								<br />
								● Leveraged new front-end technologies through continuous learning and exploration
							</Text>
						</TabPanel>
						<TabPanel>
							<Text
								w='full'
								fontSize={['sm', 'xl']}
								fontWeight='bold'
							>
								(React Native) Mobile Application Developer Intern <span style={{ color: '#F093AF' }}>@ Bluebeans Systems</span>
							</Text>
							<Text
								w='full'
								fontSize={['sm', 'xl']}
								fontWeight='light'
							>
								March 2022 - June 2022
							</Text>
							<Text
								w='full'
								fontSize={['sm', 'xl']}
							>
								● Spearheaded the development of an innovative e-Wallet Mobile Application using React Native
								<br />
								● Expertly implemented screens and components to perfection and according to their design specifications
								<br />
								● Collaborated seamlessly with the back-end team to seamlessly integrate APIs that powered the app&apos;s robust functionality.
							</Text>
						</TabPanel>
						<TabPanel>
							<Text
								w='full'
								fontSize={['sm', 'xl']}
								fontWeight='bold'
							>
								Software Engineer (Fullstack) <span style={{ color: '#F093AF' }}>@ Stratpoint Technologies</span>
							</Text>
							<Text
								w='full'
								fontSize={['sm', 'xl']}
								fontWeight='light'
							>
								September 2022 - Present
							</Text>
							<Text
								w='full'
								fontSize={['sm', 'xl']}
							>
								● Write modern, clean, and maintainable code within a team of diverse developers
								<br />
								● Utilize an array of languages, platforms, frameworks, and content management systems, including but not limited to JavaScript, TypeScript, ReactJS, NodeJS, Postgresql, Parse, AWS, etc... to deliver exceptional results.
								<br />
								● Work and talk with diverse teams consisting of engineers, designers, producers, and clients on a daily basis.
							</Text>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Container>
		</VStack>
	)
}

export default Work