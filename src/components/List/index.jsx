import React from 'react'
import styled from 'styled-components'
import { H2 } from '../Header'

const ListContainer = styled.div`
  margin-left: 60px;
  margin-right: 60px;
`

const List = styled.ul`
  text-align: left;
  margin-top: 15px;
`

const ListItem = styled.li`
  font-size: 23px;
  padding: 5px;
`

export default ({ title, items }) => (
  <ListContainer>
    <H2>{title}</H2>
    <hr />
    <List>
      {items.map((t) => (
        <ListItem>{t}</ListItem>
      ))}
    </List>
  </ListContainer>
)
