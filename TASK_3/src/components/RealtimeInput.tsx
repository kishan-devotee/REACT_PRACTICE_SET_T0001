import React, { ChangeEvent, useState } from 'react'
import { Input } from 'antd';

const RealtimeInput = () => {

    const [value, setValue] = useState<undefined | string>();

  return (
    <>
        <h1>{value}</h1>
    <div>
      <Input placeholder='Write Anything Here...' value={value} onChange={(e : ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}/>
    </div>
    </>
  )
}

export default RealtimeInput
