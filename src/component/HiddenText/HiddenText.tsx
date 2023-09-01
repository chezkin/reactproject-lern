import React , {useState} from 'react'

type Props = {
    text : string
}

const HiddenText = (props: Props) => {
  const [bool, setBool] = useState(false);

  const [txtButton, setTxtButton] = useState('more information');
  
  const [txtp, setTxtp] = useState('');

  const toggleInfo = () => {

    setBool(!bool);

    if (!bool) {

      setTxtButton('lees information');

      setTxtp(props.text);

    } else {

      setTxtButton('more information');

      setTxtp("");

    }

  }

  return (
    <>
      <button onClick={toggleInfo}>{txtButton}</button>
      <p>{txtp}</p>
    </>
  );

};


export default HiddenText