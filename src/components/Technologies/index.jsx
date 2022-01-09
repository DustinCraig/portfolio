import React from 'react'
import { Section, SectionDivider, SectionTitle, SectionText } from '../Section'
import { Canvas } from '@react-three/fiber'
import List from '../List'

const frontEndTechnologies = [
  'JavaScript',
  'React.js/Redux',
  'Angular 7+',
  'Angular.js',
]

const backEndTechnologies = ['Azure Functions (C#)', 'SQL Server', 'Couch DB']

export default () => (
  <Section nopadding id='Technologies'>
    <SectionTitle>Technologies</SectionTitle>
    <SectionDivider />
    <SectionText nopaddingbottom>
      I have professional experience in the following:
    </SectionText>
    <div
      style={{
        display: 'flex',
        flex: 1,
        margin: 40,
        marginTop: 15,
        justifyContent: 'center',
      }}
    >
      <List title='Front-End' items={frontEndTechnologies} />
      <List title='Back-End' items={backEndTechnologies} />
    </div>
  </Section>
)
