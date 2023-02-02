import {
	Button,
	Text,
	HStack,
	IconButton,
	useBreakpointValue,
	useColorModeValue,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	useColorMode,
	Container,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon, AttachmentIcon } from '@chakra-ui/icons'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navigation() {

	const { isOpen, onOpen, onClose } = useDisclosure()

	const { toggleColorMode } = useColorMode()

	const navLinkElements = useBreakpointValue([
		(
			<IconButton
				key={1}
				onClick={onOpen}
				bgColor='transparent'
				icon={<Image
					src={useColorModeValue('/hamburger-light.svg', '/hamburger-dark.svg')}
					alt='a toggler for nav menu on mobile'
					width={32}
					height={32}
				/>}
				aria-label={'toggler for nav menu'}
				colorScheme='gray'
			/>
		),
		(
			<IconButton
				key={2}
				onClick={onOpen}
				bgColor='transparent'
				icon={<Image
					src={useColorModeValue('/hamburger-light.svg', '/hamburger-dark.svg')}
					alt='a toggler for nav menu on mobile'
					width={32}
					height={32}
				/>}
				aria-label={'toggler for nav menu'}
				colorScheme='gray'
			/>
		),
		(
			<IconButton
				key={1}
				onClick={onOpen}
				bgColor='transparent'
				icon={<Image
					src={useColorModeValue('/hamburger-light.svg', '/hamburger-dark.svg')}
					alt='a toggler for nav menu on mobile'
					width={32}
					height={32}
				/>}
				aria-label={'toggler for nav menu'}
				colorScheme='gray'
			/>
		),
		(
			<IconButton
				key={2}
				onClick={onOpen}
				bgColor='transparent'
				icon={<Image
					src={useColorModeValue('/hamburger-light.svg', '/hamburger-dark.svg')}
					alt='a toggler for nav menu on mobile'
					width={32}
					height={32}
				/>}
				aria-label={'toggler for nav menu'}
				colorScheme='gray'
			/>
		),
		(
			<HStack gap={6} key={2}>
				<HStack as={Link} href='#about'>
					<Text
						fontWeight='bold'
						color={useColorModeValue('brand.base-main', '#F3E4ED')}
						css={{
							WebkitTextStroke: 0.5,
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
				<HStack as={Link} href='/'>
					<Text
						fontWeight='bold'
						color={useColorModeValue('brand.base-main', '#F3E4ED')}
						css={{
							WebkitTextStroke: 0.5,
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
							WebkitTextStroke: 0.5,
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
				<HStack as={Link} href='/'>
					<Text
						fontWeight='bold'
						color={useColorModeValue('brand.base-main', '#F3E4ED')}
						css={{
							WebkitTextStroke: 0.5,
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

	// TODO: Refactor modal convert into transition component
	return (
		<>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay/>
				<ModalContent>
					<ModalHeader
						bgColor={useColorModeValue('brand.base-light', 'brand.base-dark')}
						color={useColorModeValue('brand.base-dark', 'brand.base-light')}
					>
						Menu
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody
						bgColor={useColorModeValue('brand.base-light', 'brand.base-dark')}
						color={useColorModeValue('brand.base-dark', 'brand.base-light')}
					>
						<Container h='full'>
							<HStack
								as={Link}
								href='#about'
							>
								<Text
									fontWeight='bold'
									color={useColorModeValue('brand.base-main', '#F3E4ED')}
									css={{
										WebkitTextStroke: 0.5,
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
							<HStack
								as={Link}
								href='/'
							>
								<Text
									fontWeight='bold'
									color={useColorModeValue('brand.base-main', '#F3E4ED')}
									css={{
										WebkitTextStroke: 0.5,
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
							<HStack
								as={Link}
								href='/'
							>
								<Text
									fontWeight='bold'
									color={useColorModeValue('brand.base-main', '#F3E4ED')}
									css={{
										WebkitTextStroke: 0.5,
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
							<HStack
								as={Link}
								href='/'
							>
								<Text
									fontWeight='bold'
									color={useColorModeValue('brand.base-main', '#F3E4ED')}
									css={{
										WebkitTextStroke: 0.5,
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
						</Container>
					</ModalBody>

					<ModalFooter
						bgColor={useColorModeValue('brand.base-light', 'brand.base-dark')}
						color={useColorModeValue('brand.base-dark', 'brand.base-light')}
					>
						<IconButton
							onClick={toggleColorMode}
							icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
							aria-label={'toggle for color theme'}
						/>
					</ModalFooter>
				</ModalContent>
			</Modal>
			<HStack
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
				/>
				{ navLinkElements }
			</HStack>
		</>
	)
}

export default Navigation