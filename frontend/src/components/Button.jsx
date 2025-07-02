import React from 'react'

const Button = ({text,style,Click}) => {
  return (
   <button style={style} onClick={Click}>
    {text}
   </button>
  )
}

export default Button