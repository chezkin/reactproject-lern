import React from 'react'

type Props = {
    txtlabel : string
    txtoptions : string[]
    func : React.Dispatch<React.SetStateAction<string>>
}

const Select = (props: Props) => {
    const setValue = (e : React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value
        props.func(val)
    }
  return (
    <label>{props.txtlabel}
    <select onChange={(e) => setValue(e)} name={props.txtlabel}>
    {props.txtoptions.map((option) => {
        return(<option value={option}>{option}</option>)
    })}
    </select>
    </label>
  )
}

export default Select