import { useState} from 'react'
import Title from '../Titel/Title'
import HiddenText from '../HiddenText/HiddenText'
import Select from '../Select/Select'

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
  return (
    <div style={{background: color}}  className='card'>
         <Title size={props.size} title={props.title} />
         <img src={props.src} alt={props.alt} />
        <HiddenText text={props.text} />
        <Select txtlabel='Select color' txtoptions={['red', 'blue', 'green', 'yellow']} func={setColor} />
    </div>
  )
}

export default Card