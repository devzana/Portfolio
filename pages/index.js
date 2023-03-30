import React from 'react'
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";
import Button from "@/core/button";
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
   <Layout pageTitle='Home'>
    <VStack w='full' px={64}>

      {/* Me 👋 */}
      <HStack w='full' justify='space-between'>
        <Box>
          <Heading>
            Sean Christian Lozana
          </Heading>
          <Text>
            Software Developer (Coffee lover/gamer/dev)
          </Text>
        </Box>
        <Image
          src='/me-real.png'
          height={100}
          width={100}
          alt='me irl smiling holding a laptop'
          style={{ margin: 'auto' }}
        />
      </HStack>
      {/* Work 👨‍💻 */}
      <VStack w='full' alignItems='flex-start'>
        <Heading
          mt='32px'
          fontSize='2xl'
          textDecoration='underline'
        >
          Work
        </Heading>
        <Text>
          <strong>Sean</strong> is a Software Engineer based in the Philippines, 
          he is currently furthering his career by making software 
          solutions using modern technologies on both frontend and 
          backend at <strong>Stratpoint Technologies</strong>, he aims to become a 
          well rounded developer (Full-stack) that is able to adapt 
          quickly to the changes of the future at the same time 
          deliver quality software solutions.

          He is also an avid fan of anime, you can checkout the 
          anime&apos;s he is currently (re)watching <Link href='/' style={{ fontWeight: 'bold' }}>here</Link>. He is 
          also a gamer, mainly RTS and FPS games, you can also 
          check out the games he is playing <Link href='/' style={{ fontWeight: 'bold' }}>here</Link>.
        </Text>
        <Button onClick={() => router.push('projects')}>
          See Projects
        </Button>
      </VStack>

      {/* Experience 💪 */}
      <VStack w='full' alignItems='flex-start'>
        <Heading
          mt='32px'
          fontSize='2xl'
          textDecoration='underline'
        >
          Experience
        </Heading>
        <Text mt='16px'>
          Aug 2022 - Present <strong style={{ marginLeft: '6px' }}>Stratpoint Technologies</strong> - Software Engineer
        </Text>
        <Text fontSize='sm'>
          ● Write modern, clean, and maintainable code within a team of diverse developers
          <br />
          ● Utilize an array of languages, platforms, frameworks, and content management systems, including but not limited to JavaScript, TypeScript, ReactJS, NodeJS, Postgresql, Parse, AWS, etc... to deliver exceptional results.
          <br />
          ● Work and talk with diverse teams consisting of engineers, designers, producers, and clients on a daily basis.
        </Text>

        <Text mt='16px'>
          Mar 2022 - Jun 2022 <strong style={{ marginLeft: '6px' }}>Bluebeans Systems</strong> - React Native Developer Intern
        </Text>
        <Text fontSize='sm'>
          ● Spearheaded the development of an innovative e-Wallet Mobile Application using React Native
          <br />
          ● Expertly implemented screens and components to perfection and according to their design specifications
          <br />
          ● Collaborated seamlessly with the back-end team to seamlessly integrate APIs that powered the app&apos;s robust functionality.
        </Text>

        <Text mt='16px'>
          Oct 2021 - Feb 2022 <strong style={{ marginLeft: '6px' }}>NEXPLAY</strong> - Web Developer Intern
        </Text>
        <Text fontSize='sm'>
          ● Collaborated with the design and back-end team to migrated their Internal Admin Dashboard to NextJS
          <br />
          ● Skillfully implemented pages and components according to their design specification
          <br />
          ● Leveraged new front-end technologies through continuous learning and exploration
        </Text>
      </VStack>

      {/* Contact 📧 */}
      <VStack w='full' alignItems='flex-start'>
        <Heading
          mt='32px'
          fontSize='2xl'
          textDecoration='underline'
        >
          Contact
        </Heading>
        <Text mt='16px'>
          I&apos;m not currently looking for new opportunities however, 
          if you have any <strong>cool ideas</strong> that you want to be made into reality 
          and you&apos;re looking for a talented and affordable freelance developer, <strong>hit me up!</strong>
        </Text>
        <Button>
          Get In Touch
        </Button>
      </VStack>
    </VStack>
   </Layout>
  )
}
