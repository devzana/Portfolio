import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Button from './button'

const Jumbotron = () => {
  return (
    <HStack
      h='145px'
      w='50%'
      bgColor='#F9F9F9'
      border='1.5px solid black'
      rounded='md'
      justify='center'
      mb='32px'
    >
      <HStack>
        <Image
          src='/me-coffee.svg'
          height={96}
          width={96}
          alt='cartoon me holding coffee'
          style={{
            marginTop: '12px',
            marginRight: '12px',
          }}
        />
        <Box>
          <Heading textAlign='start' fontSize='lg'>
            Hello<span style={{ transform: 'rotate(45deg)', color: '#FBB6CE' }}>!</span>
          </Heading>
          <Text fontSize='lg'>
            I&apos;m Sean
          </Text>
          <Text fontSize='lg'>
            <strong>Coffee lover</strong> and <strong>Software Developer</strong>
          </Text>
          <Button>
            Let&apos;s Collab!
          </Button>
        </Box>
      </HStack>
    </HStack>
  )
}

export default Jumbotron