import React from 'react';
import BuildQueue from '../Build'

export default props => {
  return (
    <article style={{color:"gainsboro",backgroundColor:"midnightblue",width:"40%",padding:"0.5%"}}>
      Project Name
      Project Status
      <BuildQueue />
    </article>
  )
} 