import React from "react";
import sportsData from '../data/sportsData'
import { Link, Outlet } from 'react-router-dom'

export default function Sports(){

    const sportLinks = sportsData.map(sport => {
        const imgData = {
            pathname: `${sport.id}`,
            imgSrc: `${sport.imageSrc}`,
            title: `${sport.title}`
        }
        
        return (
            <li key={sport.id}>
            <Link to={`${sport.id}`} state={imgData}>{sport.title}</Link>
            </li>
        )
    })
    console.log(sportLinks)
    return (
        <section>
            <h1>Sports</h1>

            <ul>{sportLinks}</ul>
            
                <Outlet />


        </section>
  )
}