
import {Data} from "../Data.js"
import Tour from "./Tour.js"

import React from 'react'

const Cards = () => {
  return (
    <div>
        {
            Data.map(each=> <Tour key={each.id} x={each} />)
        }
    </div>
  )
}

export default Cards