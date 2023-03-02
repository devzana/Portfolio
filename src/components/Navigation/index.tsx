import React from 'react'
import {
	Button,
	Text,
	HStack,
	IconButton,
	useBreakpointValue,
	useColorModeValue,
	useColorMode,
	useDisclosure,
	Slide,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SunIcon, MoonIcon, AttachmentIcon } from '@chakra-ui/icons'
import SideNav from './sideNav'

function Navigation() {
	const router = useRouter()
	const { toggleColorMode } = useColorMode()
	const { isOpen, onToggle } = useDisclosure()

	// TODO: Massive refactoring on the Navigation elements
	const SideNavigation = () => (
		<Slide
			direction="right"
			in={isOpen}
			style={{ zIndex: 10 }}
		>
			<SideNav onToggle={onToggle}/>
		</Slide>
	)

	const navLinkElements = useBreakpointValue([
		(
			<IconButton
				key={1}
				variant='unstyled'
				icon={<Image
					src={useColorModeValue('/hamburger-light.svg', '/hamburger-dark.svg')}
					alt='a toggler for nav menu on mobile'
					width={32}
					height={32}
				/>}
				aria-label={'toggler for nav menu'}
				colorScheme='gray'
				onClick={onToggle}
			/>
		),
		(
			<IconButton
				key={2}
				variant='unstyled'
				icon={<Image
					src={useColorModeValue('/hamburger-light.svg', '/hamburger-dark.svg')}
					alt='a toggler for nav menu on mobile'
					width={32}
					height={32}
				/>}
				aria-label={'toggler for nav menu'}
				colorScheme='gray'
				onClick={onToggle}
			/>
		),
		(
			<IconButton
				key={3}
				variant='unstyled'
				icon={<Image
					src={useColorModeValue('/hamburger-light.svg', '/hamburger-dark.svg')}
					alt='a toggler for nav menu on mobile'
					width={32}
					height={32}
				/>}
				aria-label={'toggler for nav menu'}
				colorScheme='gray'
				onClick={onToggle}
			/>
		),
		(
			<IconButton
				key={4}
				variant='unstyled'
				icon={<Image
					src={useColorModeValue('/hamburger-light.svg', '/hamburger-dark.svg')}
					alt='a toggler for nav menu on mobile'
					width={32}
					height={32}
				/>}
				aria-label={'toggler for nav menu'}
				colorScheme='gray'
				onClick={onToggle}
			/>
		),
		(
			<HStack gap={6} key={2}>
				<HStack as={Link} href='#about' scroll={false}>
					<Text
						fontWeight='bold'
						color={useColorModeValue('brand.base-main', '#F3E4ED')}
						css={{
							WebkitTextStroke: 0.3,
							WebkitTextStrokeColor: '#393437',
							filter: 'drop-shadow(0.1rem 0.1rem 0.01rem rgba(0, 0, 0, 0.25))'
						}}
					>
								00.
					</Text>
					<Text fontWeight='bold'>
								About
					</Text>
				</HStack>
				<HStack as={Link} href='#work'>
					<Text
						fontWeight='bold'
						color={useColorModeValue('brand.base-main', '#F3E4ED')}
						css={{
							WebkitTextStroke: 0.3,
							WebkitTextStrokeColor: '#393437',
							filter: 'drop-shadow(0.1rem 0.1rem 0.01rem rgba(0, 0, 0, 0.25))'
						}}
					>
								01.
					</Text>
					<Text fontWeight='bold'>
								Work
					</Text>
				</HStack>
				<HStack as={Link} href='/'>
					<Text
						fontWeight='bold'
						color={useColorModeValue('brand.base-main', '#F3E4ED')}
						css={{
							WebkitTextStroke: 0.3,
							WebkitTextStrokeColor: '#393437',
							filter: 'drop-shadow(0.1rem 0.1rem 0.01rem rgba(0, 0, 0, 0.25))'
						}}
					>
								02.
					</Text>
					<Text fontWeight='bold'>
								Projects
					</Text>
				</HStack>
				<HStack as={Link} href='#contact'>
					<Text
						fontWeight='bold'
						color={useColorModeValue('brand.base-main', '#F3E4ED')}
						css={{
							WebkitTextStroke: 0.3,
							WebkitTextStrokeColor: '#393437',
							filter: 'drop-shadow(0.1rem 0.1rem 0.01rem rgba(0, 0, 0, 0.25))'
						}}
					>
								03.
					</Text>
					<Text fontWeight='bold'>
								Contact
					</Text>
				</HStack>
				<Button
					leftIcon={<AttachmentIcon />}
					rounded='none'
					border='1px'
					borderColor='brand-base-dark'
					p={6}
					bgColor='brand.base-main'
					color='brand.base-dark'
				>
					Resume
				</Button>
				<IconButton
					onClick={toggleColorMode}
					icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
					aria-label={'toggle for color theme'}
				/>
			</HStack>
		)]
	)

	return (
		<>
			<SideNavigation />
			<HStack
				w='full'
				position='absolute'
				zIndex={999}
				py={4}
				px={[6, 8, 12]}
				bgColor={useColorModeValue('#FFFBFC', '#393437')}
				boxShadow='md'
				justify='space-between'
			>
				<Image
					src='/logo-face.svg'
					alt='a cute face'
					width={32}
					height={32}
					style={{ cursor: 'pointer' }}
					onClick={() => router.push('#home')}
				/>
				{ navLinkElements }
			</HStack>
		</>
	)
}

export default Navigation