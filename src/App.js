import React from 'react'
import {scaleLinear, scaleBand, max, format} from 'd3'
import {useData} from './useData'
import AxisLeft from './AxisLeft'
import AxisBottom from './AxisBottom'
import Marks from './Marks'

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

  const xValue = d => d.Country_Region
  const yValue = d => d.People_Fully_Vaccinated

  const xScale = scaleBand()
    .domain(data.map(xValue))
    .range([0, innerWidth])
    .paddingInner(.2)
  
  const yScale = scaleLinear()
    .domain([0, max(data, yValue)])
    .range([0, innerHeight]) 

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom xScale={xScale} innerHeight={innerHeight} />
        <AxisLeft 
          yScale={yScale} 
          innerWidth={innerWidth} 
          tickFormat={n => format('.2s')(n)}/>
        <text x={innerWidth /2} y={innerHeight + 60} className="axisLabel">Country</text>
        <Marks 
          data={data} 
          xScale={xScale} 
          yScale={yScale} 
          innerHeight={innerHeight}
          xValue={xValue}
          yValue={yValue} 
        />
      </g>
    </svg>
  )
}

export default App;