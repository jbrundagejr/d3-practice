import React, {useState, useEffect} from 'react'
import {csv, scaleLinear, format, extent} from 'd3'
import ScatterPlotAxisLeft from '../ScatterPlot/ScatterPlotAxisLeft'
import ScatterPlotAxisBottom from '../ScatterPlot/ScatterPlotAxisBottom'
import ScatterPlotMarks from '../ScatterPlot/ScatterPlotMarks'
import {Loader} from 'semantic-ui-react'

const ScatterPlotChart = () => {
  const width = 1280
  const height = 720
  const margin = {top: 80, right: 80, bottom: 80, left: 80}
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom
  const xAxisLabelOffset = 50
  const yAxisLabelOffset = 30

  const csvURL = "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv"

  const useData = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
      const row = d => {
        d.sepal_length = +d.sepal_length
        d.sepal_width = +d.sepal_width
        d.petal_length = +d.petal_length
        d.petal_width = +d.petal_width 
        return d
      }
      csv(csvURL, row).then(setData)
    }, [])
    return data
  }
  const data = useData()

  console.log(data)

  if(!data){
    return <Loader active inline='centered' />
  }

  const xValue = d => d.sepal_length
  const xAxisLabel = 'Sepal Length'
  const yValue = d => d.sepal_width
  const yAxisLabel = 'Sepal Width'

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice()
  
  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight]) 

  return (
      <svg width={width} height={height} id="chartContainer">
        <g transform={`translate(${margin.left}, ${margin.top})`}>
        <text x={innerWidth /2} y={-15} className="axisLabel">Iris Flower Measurements (in Centimeters)</text>
          <ScatterPlotAxisBottom xScale={xScale} innerHeight={innerHeight} tickOffset={5}/>
          <text 
            className="axisLabel"
            textAnchor="middle"
            transform={`translate(${-yAxisLabelOffset}, ${innerHeight / 2}) rotate(-90)`}
          >
            {yAxisLabel}
          </text>
          <ScatterPlotAxisLeft yScale={yScale} innerWidth={innerWidth} innerHeight={innerHeight} tickOffset={-5}/>
          <text 
            className="axisLabel"
            x={innerWidth/2}
            y={innerHeight + xAxisLabelOffset}
          >
            {xAxisLabel}
          </text>
          <ScatterPlotMarks 
            data={data} 
            xScale={xScale} 
            yScale={yScale} 
            xValue={xValue}
            yValue={yValue}
            markFormat={n => format(',')(n)}
            circleRadius={10}
          />
        </g>
      </svg>
  )
}

export default ScatterPlotChart;