import React from 'react'
import { Box, Text, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion';
function ProjectCard({ bannerUrl, title }) {
  const router = useRouter();

  return (
    <Box
      as={motion.div}
      w='119px'
      h='129px'
      maxW='119px'
      maxH='129px'
      rounded='lg'
      border='2px solid black'
      display='flex'
      flexFlow='column'
      padding='7px'
      onClick={() => router.push('/somewhere')}
      cursor='pointer'
      whileHover={{ scale: 1.05}}
    >
      <Image
        h='80px'
        w='113px'
        src={bannerUrl}
        objectFit='cover'
        bgColor='black'
        alt={title}
        rounded='lg'
      />
      <Text
        mt='6px'
        textAlign='center'
        fontWeight='bold'
      >
        {title || 'Coming Soon'}
      </Text>
    </Box>
  )
}

export default ProjectCard