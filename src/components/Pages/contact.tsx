import React from 'react'

import {
	Flex as Container,
	Heading,
	useColorModeValue,
	Box,
	Text,
	VStack,
	Button,
} from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

function Contact() {
	const router = useRouter()

	return (
		<VStack
			id='contact'
			minH='100vh'
			px={[6, 6, 32]}
		>
			<Container
				w='full'
				my='auto'
				direction='column'
			>
				<Heading
					mx='auto'
					maxW='fit-content'
					lineHeight={1}
					color={useColorModeValue('brand.base-color-1', '#E3CEDB')}
					fontSize={['xl', '2xl', '3xl', '4xl']}
				>
              Contact Me.
				</Heading>
				<Box
					mt={2}
					mx='auto'
					h='6px'
					w={['45%','25%']}
					bgColor='brand.base-main'
					borderColor='brand.base-accent'
					borderWidth='1px'
				/>
				<Text
					mx='auto'
					align='center'
					w={['full', 'full', '80%', '60%']}
					py={4} pr={6}
					fontSize={['sm', 'md', 'md', 'lg']}>
						I&apos;m not currently looking for new opportunies however, if you have any cool ideas that you want
						to be made into reality and you&apos;re looking for a talented and affordable freelance developer, hit me up!
				</Text>
				<Button
					mt={6}
					mx='auto'
					leftIcon={<ChatIcon />}
					rounded='none'
					border='1px'
					borderColor='brand-base-dark'
					p={6}
					bgColor='brand.base-main'
					color='brand.base-dark'
					size={['sm', 'lg']}
					maxW='fit-content'
					onClick={() => router.push('mailto:lozanascbusiness@gmail.com')}
				>
						Get in Touch!
				</Button>
			</Container>
		</VStack>
	)
}

export default Contact