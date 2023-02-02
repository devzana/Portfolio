import React, { ReactElement } from 'react'
import Head from 'next/head'
import { Box as Container, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import Navigation from '@/components/Navigation'
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

	return (
		<Container
			minH='100vh'
			minW='100vw'
			maxH='100vh'
			overflow='auto'
			display='flex'
			flexDir='column'
			css={{
				background: useColorModeValue(bgPattern.light,  bgPattern.dark)
			}}
		>
			<Head>
				<title>{title}</title>
			</Head>
			<Navigation />

			{/* Sections */}
			{children}
			{/* End Sections */}

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
