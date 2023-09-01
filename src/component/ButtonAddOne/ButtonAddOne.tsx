import React  from 'react'
import { useState } from 'react'

type Props = {}

const ButtonAddOne = (props: Props) => {
    const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  )
}

export default ButtonAddOne