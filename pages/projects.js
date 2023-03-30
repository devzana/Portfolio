import React from 'react'
import { 
  Heading,
  VStack,
  Grid, 
  GridItem,
} from "@chakra-ui/react";
import Layout from "@/components/layout";
import ProjectCard from '@/core/projectCard';

import { projects as projectsData } from '@/projectsData';

export default function Projects() {
  return (
    <Layout pageTitle='Projects'>
      {/* Projects 👋 */}
      <VStack w='full' px={64} maxW='container.lg'>
        <VStack w='full' alignItems='flex-start'>
          <Heading
            mt='32px'
            fontSize='2xl'
            textDecoration='underline'
          >
            Projects
          </Heading>
          <Grid templateColumns='repeat(4, 1fr)' gap={3}>
            {
              projectsData.map(projects =>
                <GridItem key={projects.title}>
                  <ProjectCard 
                    bannerUrl={projects.bannerUrl}
                    title={projects.title}
                  />
                </GridItem>
            )
            }
          </Grid>
        </VStack>

        {/* Client Projects 💵 */}
        <VStack w='full' alignItems='flex-start'>
          <Heading
            mt='32px'
            fontSize='2xl'
            textDecoration='underline'
          >
            Client Projects
          </Heading>
          <Grid templateColumns='repeat(4, 1fr)' gap={3}>
            <GridItem>
              <ProjectCard />
            </GridItem>
            <GridItem>
              <ProjectCard />
            </GridItem>
            <GridItem>
              <ProjectCard />
            </GridItem>
            <GridItem>
              <ProjectCard />
            </GridItem>
          </Grid>
        </VStack>

        {/* Old Projects 🦴 */}
        <VStack w='full' alignItems='flex-start'>
          <Heading
            mt='32px'
            fontSize='2xl'
            textDecoration='underline'
          >
            Old Projects
          </Heading>
          <Grid templateColumns='repeat(4, 1fr)' gap={3}>
            <GridItem>
              <ProjectCard />
            </GridItem>
            <GridItem>
              <ProjectCard />
            </GridItem>
            <GridItem>
              <ProjectCard />
            </GridItem>
            <GridItem>
              <ProjectCard />
            </GridItem>
          </Grid>
        </VStack>
      </VStack>
    </Layout>
  )
}
