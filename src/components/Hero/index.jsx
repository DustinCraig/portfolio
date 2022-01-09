import React from 'react'
import { Section, SectionText, SectionTitle, SectionLeft } from '../Section'

export default () => (
  <Section row nopadding>
    <SectionLeft>
      <SectionTitle main center>
        Dustin Craig
      </SectionTitle>
      <SectionText>
        I am a Full-Stack Software Engineer based out of Tennessee!
        <br />
        Feel free to contact me at{' '}
        <a href='mailto:dustincraig16@gmail.com'>dustincraig16@gmail.com</a>
      </SectionText>
    </SectionLeft>
  </Section>
)
