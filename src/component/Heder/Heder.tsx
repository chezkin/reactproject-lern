import React from 'react'
import Title from '../Titel/Title'
import ButtonAddOne from '../ButtonAddOne/ButtonAddOne'

import './HederStyle.css'

type Props = {
    title : string,
    size : string
}

function Header(props : Props) {
  return (
    <header className='header'>
        <Title size={props.size} title={props.title}/>
        <ButtonAddOne/>
    </header>
  )
}

export default Header