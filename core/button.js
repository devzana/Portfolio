import React from 'react'
import { Button as Btn } from '@chakra-ui/react'

const Button = ({ children, ...props}) => {
  return (
    <Btn
      variant='unstyled'
      rounded='none'
      bgColor='#FBB6CE'
      border='1.5px solid #393437'
      h='32px'
      w='128px'
      {...props}
    >
      {children}
    </Btn>
  )
}

export default Button