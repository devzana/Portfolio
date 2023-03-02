import React, { Fragment, ReactElement } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Box, Box as Container, HStack, Text, useBreakpointValue, useClipboard, useColorModeValue, useToast } from '@chakra-ui/react'
import Navigation from '@/components/Navigation'
import {
	FaFacebookSquare,
	FaGithub,
	FaLinkedin,
	FaInstagram,
} from 'react-icons/fa'
import { SiChakraui, SiNextdotjs } from 'react-icons/si'
import { TiPlus } from 'react-icons/ti'
import { RiHeartFill } from 'react-icons/ri'

type Props = {
  title: string
  children: ReactElement | ReactElement[]
}

function Layout({ title, children }: Props) {

	// From: https://doodad.dev/pattern-generator/
	const bgPattern = {
		dark: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' height=\'100%25\' width=\'100%25\'%3E%3Cdefs%3E%3Cpattern id=\'doodad\' width=\'26\' height=\'26\' viewBox=\'0 0 40 40\' patternUnits=\'userSpaceOnUse\' patternTransform=\'rotate(22)\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'rgba(57, 52, 55, 1)\'/%3E%3Cpath d=\'M-1 20h2v1h-2zM39 20h2v1h-2z\' fill=\'rgba(255, 255, 255, 1)\'/%3E%3Cpath d=\'M19.5 20h1v1h-1zM59.5 20h1v1h-1z\' fill=\'rgba(255, 255, 255, 1)\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=\'url(%23doodad)\' height=\'200%25\' width=\'200%25\'/%3E%3C/svg%3E ")',
		light: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' height=\'100%25\' width=\'100%25\'%3E%3Cdefs%3E%3Cpattern id=\'doodad\' width=\'26\' height=\'26\' viewBox=\'0 0 40 40\' patternUnits=\'userSpaceOnUse\' patternTransform=\'rotate(22)\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'rgba(255, 255, 255, 1)\'/%3E%3Cpath d=\'M-1 20h2v1h-2zM39 20h2v1h-2z\' fill=\'rgba(57, 52, 55, 1)\'/%3E%3Cpath d=\'M19.5 20h1v1h-1zM59.5 20h1v1h-1z\' fill=\'rgba(251, 182, 206, 1)\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=\'url(%23doodad)\' height=\'200%25\' width=\'200%25\'/%3E%3C/svg%3E ")'
	}

	// ? Should be in a separate file component
	const Socials = () => {
		const iconColor = useColorModeValue('#393437', 'white')

		const router = useRouter()

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const baseIconStyle: any = {
			bottom: 0,
			position: 'absolute',
			marginLeft: '64px',
			fontSize: 28,
			color: iconColor,
			cursor: 'pointer',
		}

		return (
			<Fragment>
				<FaInstagram
					onClick={() => router.push('https://www.instagram.com/_devzana')}
					style={{ marginBottom: '176px', ...baseIconStyle }}
				/>
				<FaLinkedin
					onClick={() => router.push('https://www.linkedin.com/in/devzana/')}
					style={{ marginBottom: '136px', ...baseIconStyle }}
				/>
				<FaGithub
					onClick={() => router.push('https://www.github.com/devzana/')}
					style={{ marginBottom: '96px', ...baseIconStyle }}
				/>
				<FaFacebookSquare
					onClick={() => router.push('https://www.facebook.com/devzana/')}
					style={{ marginBottom: '56px', ...baseIconStyle }}
				/>
				<Box
					ml='76px'
					bottom={0}
					position='absolute'
					h='48px'
					w='5px'
					bgColor='brand.base-main'
					borderColor='brand.base-accent'
					borderWidth='1px'
				/>
			</Fragment>
		)}

	const Contact = () => {
		const emailContact = 'lozanascbusiness@gmail.com'
		const { onCopy } = useClipboard(emailContact)

		const toast = useToast()

		return (
			<Fragment>
				<Text
					position='absolute'
					mb={148}
					mr={-6}
					bottom={0}
					right={0}
					fontSize='sm'
					color={useColorModeValue('brand.base-color-1', 'brand.base-color-2')}
					fontWeight='semibold'
					transform='rotate(90deg)'
					whiteSpace='nowrap'
					display='inline-block'
					cursor='pointer'
					onClick={() => {
						onCopy()
						toast({
							title: 'Saved to clipboard!',
							description: 'Email contact is saved to clipboard!',
							status: 'success',
							duration: 3000,
							isClosable: true,
							variant: 'subtle',
						})
					}}
				>
					{emailContact}
				</Text>
				<Box
					mr={76}
					right={0}
					bottom={0}
					position='absolute'
					h='48px'
					w='5px'
					bgColor='brand.base-main'
					borderColor='brand.base-accent'
					borderWidth='1px'
				/>
			</Fragment>
		)}

	const showSocialAndContact = useBreakpointValue({
		md: <Fragment>
			<Socials />
			<Contact />
		</Fragment>
	})

	return (
		<Container
			maxH='100vh'
			overflow='auto'
			display='flex'
			flexDir='column'
			scrollBehavior='smooth'
			css={{
				background: useColorModeValue(bgPattern.light,  bgPattern.dark),
				'&::-webkit-scrollbar': {
					width: '4px',
				},
				'&::-webkit-scrollbar-track': {
					width: '6px',
				},
				'&::-webkit-scrollbar-thumb': {
					background: useColorModeValue('#393437', '#FBB6CE'),
					borderRadius: '24px',
				},
			}}
		>
			<Head>
				<link rel="shortcut icon" href="/logo-face.svg" />
				<title>{title}</title>
			</Head>
			<Navigation />

			{/* Sections */}
			{children}
			{/* End Sections */}

			{ showSocialAndContact }
			<Text
				mt='auto'
				align='center'
				fontSize={['xs', 'sm', 'base']}
				color={useColorModeValue('brand.base-color-1', 'brand.base-color-2')}
				fontWeight='semibold'
			>
					Inspired by Brittany built by Sean
			</Text>
			<HStack mx='auto' mb={2}>
				<Text
					align='center'
					fontSize={['xs', 'sm', 'base']}
					color={useColorModeValue('brand.base-color-1', 'brand.base-color-2')}
					fontWeight='semibold'
				>
						Built with
				</Text>
				<SiChakraui />
				<TiPlus />
				<SiNextdotjs />
				<Text
					align='center'
					fontSize={['xs', 'sm', 'base']}
					color={useColorModeValue('brand.base-color-1', 'brand.base-color-2')}
					fontWeight='semibold'
				>
						and
				</Text>
				<RiHeartFill />
			</HStack>
		</Container>
	)
}

export default Layout
