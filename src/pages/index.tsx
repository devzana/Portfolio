import React from 'react'
import Layout from '@/layout'

import Home from '@/components/Pages/home'
import About from '@/components/Pages/about'
import Work from '@/components/Pages/work'
import Contact from '@/components/Pages/contact'
// import TechnologyCarousel from '@/components/Pages/technologies'
import Projects from '@/components/Pages/Projects/index'

export default function App() {
	return (
		<Layout title='devzana'>
			<Home />
			<About />
			{/* <TechnologyCarousel /> */}
			<Projects />
			<Work />
			<Contact />
		</Layout>
	)
}