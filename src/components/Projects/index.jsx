import React from 'react'
import { SectionDivider, Section, SectionText, SectionTitle } from '../Section'
import { GridContainer } from '../Grid'
import HoverCard from '../Card/HoverCard'

const projects = [
  {
    title: 'thegammonsreview',
    description: 'This website houses movie reviews written by Davis Gammons',
    visit: 'http://thegammonsreview.com',
    imageSource: '/images/thegammonsreview.png',
    tags: ['JavaScript', 'ASP.NET'],
    id: 0,
  },
  {
    title: 'Paper in the Wind',
    description:
      "Endless runner where you play as a piece of paper trying to obtain it's freedom",
    tags: ['Unity'],
    imageSource: '/images/pitw.png',
    visit: 'https://dustincraig.github.io/PaperInTheWind/',
    id: 1,
  },
  {
    title: 'Cabin Walkthrough',
    description: `First person WebGL project featuring fog, reflective water, skybox, diffuse/ambient lighting and bump maps.`,
    tags: ['JavaScript', 'WebGL'],
    imageSource: '/images/cabin.png',
    visit: 'http://web.eecs.utk.edu/~dcraig14/2bN9gJ0sx3U/finalp.html',
    id: 2,
  },
  {
    title: 'Neyland Stadium',
    description: 'Beautiful Neyland Stadium mapped onto a sphere',
    tags: ['JavaScript', 'WebGL'],
    visit: 'https://web.eecs.utk.edu/~dcraig14/2bN9gJ0sx3U/lab3/Step4.html',
    imageSource: '/images/neyland.png',
    id: 3,
  },
  {
    title: 'Normal Map Example',
    visit: 'http://web.eecs.utk.edu/~dcraig14/2bN9gJ0sx3U/lab3/Midterm.html',
    description: 'Implementation of object normal mapping',
    imageSource: '/images/normal.png',
    id: 4,
    tags: ['JavaScript', 'WebGL'],
  },
]

export default () => (
  <Section nopadding id='projects'>
    <SectionTitle>Projects</SectionTitle>
    <SectionDivider />
    <GridContainer>
      {projects.map((p, i) => (
        <HoverCard
          title={p.title}
          description={p.description}
          imageSource={p.imageSource}
          tagList={p.tags}
          visit={p.visit}
        />
      ))}
    </GridContainer>
  </Section>
)
