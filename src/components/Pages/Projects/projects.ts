type ProjectType = {
  title: string,
  description: string,
  technologies: string[],
	// projectImageUrl: string,
}

const PROJECTS: ProjectType[] = [
	{
		title: 'Blog site App',
		description: `
			Non voluptate reprehenderit culpa excepteur ea ut in deserunt ut sunt. Sint duis laborum ex minim mollit excepteur id aliquip velit deserunt reprehenderit esse sunt. Amet non laboris culpa nulla culpa excepteur pariatur commodo.
			Elit ad quis ex quis tempor nulla ex consequat voluptate fugiat duis dolor dolore. Id aliquip Lorem cupidatat nulla velit anim ex. Ut ipsum exercitation eu qui tempor officia tempor esse sunt velit ullamco sint sunt. Aute aliqua aliqua esse in ex fugiat. Voluptate quis reprehenderit in consectetur culpa eu ea anim minim.
		`,
		technologies: [
			'yarn',
			'javascript',
			'react',
			'nodejs',
			'postgresql',
		],
	},
	{
		title: 'Clinic Project',
		description: `
			Non voluptate reprehenderit culpa excepteur ea ut in deserunt ut sunt. Sint duis laborum ex minim mollit excepteur id aliquip velit deserunt reprehenderit esse sunt. Amet non laboris culpa nulla culpa excepteur pariatur commodo.
			Elit ad quis ex quis tempor nulla ex consequat voluptate fugiat duis dolor dolore. Id aliquip Lorem cupidatat nulla velit anim ex. Ut ipsum exercitation eu qui tempor officia tempor esse sunt velit ullamco sint sunt. Aute aliqua aliqua esse in ex fugiat. Voluptate quis reprehenderit in consectetur culpa eu ea anim minim.
		`,
		technologies: [
			'php',
			'laravel',
			'mysql',
		],
	}
]

export default PROJECTS