import React from 'react'
import styled from 'styled-components'
import { Image } from '../Image'
import { H3 } from '../Header/HeaderStyles'
import { HR } from '../Divider'

const Card = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  height: 530px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`

const CardInfo = styled.div`
  width: 100%;
  padding: 0 50px;
  margin: 5px;
  margin-bottom: 15px;
  border-radius: 5px;
  color: #e4e6e7;
  font-size: ${(props) => (props.smallFont ? '1rem' : 'auto')};
  height: 13%;
  line-height: 24px;
  text-align: left;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`

const Title = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`

const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`

const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`

export default ({
  imageSource,
  title,
  description,
  key = undefined,
  tagList = [],
  children,
  ...rest
}) => (
  <div>
    {children}
    <Card key={key} {...rest}>
      <Image src={imageSource} />
      <Title>
        <H3 title>{title}</H3>
        <HR />
      </Title>
      <CardInfo>{description}</CardInfo>
      {tagList.length > 0 && (
        <TagList>
          {tagList.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </TagList>
      )}
    </Card>
  </div>
)
