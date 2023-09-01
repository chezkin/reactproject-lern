import React from 'react'
import './TitelStyle.css';

type Props = {
    title : string
    size : string
}
export default function Title(props : Props) {
  return (
    <h2 className={props.size}>{props.title}</h2>
  )
}
