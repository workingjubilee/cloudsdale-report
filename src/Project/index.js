import React from 'react'
import BuildQueue from '../Build'
import styled from 'styled-components'

const Project = styled.article`
  color: gainsboro;
  background-color: midnightblue;
  width: 40%;
  padding: 0.5%;
`

export default props => {
  return (
    <Project>
      Project Name
      Project Status
      <BuildQueue />
    </Project>
  )
} 