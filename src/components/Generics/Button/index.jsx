import React from 'react'
import { Btn } from './style'

const Button = ({children, onClick}) => {
  return <Btn onClick={onClick}>{children || "Button"}</Btn>;
}

export default Button