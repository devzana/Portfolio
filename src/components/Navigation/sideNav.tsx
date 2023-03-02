import React from 'react'
import {
	Button,
	Text,
	VStack,
	HStack,
	IconButton,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import { SunIcon, MoonIcon, AttachmentIcon } from '@chakra-ui/icons'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SideBav({ onToggle }: any) {
	const { toggleColorMode } = useColorMode()

	return (
		<VStack
			h='full'
			gap={6}
			justify='center'
			bgColor={useColorModeValue('brand.base-light', 'brand.base-accent')}
		>
			<HStack as={Link} href='#about' onClick={onToggle}>
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
			<HStack as={Link} href='/' onClick={onToggle}>
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
			<HStack as={Link} href='/' onClick={onToggle}>
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
			<HStack as={Link} href='/' onClick={onToggle}>
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
		</VStack>
	)
}

export default SideBav