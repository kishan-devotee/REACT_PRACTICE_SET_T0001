import React, { useState } from 'react'

import { Button } from "antd" ;

const CounterPage = () => {

    const [counter, setCounter] = useState<number>(0);

  return (
    <div>
        <h1>{counter}</h1>
      <Button type="primary"  onClick={() => setCounter(counter + 1)}>Increment</Button> <br />
      <Button type="default" danger onClick={() => setCounter(counter - 1)}>Decrement</Button>
    </div>
  )
}

export default CounterPage
