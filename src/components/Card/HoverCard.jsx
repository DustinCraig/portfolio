import React, { Component } from 'react'
import styled from 'styled-components'
import Card from './index'
import Button from '../Button'

const SourceHover = styled.div`
  position: absolute;
  transition: background-color 1s linear;
  background-color: rgba(0, 0, 0, 0.4);
  height: 530px;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HoverCard = (CardComponent, data) => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isHovering: false,
      }
    }

    onMouseEnter() {
      this.setState({ isHovering: true })
    }

    onMouseLeave(e) {
      console.log('leave')
      this.setState({ isHovering: false })
    }

    onVisit() {
      window.open(this.props.visit, '_blank')
    }

    render() {
      return (
        <>
          <CardComponent
            {...this.props}
            onMouseEnter={() => {
              this.onMouseEnter()
            }}
            onMouseLeave={(e) => {
              this.onMouseLeave()
            }}
          >
            {this.state.isHovering && this.props.source && (
              <SourceHover>Source: {this.props.source}</SourceHover>
            )}
            {this.state.isHovering && this.props.visit && (
              <SourceHover
                onMouseEnter={() => {
                  this.onMouseEnter()
                }}
                onMouseLeave={() => {
                  this.onMouseLeave()
                }}
              >
                <Button
                  onClick={() => {
                    this.onVisit()
                  }}
                  alt
                  size={'large'}
                >
                  Visit
                </Button>
              </SourceHover>
            )}
          </CardComponent>
        </>
      )
    }
  }
}

export default HoverCard(Card)
