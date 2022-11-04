import React from "react";
import { useLocation } from 'react-router-dom'

export default function Sport(){
    const data = useLocation()
    // const { imageSrc } = data.state
    console.log(data.state.imgSrc)

    return (
      <article>
        <img width="100" src={data.state.imgSrc} alt={data.state.title} /><p>An image of a {data.state.title} should show up above.</p>
      </article>
    )
  }
  