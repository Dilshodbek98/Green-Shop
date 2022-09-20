import React from 'react'
import { Btn } from './style'

const Button = (props) => {
  return <Btn padding={props.padding}>{props.children}</Btn>;
}

export default Button