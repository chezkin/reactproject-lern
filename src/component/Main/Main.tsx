import React , {useState} from 'react';
import Card from '../Card/Card';
import './Main.css'

type CardOne = {
    title: string,
    src: string,
    alt: string,
    text: string,
    size : string
};

type Props = {
    data: CardOne[],
};

const Main = (props: Props) => {
    // const [color, setColor] = useState('red');
    // const cards: JSX.Element[] = props.data.map((book) => createBook(book));
    return (
        <div id='main'>
           { props.data.map((card) => {return(
        <Card 
            size={card.size}
            title={card.title}
            src={card.src}
            alt={card.alt}
            text={card.text}           
        />
    )})}
            
        </div>
    );
};



export default Main;
