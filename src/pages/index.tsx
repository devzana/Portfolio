import React from 'react'
import Layout from '@/layout'

import Home from './home'
import About from './about'

export default function App() {
	return (
		<Layout title='Devzana'>
			<Home />
			<About />
		</Layout>
	)
}