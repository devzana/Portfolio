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
      {/* Work 👨‍💻 */}
      <VStack w='full' alignItems='flex-start'>
        <Heading
          mt='32px'
          fontSize='2xl'
          textDecoration='underline'
        >
          Oops!
        </Heading>
        <Text>
          <strong>Sorry!</strong>
          <br/>
          This page might be broken, I am very sorry for the inconvenience
        </Text>
        <Button onClick={() => router.push('/')}>
          Back to Home
        </Button>
      </VStack>
    </VStack>
   </Layout>
  )
}
