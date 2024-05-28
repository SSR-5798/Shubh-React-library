import React from 'react'

interface ButtonProps{
    label:string,
    click: () => void
}

const Button = (props: ButtonProps) => <button onClick={props.click}>{props.label}</button>

export default Button