import React from 'react'
import {scaleLinear, scaleBand, max} from 'd3'
import {useData} from './useData'
import AxisLeft from './AxisLeft'
import AxisBottom from './AxisBottom'

function App() {
  const width = 960
  const height = 500
  const margin = {top: 20, right: 20, bottom: 65, left: 100}

  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const data = useData()

  if(!data){
    return <p>Loading...</p>
  }

  const xScale = scaleBand()
    .domain(data.map(d => d.Country_Region))
    .range([0, innerWidth])
  
  const yScale = scaleLinear()
    .domain([0, max(data, d => d.People_Fully_Vaccinated)])
    .range([0, innerHeight]) 

  const dataPlots = data.map((d, idx) => (
      <rect 
        key={idx}
        x={xScale(d.Country_Region)}
        y={innerHeight - yScale(d.People_Fully_Vaccinated)}
        width={xScale.bandwidth()}
        height={yScale(d.People_Fully_Vaccinated)}
      />
    ))

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom xScale={xScale} innerHeight={innerHeight}/>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} innerHeight={innerHeight}/>
        {dataPlots}
      </g>
    </svg>
  )
  
}

export default App;
