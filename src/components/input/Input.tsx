import React from 'react'

interface InputProps{
    type:string,
    required:boolean,
    value:string,
    onChange:() => void
}

const Input = (props:InputProps) => <input type={props.type} required={props.required} value={props.value} onChange={props.onChange}/>

export default Input