import React from 'react'
import { Heading, HStack, IconButton, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import { BsGithub } from 'react-icons/bs'
import { MdNightlight } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const Navigation = () => {
  const router = useRouter()
  return (
    <HStack
      mb='32px'
      w='100vw'
      h='56px'
      bgColor='#F9F9F9'
      borderBottom='1px solid #393437'
      justify='center'
    >
      <HStack w='50%' maxW='container.md' justify='space-between'>
        <HStack>
          <HStack 
            as={motion.div}
            mr='20px'
            whileHover={{ scale: 1.05, rotateX: 10, rotateY: 10 }}
            whileTap={{ scale: 0.95 }}
            cursor='pointer'
            onClick={() => router.push('/')}
          >
            <Image
              height={24}
              width={24}
              src='/face-logo.svg'
              alt='cartoon face of me'
            />
            <Heading
              color='#393437'
              fontWeight='bold'
              fontSize='2xl'
            >
              devzana<span style={{ color: '#FBB6CE' }}>.</span>
            </Heading>
          </HStack>
          <Text
            pr={4}
            as={Link}
            color='#393437'
            fontSize='xl'
            href='/projects'
          >
            Projects
          </Text>
          <Text
            pr={4}
            as={Link}
            color='#393437'
            fontSize='xl'
            href='/Blog'
          >
            Blog
          </Text>
          <HStack as={Link} href='https://www.github.com/devzana/portfolio'>
            <BsGithub size={24}/>
            <Text
              color='#393437'
              fontSize='xl'
            >
              Source
            </Text>
          </HStack>
        </HStack>
        <IconButton
          isDisabled
          icon={<MdNightlight size={20}/>}
        />
      </HStack>
    </HStack>
  )
}

export default Navigation