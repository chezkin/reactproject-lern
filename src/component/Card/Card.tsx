import React , { useState} from 'react'
import Title from '../Titel/Title'
import HiddenText from '../HiddenText/HiddenText'
import Select from '../Select/Select'
import AddColor from '../AddColor/AddColor'

import './cardStyle.css'

type Props = {
    title : string
    src: string,
    alt: string,
    text: string,
    size : string
}

const Card = (props: Props) => {
  const [color , setColor] = useState('red')
  const [listColor , setlistColor] = useState(['red', 'blue', 'green', 'yellow'])

  const AddListColor = (val : string)  => {
    setColor(val)
    if (!listColor.includes(val)){
      setlistColor([...listColor, val])
    }
    
  }
  return (
    <div style={{background: color}}  className='card'>
         <Title size={props.size} title={props.title} />
         <img src={props.src} alt={props.alt} />
        <HiddenText text={props.text} />
        <Select txtlabel='Select color' txtoptions={listColor} func={setColor} />
        <AddColor func={AddListColor}/>
    </div>
  )
}

export default Card