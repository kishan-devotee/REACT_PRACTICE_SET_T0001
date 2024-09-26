import React from 'react'

interface propsType {
    id : number;
    text : string;
}

const HomePage : React.FC<propsType> = (props) => {
  return (
    <div>
      {props.id} ) <br />
      <h1>{props.text}</h1>
    </div>
  )
}

export default HomePage;

