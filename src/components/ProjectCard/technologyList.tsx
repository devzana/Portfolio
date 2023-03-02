import React from 'react'
import {
	FaJsSquare,
	FaHtml5,
	FaLinux,
	FaGithub,
	FaGitlab,
	FaGitAlt,
	FaLaravel,
	FaReact,
	FaSass,
	FaYarn,
	FaNode,
	FaNpm,
	FaPhp,
	FaCss3Alt,
	FaFigma,
	FaAndroid,
	FaTrello,
} from 'react-icons/fa'
import {
	SiExpo,
	SiPostgresql,
	SiMysql,
	SiNotion,
	SiAsana,
	SiChakraui,
	SiRedux,
	SiReduxsaga,
} from 'react-icons/si'


const baseIconStyle = {
	fontSize: 32,
	margin: '6px 12px',
}

const ListOfIconTechnologies = {
	expo: <SiExpo key={1} style={baseIconStyle} />,
	postgresql: <SiPostgresql key={2}  style={baseIconStyle}/>,
	mysql: <SiMysql key={3} style={baseIconStyle} />,
	notion: <SiNotion key={4}  style={baseIconStyle}/>,
	asana: <SiAsana key={5}  style={baseIconStyle}/>,
	chakraui: <SiChakraui key={6}  style={baseIconStyle}/>,
	redux: <SiRedux key={7} style={baseIconStyle} />,
	reduxsaga: <SiReduxsaga key={8} style={baseIconStyle} />,
	javascript: <FaJsSquare key={9}  style={baseIconStyle}/>,
	html: <FaHtml5 key={10}  style={baseIconStyle}/>,
	linux: <FaLinux key={11}  style={baseIconStyle}/>,
	github: <FaGithub key={12}  style={baseIconStyle}/>,
	gitlab: <FaGitlab key={13}  style={baseIconStyle}/>,
	gitalt: <FaGitAlt key={14} style={baseIconStyle} />,
	laravel: <FaLaravel key={15} style={baseIconStyle} />,
	react: <FaReact key={16} style={baseIconStyle} />,
	sass: <FaSass key={17} style={baseIconStyle} />,
	yarn: <FaYarn key={18} style={baseIconStyle} />,
	nodejs: <FaNode key={19} style={baseIconStyle} />,
	npm: <FaNpm key={20} style={baseIconStyle} />,
	php: <FaPhp key={21} style={baseIconStyle} />,
	css: <FaCss3Alt key={22} style={baseIconStyle} />,
	figma: <FaFigma key={23} style={baseIconStyle} />,
	android: <FaAndroid key={24} style={baseIconStyle} />,
	trello: <FaTrello key={25} style={baseIconStyle} />,
}

export default ListOfIconTechnologies