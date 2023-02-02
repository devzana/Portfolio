import { extendTheme } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const colors = {
	brand: {
		'base-dark': '#313131',
		'base-light': '#F9F9F9',
		'base-main': '#FBB6CE',
		'base-accent': '#393437',
		'base-color-1': '#64575F',
		'base-color-2': '#E3CEDB',
		'base-color-3': '#FEF0F8',
	}
}

const fonts = {
	heading: '\'montserrat\', sans-serif',
	body: '\'inter\', sans-serif',
}

const styles = {
	global: (props: StyleFunctionProps) => ({
		body: {
			color: mode('brand.base-dark', 'brand.base-light')(props),
			bg: mode('brand.base-light', 'brand.base-dark')(props),
		}
	}),
}

const customTheme = {
	colors,
	fonts,
	styles,
}

const theme = extendTheme(customTheme)

export default theme